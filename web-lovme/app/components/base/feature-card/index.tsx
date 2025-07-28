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
        'flex cursor-pointer flex-col gap-4 rounded-lg border border-border-muted bg-gradient-to-b from-dark-surface to-bg-dark p-6 transition-colors hover:border-primary-500',
        className,
      )}
      onClick={onClick}
    >
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-dark-accent">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-semibold text-text-primary">{title}</h3>
      <p className="text-base text-text-secondary">{description}</p>
    </div>
  )
}

export default FeatureCard
