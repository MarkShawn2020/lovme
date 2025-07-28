'use client'

import { useState } from 'react'
import type { FC } from 'react'
import cn from '@/utils/classnames'

export type FAQItem = {
  question: string
  answer: string
}

export type FAQAccordionProps = {
  items: FAQItem[]
}

const FAQAccordion: FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-white/10 bg-black/50 transition-all hover:border-white/20"
        >
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between p-6 text-left"
          >
            <span className="text-lg font-medium text-white pr-4">{item.question}</span>
            <svg
              className={cn(
                'h-5 w-5 flex-shrink-0 text-white/60 transition-transform duration-200',
                openIndex === index && 'rotate-180'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={cn(
              'overflow-hidden transition-all duration-200',
              openIndex === index ? 'max-h-96' : 'max-h-0'
            )}
          >
            <div className="border-t border-white/10 px-6 py-4">
              <p className="text-white/80 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion
