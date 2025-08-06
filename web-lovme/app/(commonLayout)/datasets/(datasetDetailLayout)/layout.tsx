import type { FC } from 'react'
import React from 'react'
import ClaudeContainer from '@/app/components/layout/claude-container'
import ClaudeSection from '@/app/components/layout/claude-section'
import cn from '@/utils/classnames'

export type IDatasetDetail = {
  children: React.ReactNode
}

const DatasetDetailLayout: FC<IDatasetDetail> = ({ children }) => {
  return (
    <div className="w-full">
      {/* Dataset detail header section */}
      <ClaudeSection 
        theme="ivory" 
        padding="md"
        withBorder
        animate
      >
        <div className="py-claude-s">
          <nav className="flex items-center space-x-2 text-sm">
            <span className="text-claude-text-secondary">Datasets</span>
            <span className="text-claude-text-tertiary">/</span>
            <span className="text-claude-text-main font-medium">Detail</span>
          </nav>
        </div>
      </ClaudeSection>

      {/* Main content area with proper layout */}
      <ClaudeContainer 
        size="xl" 
        padding="lg"
        className="animate-claude-slide-up"
      >
        <div 
          className={cn(
            'grid grid-cols-1 lg:grid-cols-12 gap-claude-l',
            'mt-claude-gutter',
          )}
        >
          {/* Sidebar area (3 cols on desktop) */}
          <aside className="lg:col-span-3">
            <div 
              className={cn(
                'sticky top-20',
                'bg-white rounded-claude-lg',
                'border border-claude-border-subtle',
                'shadow-claude-sm',
                'p-claude-m',
                'animate-claude-fade-in',
              )}
            >
              <h3 className="text-lg font-claude-serif font-medium text-claude-text-main mb-claude-s">
                Dataset Information
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-claude-text-secondary">Status:</span>
                  <span className="ml-2 text-claude-text-main">Active</span>
                </div>
                <div>
                  <span className="text-claude-text-secondary">Documents:</span>
                  <span className="ml-2 text-claude-text-main">--</span>
                </div>
                <div>
                  <span className="text-claude-text-secondary">Last Updated:</span>
                  <span className="ml-2 text-claude-text-main">--</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content area (9 cols on desktop) */}
          <main className="lg:col-span-9">
            <div 
              className={cn(
                'bg-white rounded-claude-lg',
                'border border-claude-border-subtle',
                'shadow-claude-md',
                'overflow-hidden',
                'animate-claude-slide-up animation-delay-100',
              )}
            >
              {children}
            </div>
          </main>
        </div>
      </ClaudeContainer>
    </div>
  )
}

export default React.memo(DatasetDetailLayout)