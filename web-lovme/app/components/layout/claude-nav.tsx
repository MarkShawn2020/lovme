'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from '@/utils/classnames'

export interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
  badge?: string | number
  disabled?: boolean
}

interface ClaudeNavProps {
  items: NavItem[]
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'pills' | 'underline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/**
 * Claude Design System Navigation Component
 * Implements navigation patterns from the design guide
 */
const ClaudeNav: React.FC<ClaudeNavProps> = ({
  items,
  orientation = 'horizontal',
  variant = 'default',
  size = 'md',
  className,
}) => {
  const pathname = usePathname()

  // Size configurations
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
  }

  // Base item styles
  const baseItemClasses = cn(
    'relative flex items-center gap-2',
    'font-medium transition-all duration-claude ease-claude',
    'focus:outline-none focus:ring-2 focus:ring-claude-primary/20',
    sizeClasses[size],
  )

  // Variant styles
  const getVariantClasses = (isActive: boolean, isDisabled: boolean) => {
    if (isDisabled)
      return 'text-claude-text-quaternary cursor-not-allowed opacity-50'

    switch (variant) {
      case 'pills':
        return cn(
          'rounded-claude-md',
          isActive
            ? 'bg-claude-primary text-white shadow-claude-md'
            : 'text-claude-text-secondary hover:bg-claude-bg-ivory hover:text-claude-text-main',
        )

      case 'underline':
        return cn(
          'border-b-2 transition-colors',
          isActive
            ? 'border-claude-primary text-claude-primary'
            : 'border-transparent text-claude-text-secondary hover:text-claude-text-main hover:border-claude-border-subtle',
        )

      default:
        return cn(
          'rounded-claude-sm',
          isActive
            ? 'text-claude-primary bg-claude-primary/10'
            : 'text-claude-text-secondary hover:text-claude-text-main hover:bg-claude-bg-ivory',
        )
    }
  }

  // Container styles
  const containerClasses = cn(
    'flex',
    orientation === 'horizontal'
      ? 'flex-row items-center space-x-1'
      : 'flex-col space-y-1',
    className,
  )

  return (
    <nav className={containerClasses} role="navigation">
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
        const itemClasses = cn(
          baseItemClasses,
          getVariantClasses(isActive, item.disabled || false),
        )

        if (item.disabled) {
          return (
            <span key={item.href} className={itemClasses}>
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto px-2 py-0.5 text-xs bg-claude-bg-ivory rounded-full">
                  {item.badge}
                </span>
              )}
            </span>
          )
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={itemClasses}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.icon && <span className="shrink-0">{item.icon}</span>}
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto px-2 py-0.5 text-xs bg-claude-primary text-white rounded-full animate-pulse">
                {item.badge}
              </span>
            )}

            {/* Active indicator for underline variant */}
            {variant === 'underline' && isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-claude-primary animate-claude-scale" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

export default ClaudeNav
