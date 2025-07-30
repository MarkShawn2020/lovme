'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { useTranslation } from 'react-i18next'
import AppIcon from '@/app/components/base/app-icon'
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
    <div className="flex flex-col h-full bg-background-main">
      {/* Header */}
      <div className="border-b border-divider-subtle px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-text-primary">{t('aiAssistant.title')}</h2>
            <p className="text-sm text-text-tertiary">
              {selectedDatasets.length > 0 
                ? t(`aiAssistant.chat.header_subtitle_${selectedDatasets.length > 1 ? 'multiple' : 'single'}`, { count: selectedDatasets.length })
                : t('aiAssistant.chat.select_sources_prompt')}
            </p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-6">
          {showWelcome && messages.length === 0 && (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <AppIcon
                size='xl'
                iconType='emoji'
                icon="🤖"
                background="#E8E6DC"
                className="mb-6"
              />
              <h3 className="text-2xl font-semibold text-text-primary mb-3">
                {t('aiAssistant.welcome.title')}
              </h3>
              <p className="text-text-tertiary max-w-md mb-8">
                {t('aiAssistant.welcome.description')}
              </p>
              {selectedDatasets.length === 0 && (
                <div className="bg-state-warning-hover rounded-lg px-4 py-3 text-sm text-text-secondary">
                  {t('aiAssistant.welcome.no_sources_selected')}
                </div>
              )}
            </div>
          )}

          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex gap-4',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <AppIcon
                    size='md'
                    iconType='emoji'
                    icon="🤖"
                    background="#E8E6DC"
                    className="flex-shrink-0"
                  />
                )}
                
                <div
                  className={cn(
                    'rounded-2xl px-4 py-3 max-w-[80%]',
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-background-secondary'
                  )}
                >
                  {message.role === 'user' ? (
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  ) : (
                    <Markdown content={message.content} />
                  )}
                  
                  {/* Show sources if available */}
                  {message.role === 'assistant' && message.annotations?.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-divider-subtle">
                      <p className="text-xs font-medium text-text-tertiary mb-2">{t('aiAssistant.chat.sources_label')}</p>
                      <div className="space-y-1">
                        {message.annotations.map((annotation: any, index: number) => (
                          <div key={index} className="text-xs text-text-tertiary">
                            • {annotation.documentName || 'Document'} 
                            {annotation.score && (
                              <span className="ml-1 text-text-quaternary">
                                ({t('aiAssistant.chat.relevance_score', { score: (annotation.score * 100).toFixed(0) })})
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
                    size={32}
                    className="flex-shrink-0"
                  />
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-4">
                <AppIcon
                  size='md'
                  iconType='emoji'
                  icon="🤖"
                  background="#E8E6DC"
                  className="flex-shrink-0"
                />
                <div className="bg-background-secondary rounded-2xl px-4 py-3">
                  <Loading type="area" />
                </div>
              </div>
            )}
          </div>
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-divider-subtle bg-background-main">
        <form onSubmit={handleFormSubmit} className="max-w-4xl mx-auto px-6 py-4">
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
                "w-full px-4 py-3 pr-12 rounded-xl border",
                "bg-background-default text-text-primary placeholder-text-quaternary",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                selectedDatasets.length === 0 ? "border-divider-subtle" : "border-divider-regular"
              )}
            />
            <button
              type="submit"
              disabled={!input.trim() || selectedDatasets.length === 0 || isLoading}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2",
                "w-8 h-8 rounded-lg flex items-center justify-center",
                "transition-colors duration-200",
                input.trim() && selectedDatasets.length > 0 && !isLoading
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "bg-background-secondary text-text-quaternary cursor-not-allowed"
              )}
            >
              <RiSendPlaneFill className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AIChat