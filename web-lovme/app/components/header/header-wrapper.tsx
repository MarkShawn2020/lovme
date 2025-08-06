'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useEventEmitterContextContext } from '@/context/event-emitter'
import cn from '@/utils/classnames'

type HeaderWrapperProps = {
  children: React.ReactNode
}

const HeaderWrapper = ({
  children,
}: HeaderWrapperProps) => {
  const pathname = usePathname()
  const isBordered = ['/apps', '/datasets', '/datasets/create', '/tools'].includes(pathname)
  // Check if the current path is a workflow canvas & fullscreen
  const inWorkflowCanvas = pathname.endsWith('/workflow')
  const workflowCanvasMaximize = localStorage.getItem('workflow-canvas-maximize') === 'true'
  const [hideHeader, setHideHeader] = useState(workflowCanvasMaximize)
  const { eventEmitter } = useEventEmitterContextContext()

  eventEmitter?.useSubscription((v: any) => {
    if (v?.type === 'workflow-canvas-maximize')
      setHideHeader(v.payload)
  })

  // Environment-specific styles (from CSS module)
  const getEnvironmentStyles = () => {
    const env = process.env.NODE_ENV
    if (env === 'development') {
      return {
        background: 'linear-gradient(180deg, rgba(253, 176, 34, 0.08) 0%, rgba(253, 176, 34, 0) 100%)',
        borderTop: '4px solid #FDB022',
      }
    } else if (env === 'test') {
      return {
        background: 'linear-gradient(180deg, rgba(6, 174, 212, 0.08) 0%, rgba(6, 174, 212, 0) 100%)',
        borderTop: '4px solid #06AED4',
      }
    }
    return {}
  }

  return (
    <div 
      className={cn(
        // Base styles with Claude design system
        'sticky left-0 right-0 top-0 z-[15]',
        'flex min-h-[56px] shrink-0 grow-0 basis-auto flex-col',
        // Claude design tokens
        'bg-white/95 backdrop-blur-sm',
        'transition-all duration-claude ease-claude',
        // Conditional border with Claude design token
        isBordered && 'border-b border-claude-border-subtle',
        // Hide in workflow canvas when maximized
        hideHeader && inWorkflowCanvas && 'hidden',
        // Subtle animation
        'animate-claude-fade-in',
      )}
      style={getEnvironmentStyles()}
    >
      {children}
    </div>
  )
}
export default HeaderWrapper
