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
        // Modern glassmorphism card design
        'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8',
        // Modern hover effects with scale and glow
        'cursor-pointer transition-all duration-500 ease-out',
        'hover:scale-[1.02] hover:border-primary-500/50 hover:bg-gradient-to-br hover:from-primary-500/10 hover:to-primary-600/5',
        // Backdrop blur effect
        'backdrop-blur-xl',
        // Subtle shadow with primary glow on hover
        'shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary-500/20',
        className,
      )}
      onClick={onClick}
    >
      {/* Background gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 transition-all duration-500 group-hover:from-primary-500/5 group-hover:to-primary-600/10" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6">
        {icon && (
          <div className="relative">
            {/* Icon container with gradient background and glow effect */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 shadow-lg shadow-primary-500/20 ring-1 ring-white/10 transition-all duration-300 group-hover:shadow-primary-500/40 group-hover:ring-primary-500/30">
              {/* Background glow */}
              <div className="absolute -inset-2 rounded-xl bg-primary-500/20 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative text-primary-400 transition-colors duration-300 group-hover:text-primary-300">
                {icon}
              </div>
            </div>
          </div>
        )}
        
        {/* Title with modern typography */}
        <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        
        {/* Description with improved readability */}
        <p className="text-base leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
          {description}
        </p>
        
        {/* Subtle arrow indicator */}
        <div className="flex items-center justify-between">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary-500/20 transition-all duration-300 group-hover:to-primary-500/40" />
          <div className="ml-4 rounded-full bg-white/5 p-2 transition-all duration-300 group-hover:bg-primary-500/20 group-hover:text-primary-400">
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary-500/10 blur-2xl transition-all duration-500 group-hover:bg-primary-500/20" />
      <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-primary-600/10 blur-xl transition-all duration-500 group-hover:bg-primary-600/20" />
    </div>
  )
}

export default FeatureCard
