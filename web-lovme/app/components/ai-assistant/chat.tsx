'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { useTranslation } from 'react-i18next'
import { Markdown } from '@/app/components/base/markdown'
import Avatar from '@/app/components/base/avatar'
import { useAppContext } from '@/context/app-context'
import { RiSendPlaneFill } from '@remixicon/react'
import Loading from '@/app/components/base/loading'
import cn from '@/utils/classnames'

type AIChatProps = {
  selectedDatasets: string[]
}

const AIChat = ({ selectedDatasets }: AIChatProps) => {
  const { t } = useTranslation()
  const { userProfile } = useAppContext()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showWelcome, setShowWelcome] = useState(true)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/ai-chat',
    body: {
      datasetIds: selectedDatasets,
    },
    onResponse: () => {
      setShowWelcome(false)
    },
  })

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || selectedDatasets.length === 0) return
    handleSubmit(e)
  }, [input, selectedDatasets, handleSubmit])

  return (
    <div className="flex h-full flex-col bg-claude-bg-main">
      {/* Header - Aligned with design guide */}
      <div className="border-b border-claude-border-subtle bg-white px-claude-gutter py-claude-m">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-claude-display-s font-claude-serif font-semibold text-claude-text-main">
                {t('aiAssistant.title')}
              </h2>
              <p className="text-claude-paragraph-m mt-1 text-claude-text-secondary">
                {selectedDatasets.length > 0
                  ? t(`aiAssistant.chat.header_subtitle_${selectedDatasets.length > 1 ? 'multiple' : 'single'}`, { count: selectedDatasets.length })
                  : t('aiAssistant.chat.select_sources_prompt')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area - Improved layout */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-claude-bg-main to-claude-bg-ivory">
        <div className="mx-auto max-w-7xl px-claude-gutter py-claude-xl">
          {showWelcome && messages.length === 0 && (
            <div className="animate-claude-fade-in flex min-h-[400px] flex-col items-center justify-center text-center">
              <div className="shadow-claude-md mb-claude-gutter flex h-20 w-20 items-center justify-center rounded-claude-full bg-claude-swatch-cloud-light">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-claude-display-m mb-claude-s font-claude-serif font-semibold text-claude-text-main">
                {t('aiAssistant.welcome.title')}
              </h3>
              <p className="text-claude-paragraph-m mb-claude-gutter max-w-md leading-relaxed text-claude-text-secondary">
                {t('aiAssistant.welcome.description')}
              </p>
              {selectedDatasets.length === 0 && (
                <div className="text-claude-detail rounded-claude-md border border-claude-swatch-olive/30 bg-claude-swatch-olive/20 px-claude-m py-claude-s text-claude-text-secondary">
                  {t('aiAssistant.welcome.no_sources_selected')}
                </div>
              )}
            </div>
          )}

          <div className="space-y-claude-m">
            {messages.map(message => (
              <div
                key={message.id}
                className={cn(
                  'animate-claude-slide-up flex gap-claude-s',
                  message.role === 'user' ? 'justify-end' : 'justify-start',
                )}
              >
                {message.role === 'assistant' && (
                  <div className="shadow-claude-sm flex h-10 w-10 shrink-0 items-center justify-center rounded-claude-full bg-claude-swatch-cloud-light">
                    <span className="text-xl">🤖</span>
                  </div>
                )}

                <div
                  className={cn(
                    'shadow-claude-md max-w-[70%] px-claude-m py-claude-s transition-all duration-claude ease-claude',
                    message.role === 'user'
                      ? 'hover:shadow-claude-lg rounded-claude-lg bg-claude-primary text-white hover:scale-[1.02]'
                      : 'hover:shadow-claude-lg rounded-claude-lg border border-claude-border-subtle bg-white',
                  )}
                >
                  {message.role === 'user' ? (
                    <p className="text-claude-paragraph-m whitespace-pre-wrap">{message.content}</p>
                  ) : (
                    <div className="prose-claude prose max-w-none">
                      <Markdown content={message.content} />
                    </div>
                  )}

                  {/* Sources with improved design */}
                  {message.role === 'assistant' && message.annotations?.length > 0 && (
                    <div className="mt-claude-s border-t border-claude-border-subtle pt-claude-s">
                      <p className="text-claude-detail mb-2 font-medium uppercase tracking-wide text-claude-text-secondary">
                        {t('aiAssistant.chat.sources_label')}
                      </p>
                      <div className="space-y-1">
                        {message.annotations.map((annotation: any, index: number) => (
                          <div key={index} className="text-claude-detail flex items-center gap-2 text-claude-text-tertiary">
                            <span className="h-1 w-1 rounded-full bg-claude-primary"></span>
                            <span className="font-medium">{annotation.documentName || 'Document'}</span>
                            {annotation.score && (
                              <span className="text-claude-text-quaternary">
                                ({(annotation.score * 100).toFixed(0)}% match)
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {message.role === 'user' && userProfile?.avatar && (
                  <Avatar
                    avatar={userProfile.avatar}
                    name={userProfile.name}
                    size={40}
                    className="shadow-claude-sm shrink-0"
                  />
                )}
              </div>
            ))}

            {isLoading && (
              <div className="animate-claude-fade-in flex gap-claude-s">
                <div className="shadow-claude-sm flex h-10 w-10 shrink-0 items-center justify-center rounded-claude-full bg-claude-swatch-cloud-light">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="shadow-claude-md rounded-claude-lg border border-claude-border-subtle bg-white px-claude-m py-claude-s">
                  <Loading type="area" />
                </div>
              </div>
            )}
          </div>

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area - Enhanced design */}
      <div className="shadow-claude-lg border-t border-claude-border-subtle bg-white">
        <form onSubmit={handleFormSubmit} className="mx-auto max-w-7xl px-claude-gutter py-claude-m">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder={
                selectedDatasets.length > 0
                  ? t('aiAssistant.chat.input_placeholder')
                  : t('aiAssistant.chat.input_placeholder_disabled')
              }
              disabled={selectedDatasets.length === 0}
              className={cn(
                'w-full rounded-claude-lg border-2 px-claude-m py-3 pr-14',
                'bg-claude-bg-main text-claude-text-main placeholder:text-claude-text-tertiary',
                'transition-all duration-claude ease-claude',
                'focus:border-claude-primary focus:outline-none focus:ring-2 focus:ring-claude-primary/30',
                'disabled:cursor-not-allowed disabled:bg-claude-bg-ivory disabled:opacity-50',
                selectedDatasets.length === 0
                  ? 'border-claude-border-subtle'
                  : 'border-claude-border-subtle hover:border-claude-text-secondary',
              )}
            />
            <button
              type="submit"
              disabled={!input.trim() || selectedDatasets.length === 0 || isLoading}
              className={cn(
                'absolute right-3 top-1/2 -translate-y-1/2',
                'flex h-9 w-9 items-center justify-center rounded-claude-md',
                'transition-all duration-claude ease-claude',
                input.trim() && selectedDatasets.length > 0 && !isLoading
                  ? 'shadow-claude-sm hover:shadow-claude-md bg-claude-primary text-white hover:scale-110 hover:bg-claude-primary-hover'
                  : 'cursor-not-allowed bg-claude-bg-ivory text-claude-text-quaternary',
              )}
            >
              <RiSendPlaneFill className="h-4 w-4" />
            </button>
          </div>

          {/* Helper text */}
          {selectedDatasets.length > 0 && (
            <p className="text-claude-detail mt-2 text-center text-claude-text-tertiary">
              Press Enter to send • Shift+Enter for new line
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default AIChat
