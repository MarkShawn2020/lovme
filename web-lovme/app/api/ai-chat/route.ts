import { openai } from '@ai-sdk/openai'
import { convertToModelMessages, streamText } from 'ai'
import type { NextRequest } from 'next/server'
import { getServerSideUserInfo } from '@/app/api/utils'
import { API_PREFIX } from '@/config'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: NextRequest) {
  try {
    // Get user info
    const userInfo = await getServerSideUserInfo(req)
    if (!userInfo)
      return new Response('Unauthorized', { status: 401 })

    const { messages, datasetIds } = await req.json()

    if (!messages || !Array.isArray(messages))
      return new Response('Invalid messages format', { status: 400 })

    if (!datasetIds || datasetIds.length === 0)
      return new Response('No knowledge bases selected', { status: 400 })

    // Search for relevant content from knowledge bases
    const relevantContent = await searchKnowledgeBases(messages[messages.length - 1].content, datasetIds, userInfo.accessToken)

    // Format the context for the model
    const context = formatRetrievedContent(relevantContent)

    // Stream the response
    const result = streamText({
      model: openai('gpt-4o'),
      system: `You are a helpful AI assistant that answers questions based on the provided knowledge base content.
      
IMPORTANT RULES:
1. Only use information from the provided context to answer questions
2. If the context doesn't contain relevant information, say "I don't have information about that in the selected knowledge bases"
3. Always cite which document or source your information comes from
4. Be accurate and don't make up information
5. If multiple sources have conflicting information, mention this to the user

Context from knowledge bases:
${context}`,
      messages: convertToModelMessages(messages),
      temperature: 0.2, // Lower temperature for more consistent, factual responses
      tools: {
        searchMoreContent: {
          description: 'Search for more specific content in the knowledge bases',
          parameters: {
            query: {
              type: 'string',
              description: 'The search query',
            },
          },
          execute: async ({ query }) => {
            const moreContent = await searchKnowledgeBases(query, datasetIds, userInfo.accessToken)
            return formatRetrievedContent(moreContent)
          },
        },
      },
    })

    return result.toUIMessageStreamResponse({
      getAnnotations: () => {
        // Include source annotations for transparency
        return relevantContent.map(item => ({
          documentName: item.document_name,
          documentId: item.document_id,
          score: item.score,
          content: `${item.content.substring(0, 100)}...`,
        }))
      },
    })
  }
 catch (error) {
    console.error('AI Chat error:', error)
    return new Response('Internal server error', { status: 500 })
  }
}

// Search knowledge bases for relevant content
async function searchKnowledgeBases(query: string, datasetIds: string[], accessToken: string) {
  try {
    const searchPromises = datasetIds.map(datasetId =>
      fetch(`${API_PREFIX}/datasets/${datasetId}/hit-testing`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          query,
          retrieval_model: {
            search_method: 'hybrid_search',
            reranking_enable: true,
            reranking_mode: 'reranking_model',
            reranking_model: {
              provider: 'cohere',
              model: 'rerank-english-v2.0',
            },
            top_k: 5,
            score_threshold_enabled: true,
            score_threshold: 0.5,
          },
        }),
      }).then(res => res.json()),
    )

    const results = await Promise.all(searchPromises)

    // Combine and sort results by score
    const allRecords = results.flatMap((result, index) =>
      result.records?.map((record: any) => ({
        ...record,
        dataset_id: datasetIds[index],
        document_name: record.segment?.document?.name || 'Unknown Document',
        document_id: record.segment?.document?.id,
        content: record.segment?.content || record.content,
        score: record.score,
      })) || [],
    )

    // Sort by score and take top results
    return allRecords
      .sort((a, b) => b.score - a.score)
      .slice(0, 10) // Top 10 most relevant chunks
  }
 catch (error) {
    console.error('Knowledge base search error:', error)
    return []
  }
}

// Format retrieved content for the model
function formatRetrievedContent(records: any[]) {
  if (records.length === 0)
    return 'No relevant information found in the knowledge bases.'

  return records.map((record, index) =>
    `[Source ${index + 1}: ${record.document_name}]
${record.content}
---`,
  ).join('\n\n')
}
