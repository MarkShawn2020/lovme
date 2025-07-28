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
        // Base styling following DESIGN.md FeatureCard specification
        'flex cursor-pointer flex-col gap-4 p-6',
        // Border and background - gradient from secondary to primary dark
        'rounded-lg border border-components-card-border',
        'bg-gradient-to-b from-components-panel-bg to-background-body',
        // Hover state with primary border color (DESIGN.md: border changes to primary on hover)
        'transition-all duration-200 hover:border-primary-500',
        // Shadow effect
        'shadow-sm hover:shadow-md',
        className,
      )}
      onClick={onClick}
    >
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-components-panel-on-panel-item-bg">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-semibold leading-normal text-text-primary">{title}</h3>
      <p className="text-base leading-relaxed text-text-secondary">{description}</p>
    </div>
  )
}

export default FeatureCard
