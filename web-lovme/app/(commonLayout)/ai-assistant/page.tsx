'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AIChat from '@/app/components/ai-assistant/chat'
import KnowledgeBaseSelector from '@/app/components/ai-assistant/knowledge-base-selector'
import { useDatasets } from '@/service/datasets'
import AppIcon from '@/app/components/base/app-icon'
import Button from '@/app/components/base/button'
import { RiMagicLine } from '@remixicon/react'

const AIAssistantPage = () => {
  const { t } = useTranslation()
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>([])
  const { data: datasetsData } = useDatasets({ url: '/datasets', params: { page: 1, limit: 100 } })

  return (
    <div className="flex h-full bg-background-main">
      {/* Sidebar */}
      <div className="w-80 border-r border-divider-subtle bg-background-main p-6">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <AppIcon
              size='lg'
              iconType='emoji'
              icon="🤖"
              background="#E8E6DC"
            />
            <div>
              <h1 className="text-xl font-semibold text-text-primary">{t('aiAssistant.title')}</h1>
              <p className="text-sm text-text-tertiary">{t('aiAssistant.description')}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-medium text-text-secondary mb-3">{t('aiAssistant.sidebar.knowledge_sources')}</h2>
          <KnowledgeBaseSelector
            datasets={datasetsData?.data || []}
            selectedDatasets={selectedDatasets}
            onSelectionChange={setSelectedDatasets}
          />
        </div>

        <div className="border-t border-divider-subtle pt-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-state-info-hover flex items-center justify-center flex-shrink-0">
                <RiMagicLine className="w-4 h-4 text-text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-text-primary mb-1">{t('aiAssistant.sidebar.rag_powered')}</h3>
                <p className="text-xs text-text-tertiary">
                  {t('aiAssistant.sidebar.rag_description')}
                </p>
              </div>
            </div>
            
            <Button
              variant="secondary"
              size="small"
              className="w-full"
              onClick={() => window.location.href = '/datasets/create'}
            >
              {t('aiAssistant.sidebar.add_knowledge_base')}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1">
        <AIChat selectedDatasets={selectedDatasets} />
      </div>
    </div>
  )
}

export default AIAssistantPage