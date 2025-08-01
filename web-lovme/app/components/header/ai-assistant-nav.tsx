'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import classNames from '@/utils/classnames'
import Link from 'next/link'
import { RiMagicLine } from '@remixicon/react'

type AiAssistantNavProps = {
  className?: string
}

const AiAssistantNav = ({ className }: AiAssistantNavProps) => {
  const selectedSegment = useSelectedLayoutSegment()
  const activated = selectedSegment === 'ai-assistant'

  return (
    <Link href="/ai-assistant" className={classNames(
      className, 'group',
      activated && 'bg-state-base-hover font-semibold text-text-primary',
      activated ? 'text-text-primary' : 'text-text-secondary hover:bg-state-base-hover hover:text-text-primary',
    )}>
      <RiMagicLine className="mr-1 h-[18px] w-[18px]" />
      AI Assistant
    </Link>
  )
}

export default AiAssistantNav
