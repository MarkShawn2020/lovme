'use client'

import React from 'react'
import cn from '@/utils/classnames'
import { Markdown } from '@/app/components/base/markdown'
import Avatar from '@/app/components/base/avatar'

type MessageBubbleProps = {
  role: 'user' | 'assistant'
  content: string
  avatar?: {
    url?: string
    name?: string
  }
  sources?: Array<{
    documentName: string
    documentId?: string
    score?: number
    content?: string
  }>
  isLoading?: boolean
  className?: string
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  role,
  content,
  avatar,
  sources,
  isLoading: _isLoading = false,
  className,
}) => {
  const isUser = role === 'user'

  return (
    <div
      className={cn(
        'animate-claude-slide-up flex gap-claude-s',
        isUser ? 'justify-end' : 'justify-start',
        className,
      )}
    >
      {/* Assistant Avatar */}
      {!isUser && (
        <div className="shadow-claude-sm flex h-10 w-10 shrink-0 items-center justify-center rounded-claude-full bg-claude-swatch-cloud-light transition-transform hover:scale-110">
          <span className="text-xl">🤖</span>
        </div>
      )}

      {/* Message Content */}
      <div
        className={cn(
          'group relative max-w-[70%]',
          'px-claude-m py-claude-s',
          'shadow-claude-md transition-all duration-claude ease-claude',
          isUser
            ? 'hover:shadow-claude-lg rounded-claude-lg bg-claude-primary text-white hover:scale-[1.02]'
            : 'hover:shadow-claude-lg rounded-claude-lg border border-claude-border-subtle bg-white',
        )}
      >
        {/* Content */}
        {isUser ? (
          <p className="text-claude-paragraph-m whitespace-pre-wrap">{content}</p>
        ) : (
          <div className="prose-claude prose max-w-none">
            <Markdown content={content} />
          </div>
        )}

        {/* Sources Section */}
        {!isUser && sources && sources.length > 0 && (
          <div className="mt-claude-s border-t border-claude-border-subtle pt-claude-s">
            <p className="text-claude-detail mb-2 font-medium uppercase tracking-wide text-claude-text-secondary">
              Sources
            </p>
            <div className="space-y-1">
              {sources.map((source, index) => (
                <div
                  key={index}
                  className="group/source text-claude-detail flex items-start gap-2 text-claude-text-tertiary transition-colors hover:text-claude-text-secondary"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-claude-primary"></span>
                  <div className="flex-1">
                    <span className="font-medium">
                      {source.documentName || `Document ${index + 1}`}
                    </span>
                    {source.score && (
                      <span className="ml-2 text-claude-text-quaternary">
                        ({(source.score * 100).toFixed(0)}% match)
                      </span>
                    )}
                    {source.content && (
                      <p className="mt-1 line-clamp-2 text-claude-text-quaternary transition-all group-hover/source:line-clamp-none">
                        {source.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timestamp (optional enhancement) */}
        <div className="absolute -bottom-5 right-0 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="text-claude-detail text-claude-text-quaternary">
            {new Date().toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>
      </div>

      {/* User Avatar */}
      {isUser && avatar?.url && (
        <Avatar
          avatar={avatar.url}
          name={avatar.name}
          size={40}
          className="shadow-claude-sm shrink-0"
        />
      )}
    </div>
  )
}

export default MessageBubble
