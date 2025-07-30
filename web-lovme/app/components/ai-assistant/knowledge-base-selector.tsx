'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import cn from '@/utils/classnames'
import { RiCheckboxLine, RiCheckboxBlankLine, RiDatabase2Line, RiSearchLine } from '@remixicon/react'
import type { DataSet } from '@/models/datasets'

type KnowledgeBaseSelectorProps = {
  datasets: DataSet[]
  selectedDatasets: string[]
  onSelectionChange: (selected: string[]) => void
}

const KnowledgeBaseSelector = ({ datasets, selectedDatasets, onSelectionChange }: KnowledgeBaseSelectorProps) => {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDatasets = datasets.filter(dataset =>
    dataset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dataset.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleToggle = (datasetId: string) => {
    if (selectedDatasets.includes(datasetId)) {
      onSelectionChange(selectedDatasets.filter(id => id !== datasetId))
    } else {
      onSelectionChange([...selectedDatasets, datasetId])
    }
  }

  const handleSelectAll = () => {
    if (selectedDatasets.length === filteredDatasets.length) {
      onSelectionChange([])
    } else {
      onSelectionChange(filteredDatasets.map(d => d.id))
    }
  }

  return (
    <div className="space-y-3">
      {/* Search */}
      <div className="relative">
        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-quaternary" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('aiAssistant.sidebar.search_placeholder')}
          className="w-full pl-9 pr-3 py-2 rounded-lg border border-divider-subtle bg-background-default text-sm text-text-primary placeholder-text-quaternary focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Select All */}
      {filteredDatasets.length > 0 && (
        <button
          onClick={handleSelectAll}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-background-secondary transition-colors text-sm"
        >
          {selectedDatasets.length === filteredDatasets.length ? (
            <RiCheckboxLine className="w-4 h-4 text-primary" />
          ) : (
            <RiCheckboxBlankLine className="w-4 h-4 text-text-quaternary" />
          )}
          <span className="text-text-secondary">{t('aiAssistant.sidebar.select_all')} ({filteredDatasets.length})</span>
        </button>
      )}

      {/* Dataset List */}
      <div className="max-h-[400px] overflow-y-auto space-y-1 pr-1">
        {filteredDatasets.length === 0 ? (
          <div className="text-center py-8">
            <RiDatabase2Line className="w-8 h-8 text-text-quaternary mx-auto mb-2" />
            <p className="text-sm text-text-tertiary">{t('aiAssistant.sidebar.no_knowledge_bases')}</p>
          </div>
        ) : (
          filteredDatasets.map((dataset) => (
            <button
              key={dataset.id}
              onClick={() => handleToggle(dataset.id)}
              className={cn(
                "flex items-start gap-3 w-full p-3 rounded-lg transition-colors text-left",
                selectedDatasets.includes(dataset.id)
                  ? "bg-primary-subtle"
                  : "hover:bg-background-secondary"
              )}
            >
              {selectedDatasets.includes(dataset.id) ? (
                <RiCheckboxLine className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              ) : (
                <RiCheckboxBlankLine className="w-4 h-4 text-text-quaternary mt-0.5 flex-shrink-0" />
              )}
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-6 h-6 rounded flex items-center justify-center text-xs font-medium flex-shrink-0"
                    style={{ backgroundColor: dataset.icon_background || '#E8E6DC' }}
                  >
                    {dataset.icon || dataset.name.charAt(0).toUpperCase()}
                  </div>
                  <h4 className="text-sm font-medium text-text-primary truncate">
                    {dataset.name}
                  </h4>
                </div>
                
                {dataset.description && (
                  <p className="text-xs text-text-tertiary line-clamp-2">
                    {dataset.description}
                  </p>
                )}
                
                <div className="flex items-center gap-3 mt-2 text-xs text-text-quaternary">
                  <span>{t('aiAssistant.knowledge_item.docs', { count: dataset.document_count })}</span>
                  <span>•</span>
                  <span>{t('aiAssistant.knowledge_item.words', { count: dataset.word_count.toLocaleString() })}</span>
                  {dataset.embedding_available && (
                    <>
                      <span>•</span>
                      <span className="text-state-success-hover">{t('aiAssistant.knowledge_item.indexed')}</span>
                    </>
                  )}
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  )
}

export default KnowledgeBaseSelector