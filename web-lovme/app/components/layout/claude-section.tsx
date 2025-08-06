'use client'

import React from 'react'
import cn from '@/utils/classnames'
import ClaudeContainer, { type ContainerPadding, type ContainerSize } from './claude-container'

interface ClaudeSectionProps {
  children: React.ReactNode
  // Section theming
  theme?: 'light' | 'dark' | 'ivory' | 'gradient'
  // Container settings
  containerSize?: ContainerSize
  padding?: ContainerPadding
  // Visual enhancements
  withBorder?: boolean
  withShadow?: boolean
  // Layout
  fullHeight?: boolean
  className?: string
  // Animation
  animate?: boolean
  animationDelay?: number
}

/**
 * Claude Design System Section Component
 * Implements the full-width section + centered container pattern
 */
const ClaudeSection: React.FC<ClaudeSectionProps> = ({
  children,
  theme = 'light',
  containerSize = 'lg',
  padding = 'lg',
  withBorder = false,
  withShadow = false,
  fullHeight = false,
  className,
  animate = false,
  animationDelay = 0,
}) => {
  // Theme configurations based on design guide
  const themeClasses = {
    light: 'bg-claude-bg-main text-claude-text-main',
    dark: 'bg-claude-bg-dark text-white',
    ivory: 'bg-claude-bg-ivory text-claude-text-main',
    gradient: 'bg-gradient-to-b from-claude-bg-main via-claude-bg-ivory to-claude-bg-oat text-claude-text-main',
  }

  // Border styles
  const borderClasses = withBorder ? {
    light: 'border-y border-claude-border-subtle',
    dark: 'border-y border-claude-text-quaternary',
    ivory: 'border-y border-claude-swatch-cloud-light',
    gradient: 'border-y border-claude-border-subtle',
  }[theme] : ''

  // Shadow styles
  const shadowClass = withShadow ? 'shadow-claude-lg' : ''

  // Animation classes
  const animationClass = animate ? 'animate-claude-fade-in' : ''
  const animationStyle = animate ? { animationDelay: `${animationDelay}ms` } : {}

  return (
    <section
      className={cn(
        'w-full',
        themeClasses[theme],
        borderClasses,
        shadowClass,
        fullHeight && 'min-h-screen',
        animationClass,
        className,
      )}
      style={animationStyle}
    >
      <ClaudeContainer
        size={containerSize}
        padding={padding}
        background="transparent"
      >
        {children}
      </ClaudeContainer>
    </section>
  )
}

export default ClaudeSection
