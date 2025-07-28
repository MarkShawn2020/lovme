'use client'

import type { FC } from 'react'
import cn from '@/utils/classnames'

export type PricingCardProps = {
  title: string
  price: string
  originalPrice?: string
  period?: string
  description: string
  features: string[]
  cta: string
  isPopular?: boolean
  discount?: string
  onCtaClick?: () => void
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  price,
  originalPrice,
  period = '/month',
  description,
  features,
  cta,
  isPopular = false,
  discount,
  onCtaClick,
}) => {
  return (
    <div className={cn(
      'relative flex flex-col rounded-2xl border p-8 transition-all',
      isPopular
        ? 'border-amber-400/50 bg-gradient-to-b from-amber-400/5 to-transparent shadow-[0_0_30px_-5px_rgba(251,191,36,0.3)]'
        : 'border-white/10 bg-black/50 hover:border-white/20',
    )}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-1 text-sm font-semibold text-black">
            Most Popular
          </span>
        </div>
      )}

      {discount && (
        <div className="absolute -right-2 -top-2">
          <span className="rounded-full border border-amber-400/30 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 px-3 py-1 text-xs font-semibold text-amber-300">
            {discount}
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-white/60">{description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-white">{price}</span>
          {originalPrice && (
            <span className="text-2xl text-white/40 line-through">{originalPrice}</span>
          )}
          <span className="text-white/60">{period}</span>
        </div>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white/80">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onCtaClick}
        className={cn(
          'w-full rounded-md px-6 py-3 text-center font-semibold transition-all',
          isPopular
            ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]'
            : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
        )}
      >
        {cta}
      </button>
    </div>
  )
}

export default PricingCard
