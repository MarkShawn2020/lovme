import React, { useState } from 'react'
import classNames from '@/utils/classnames'

export type CodeBlockProps = {
  code: string
  language?: string
  tabs?: Array<{ label: string; code: string; language?: string }>
  className?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  tabs,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(0)

  const currentCode = tabs ? tabs[activeTab]?.code || code : code
  const currentLanguage = tabs ? tabs[activeTab]?.language || language : language

  return (
    <div className={classNames(
      'border-border-default bg-secondary flex flex-col rounded-lg border',
      className,
    )}>
      {tabs && tabs.length > 0 && (
        <div className="border-border-default flex gap-4 border-b px-4 pt-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={classNames(
                'border-b-2 pb-2 text-sm font-medium transition-colors',
                activeTab === index
                  ? 'border-primary text-text-main'
                  : 'text-text-dark hover:text-text-light border-transparent',
              )}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      <pre className="text-text-light overflow-x-auto p-4 text-sm">
        <code className={`language-${currentLanguage}`}>
          {currentCode}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock
