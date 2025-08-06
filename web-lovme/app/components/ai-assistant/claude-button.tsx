'use client'

import React from 'react'
import cn from '@/utils/classnames'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

type ClaudeButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
  fullWidth?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ClaudeButton = React.forwardRef<HTMLButtonElement, ClaudeButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    // Variant styles aligned with design guide
    const variantStyles = {
      primary: cn(
        'border-transparent bg-claude-primary text-white',
        'hover:shadow-claude-lg hover:scale-[1.02] hover:bg-claude-primary-hover',
        'focus:ring-2 focus:ring-claude-primary/50',
        'disabled:cursor-not-allowed disabled:bg-claude-primary disabled:opacity-50 disabled:hover:scale-100',
      ),
      secondary: cn(
        'border-claude-border-default bg-transparent text-claude-text-main',
        'hover:shadow-claude-md hover:border-claude-text-secondary hover:bg-claude-bg-ivory',
        'focus:ring-2 focus:ring-claude-text-secondary/30',
        'disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50 disabled:hover:bg-transparent',
      ),
      tertiary: cn(
        'border-transparent bg-claude-bg-ivory text-claude-text-main',
        'hover:shadow-claude-sm hover:bg-claude-swatch-cloud-light',
        'focus:ring-2 focus:ring-claude-text-secondary/20',
        'disabled:cursor-not-allowed disabled:bg-claude-bg-ivory disabled:opacity-50',
      ),
      ghost: cn(
        'border-transparent bg-transparent text-claude-text-secondary',
        'hover:bg-claude-bg-ivory hover:text-claude-text-main',
        'focus:ring-2 focus:ring-claude-text-secondary/20',
        'disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-50',
      ),
    }

    // Size styles
    const sizeStyles = {
      sm: 'px-claude-s py-2 text-sm rounded-claude-sm',
      md: 'px-claude-m py-2.5 text-base rounded-claude-md',
      lg: 'px-claude-l py-3 text-lg rounded-claude-lg',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center font-medium',
          'border transition-all duration-claude ease-claude',
          'focus:outline-none',

          // Variant styles
          variantStyles[variant],

          // Size styles
          sizeStyles[size],

          // Full width
          fullWidth && 'w-full',

          // Shadow
          'shadow-claude-sm',

          // Custom className
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="-ml-1 mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  },
)

ClaudeButton.displayName = 'ClaudeButton'

export default ClaudeButton
