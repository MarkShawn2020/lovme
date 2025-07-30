const translation = {
  title: 'AI Assistant',
  description: 'Chat with your knowledge base',
  welcome: {
    title: 'Welcome to AI Assistant',
    description: 'I can help you find information from your knowledge bases. Select one or more knowledge sources from the sidebar to get started.',
    no_sources_selected: 'Please select at least one knowledge source to begin chatting',
  },
  sidebar: {
    knowledge_sources: 'Knowledge Sources',
    add_knowledge_base: 'Add Knowledge Base',
    search_placeholder: 'Search knowledge bases...',
    select_all: 'Select all',
    no_knowledge_bases: 'No knowledge bases found',
    rag_powered: 'RAG-Powered Responses',
    rag_description: 'Get accurate answers by searching through your selected knowledge bases',
  },
  chat: {
    header_subtitle_single: 'Using {{count}} knowledge source',
    header_subtitle_multiple: 'Using {{count}} knowledge sources',
    select_sources_prompt: 'Select knowledge sources to start',
    input_placeholder: 'Ask a question about your knowledge base...',
    input_placeholder_disabled: 'Select knowledge sources to start chatting',
    sources_label: 'Sources:',
    relevance_score: 'relevance: {{score}}%',
    no_info_found: "I don't have information about that in the selected knowledge bases",
  },
  knowledge_item: {
    docs: '{{count}} docs',
    words: '{{count}} words',
    indexed: 'Indexed',
  },
}

export default translation