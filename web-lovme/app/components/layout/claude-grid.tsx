'use client'

import React from 'react'
import cn from '@/utils/classnames'

type GridCols = 1 | 2 | 3 | 4 | 6 | 12
type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type GridAlign = 'start' | 'center' | 'end' | 'stretch'

interface ClaudeGridProps {
  children: React.ReactNode
  // Grid configuration
  cols?: GridCols | { mobile?: GridCols; tablet?: GridCols; desktop?: GridCols }
  gap?: GridGap | { x?: GridGap; y?: GridGap }
  // Alignment
  align?: GridAlign
  justify?: GridAlign
  // Responsive behavior
  stackOnMobile?: boolean
  className?: string
}

/**
 * Claude Design System Grid Component
 * Implements the responsive grid system from design guide
 */
const ClaudeGrid: React.FC<ClaudeGridProps> = ({
  children,
  cols = 1,
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  stackOnMobile = true,
  className,
}) => {
  // Column classes
  const getColClasses = () => {
    if (typeof cols === 'number') {
      const baseClass = `grid-cols-${cols}`
      return stackOnMobile ? `grid-cols-1 lg:${baseClass}` : baseClass
    }

    // Responsive columns
    const classes: string[] = []
    if (cols.mobile) classes.push(`grid-cols-${cols.mobile}`)
    if (cols.tablet) classes.push(`md:grid-cols-${cols.tablet}`)
    if (cols.desktop) classes.push(`lg:grid-cols-${cols.desktop}`)
    return classes.join(' ')
  }

  // Gap classes using Claude spacing tokens
  const gapSizes = {
    none: '0',
    xs: 'claude-s',
    sm: 'claude-m',
    md: 'claude-l',
    lg: 'claude-xl',
    xl: 'claude-xxl',
  }

  const getGapClasses = () => {
    if (typeof gap === 'string')
      return gap === 'none' ? '' : `gap-${gapSizes[gap]}`

    const classes: string[] = []
    if (gap.x) classes.push(`gap-x-${gapSizes[gap.x]}`)
    if (gap.y) classes.push(`gap-y-${gapSizes[gap.y]}`)
    return classes.join(' ')
  }

  // Alignment classes
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  }

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    stretch: 'justify-stretch',
  }

  return (
    <div
      className={cn(
        'grid',
        getColClasses(),
        getGapClasses(),
        alignClasses[align],
        justifyClasses[justify],
        className,
      )}
    >
      {children}
    </div>
  )
}

// Grid Item Component for more control
interface ClaudeGridItemProps {
  children: React.ReactNode
  span?: number | { mobile?: number; tablet?: number; desktop?: number }
  order?: number | { mobile?: number; tablet?: number; desktop?: number }
  className?: string
}

export const ClaudeGridItem: React.FC<ClaudeGridItemProps> = ({
  children,
  span,
  order,
  className,
}) => {
  const getSpanClasses = () => {
    if (!span) return ''

    if (typeof span === 'number')
      return `col-span-${span}`

    const classes: string[] = []
    if (span.mobile) classes.push(`col-span-${span.mobile}`)
    if (span.tablet) classes.push(`md:col-span-${span.tablet}`)
    if (span.desktop) classes.push(`lg:col-span-${span.desktop}`)
    return classes.join(' ')
  }

  const getOrderClasses = () => {
    if (!order) return ''

    if (typeof order === 'number')
      return `order-${order}`

    const classes: string[] = []
    if (order.mobile) classes.push(`order-${order.mobile}`)
    if (order.tablet) classes.push(`md:order-${order.tablet}`)
    if (order.desktop) classes.push(`lg:order-${order.desktop}`)
    return classes.join(' ')
  }

  return (
    <div
      className={cn(
        getSpanClasses(),
        getOrderClasses(),
        className,
      )}
    >
      {children}
    </div>
  )
}

export default ClaudeGrid
