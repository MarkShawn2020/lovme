'use client'

import React from 'react'
import cn from '@/utils/classnames'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type ContainerPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl'

interface ClaudeContainerProps {
  children: React.ReactNode
  size?: ContainerSize
  padding?: ContainerPadding
  className?: string
  as?: React.ElementType
  // Background variants
  background?: 'main' | 'ivory' | 'dark' | 'gradient' | 'transparent'
  // Section specific props
  fullBleed?: boolean // Allow content to extend to edges
  centered?: boolean // Center content horizontally
}

/**
 * Claude Design System Container Component
 * Based on the design guide's "全宽分区 + 居中容器" pattern
 */
const ClaudeContainer: React.FC<ClaudeContainerProps> = ({
  children,
  size = 'lg',
  padding = 'md',
  className,
  as: Component = 'div',
  background = 'transparent',
  fullBleed = false,
  centered = true,
}) => {
  // Container max-width based on design guide
  const sizeClasses = {
    sm: 'max-w-3xl', // ~768px
    md: 'max-w-5xl', // ~1024px
    lg: 'max-w-7xl', // ~1280px (primary container from design guide)
    xl: 'max-w-[1440px]', // Extra large
    full: 'max-w-full', // Full width
  }

  // Padding system aligned with claude spacing tokens
  const paddingClasses = {
    none: '',
    sm: 'px-claude-s py-claude-s',
    md: 'px-claude-gutter py-claude-m',
    lg: 'px-claude-gutter py-claude-l',
    xl: 'px-claude-gutter py-claude-xl',
  }

  // Background variants from design system
  const backgroundClasses = {
    main: 'bg-claude-bg-main',
    ivory: 'bg-claude-bg-ivory',
    dark: 'bg-claude-bg-dark text-white',
    gradient: 'bg-gradient-to-b from-claude-bg-main to-claude-bg-ivory',
    transparent: 'bg-transparent',
  }

  // Full bleed wrapper for backgrounds that extend edge-to-edge
  if (fullBleed) {
    return (
      <Component className={cn(backgroundClasses[background], className)}>
        <div className={cn(
          sizeClasses[size],
          paddingClasses[padding],
          centered && 'mx-auto',
          'w-full',
        )}>
          {children}
        </div>
      </Component>
    )
  }

  return (
    <Component
      className={cn(
        sizeClasses[size],
        paddingClasses[padding],
        backgroundClasses[background],
        centered && 'mx-auto',
        'w-full',
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default ClaudeContainer
