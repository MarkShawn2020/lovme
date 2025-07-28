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
        // DESIGN.md exact specifications: gradient background, proper border, padding
        'group relative overflow-hidden rounded-lg border border-[#2E2E2E] bg-gradient-to-b from-[#1C1C1C] to-[#000000] p-6',
        // Hover effects matching DESIGN.md
        'cursor-pointer transition-all duration-300 ease-out',
        'hover:scale-[1.02] hover:border-[#3ECF8E] hover:shadow-lg',
        // Enhanced shadow effects
        'shadow-md shadow-black/30',
        className,
      )}
      onClick={onClick}
    >
      {/* Background gradient overlay on hover */}
      <div className="from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:to-primary-600/10 absolute inset-0 bg-gradient-to-br transition-all duration-500" />

      {/* Content - DESIGN.md exact structure */}
      <div className="relative z-10 flex flex-col gap-4">
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#3B3B3B] transition-all duration-300 group-hover:bg-[#3ECF8E]/20">
            <div className="text-[#3ECF8E] transition-colors duration-300">
              {icon}
            </div>
          </div>
        )}

        {/* DESIGN.md H3 specifications: 24px, font-weight 600, #FFFFFF */}
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        {/* DESIGN.md paragraph specifications: 16px, #AFAFAF */}
        <p className="text-base font-normal leading-relaxed text-[#AFAFAF]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard
