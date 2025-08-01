import React from 'react'
import classNames from '@/utils/classnames'

export type FeatureCardProps = {
  icon?: React.ReactNode
  title: string
  description: string
  className?: string
  onClick?: () => void
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        // Using theme-aware CSS variables for backgrounds and borders
        'group relative overflow-hidden rounded-lg border border-divider-regular bg-gradient-to-b from-components-card-bg to-components-panel-bg p-6',
        // Hover effects with theme-aware colors
        'cursor-pointer transition-all duration-300 ease-out',
        'hover:scale-[1.02] hover:border-primary-500 hover:shadow-lg',
        // Enhanced shadow effects
        'shadow-md shadow-shadow-4',
        className,
      )}
      onClick={onClick}
    >
      {/* Background gradient overlay on hover */}
      <div className="from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/10 absolute inset-0 bg-gradient-to-br transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4">
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-state-base-hover transition-all duration-300 group-hover:bg-primary-500/20">
            <div className="text-primary-500 transition-colors duration-300">
              {icon}
            </div>
          </div>
        )}

        {/* Title with theme-aware text color */}
        <h3 className="text-2xl font-semibold text-text-primary">
          {title}
        </h3>

        {/* Description with theme-aware text color */}
        <p className="text-base font-normal leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard
