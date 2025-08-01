'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import cn from '@/utils/classnames'
import { RiCheckboxBlankLine, RiCheckboxLine, RiDatabase2Line, RiSearchLine } from '@remixicon/react'
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
    dataset.name.toLowerCase().includes(searchQuery.toLowerCase())
    || dataset.description?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleToggle = (datasetId: string) => {
    if (selectedDatasets.includes(datasetId))
      onSelectionChange(selectedDatasets.filter(id => id !== datasetId))
     else
      onSelectionChange([...selectedDatasets, datasetId])
  }

  const handleSelectAll = () => {
    if (selectedDatasets.length === filteredDatasets.length)
      onSelectionChange([])
     else
      onSelectionChange(filteredDatasets.map(d => d.id))
  }

  return (
    <div className="space-y-3">
      {/* Search */}
      <div className="relative">
        <RiSearchLine className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-quaternary" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={t('aiAssistant.sidebar.search_placeholder')}
          className="focus:ring-primary w-full rounded-lg border border-divider-subtle bg-background-default py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-quaternary focus:border-transparent focus:outline-none focus:ring-1"
        />
      </div>

      {/* Select All */}
      {filteredDatasets.length > 0 && (
        <button
          onClick={handleSelectAll}
          className="hover:bg-background-secondary flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors"
        >
          {selectedDatasets.length === filteredDatasets.length ? (
            <RiCheckboxLine className="text-primary h-4 w-4" />
          ) : (
            <RiCheckboxBlankLine className="h-4 w-4 text-text-quaternary" />
          )}
          <span className="text-text-secondary">{t('aiAssistant.sidebar.select_all')} ({filteredDatasets.length})</span>
        </button>
      )}

      {/* Dataset List */}
      <div className="max-h-[400px] space-y-1 overflow-y-auto pr-1">
        {filteredDatasets.length === 0 ? (
          <div className="py-8 text-center">
            <RiDatabase2Line className="mx-auto mb-2 h-8 w-8 text-text-quaternary" />
            <p className="text-sm text-text-tertiary">{t('aiAssistant.sidebar.no_knowledge_bases')}</p>
          </div>
        ) : (
          filteredDatasets.map(dataset => (
            <button
              key={dataset.id}
              onClick={() => handleToggle(dataset.id)}
              className={cn(
                'flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors',
                selectedDatasets.includes(dataset.id)
                  ? 'bg-primary-subtle'
                  : 'hover:bg-background-secondary',
              )}
            >
              {selectedDatasets.includes(dataset.id) ? (
                <RiCheckboxLine className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              ) : (
                <RiCheckboxBlankLine className="mt-0.5 h-4 w-4 shrink-0 text-text-quaternary" />
              )}

              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-xs font-medium"
                    style={{ backgroundColor: dataset.icon_background || '#E8E6DC' }}
                  >
                    {dataset.icon || dataset.name.charAt(0).toUpperCase()}
                  </div>
                  <h4 className="truncate text-sm font-medium text-text-primary">
                    {dataset.name}
                  </h4>
                </div>

                {dataset.description && (
                  <p className="line-clamp-2 text-xs text-text-tertiary">
                    {dataset.description}
                  </p>
                )}

                <div className="mt-2 flex items-center gap-3 text-xs text-text-quaternary">
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
