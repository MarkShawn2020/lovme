'use client'

import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import cn from '@/utils/classnames'
import NeuroraLogo from '@/app/components/base/logo/neurora-logo'
import Avatar from '@/app/components/base/avatar'
import FeatureCard from '@/app/components/base/feature-card'
import TestimonialCard from '@/app/components/base/testimonial-card'
import PricingCard from '@/app/components/base/pricing-card'
import FAQAccordion from '@/app/components/base/faq-accordion'
import styles from './landing-page.module.css'

const LandingPage = () => {
  const router = useRouter()
  const { t } = useTranslation()

  const handleGetStarted = () => {
    router.push('/signin')
  }

  const handleSignIn = () => {
    router.push('/signin')
  }

  // Team member avatars
  const teamAvatars = [
    { name: 'Mark', avatar: '/avatars/mark.jpg' },
    { name: 'Rocky', avatar: '/avatars/rocky.jpg' },
    { name: 'Dongyang', avatar: '/avatars/dongyang.jpg' },
    { name: 'Laixinlu', avatar: '/avatars/laixinlu.jpg' },
    { name: 'Chenchunyu', avatar: '/avatars/chenchunyu.jpg' },
    { name: 'Stain', avatar: '/avatars/stain.jpg' },
  ]

  return (
    <div className="bg-background-body">
      {/* Header with Glass Morphism */}
      <header className={cn('header-container sticky top-0 z-50 border-b border-divider-regular bg-components-panel-bg/80', styles['glass-enabled'])}>
        {/* Header overlays for visual effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-yellow-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-components-panel-bg/5 to-transparent"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo section */}
            <div className="flex items-center">
              <NeuroraLogo size="large" className="mr-3" />
              <a className="flex items-center" href="/">
                <span className="text-xl font-bold text-text-primary">LovMe</span>
              </a>
              <a className="ml-3" href="#pricing">
                <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/30 px-3 py-1 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:border-amber-300/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 animate-pulse"></div>
                  <span className="relative text-xs font-bold text-amber-300">80% OFF</span>
                </div>
              </a>
            </div>

            {/* Navigation section */}
            <nav className="hidden md:flex items-center space-x-6">
              <a className="text-text-secondary hover:text-text-primary transition-colors font-medium flex items-center gap-2" href="/vibe-coding">
                {t('landing.header.vibeCoding')}
                <div className="inline-flex items-center rounded-full border border-amber-400/30 px-2.5 py-0.5 text-xs font-semibold bg-amber-400/10 text-amber-300">
                  New
                </div>
              </a>
              <a className="text-text-secondary hover:text-text-primary transition-colors font-medium" href="#features">
                {t('landing.header.features')}
              </a>
              <a className="text-text-secondary hover:text-text-primary transition-colors font-medium" href="#pricing">
                {t('landing.header.pricing')}
              </a>
              <a className="text-text-secondary hover:text-text-primary transition-colors font-medium" href="/docs" target="_blank">
                {t('landing.header.docs')}
              </a>
            </nav>

            {/* CTA section */}
            <div className="flex items-center space-x-4">
              <a className="hidden sm:flex items-center gap-1 text-text-secondary hover:text-text-primary transition-colors" href="https://x.com/lovme" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <button className="px-4 py-2 font-medium text-text-secondary hover:text-text-primary transition-colors" onClick={handleSignIn}>
                {t('landing.header.signIn')}
              </button>
              <button className="rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-2.5 font-semibold text-black transition-all duration-200 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:scale-105" onClick={handleGetStarted}>
                {t('landing.header.getStarted')}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          {/* Primary glow */}
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 animate-pulse">
            <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-amber-400/20 via-yellow-500/15 to-orange-400/20 blur-3xl"></div>
          </div>
          {/* Secondary glow */}
          <div className="absolute bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: '2000ms' }}>
            <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-yellow-500/10 to-amber-400/10 blur-3xl"></div>
          </div>
          {/* Accent dots */}
          <div className="absolute left-1/4 top-1/2 animate-float">
            <div className="h-2 w-2 rounded-full bg-amber-400/40"></div>
          </div>
          <div className="absolute right-1/3 top-1/3 animate-float" style={{ animationDelay: '1000ms' }}>
            <div className="h-3 w-3 rounded-full bg-yellow-500/30"></div>
          </div>
        </div>

        <section className="relative flex min-h-screen items-center px-4 py-20">
          <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16">
              <div className="flex flex-col justify-center lg:col-span-7">
                {/* Multi-line animated title with enhanced typography */}
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="inline-block text-text-primary">{t('landing.hero.titlePrefix')}</span>
                  <div className="relative inline-block">
                    <span className={cn('relative z-10 inline-block animate-gradient bg-[length:200%_100%] bg-clip-text text-transparent', styles['gradient-text'])}>
                      {t('landing.hero.titleHighlight')}
                    </span>
                    {/* Glow effect behind text */}
                    <div className="absolute inset-0 -z-10 animate-pulse blur-xl">
                      <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent opacity-50">
                        {t('landing.hero.titleHighlight')}
                      </span>
                    </div>
                  </div>
                  <div className="block">
                    <span className="relative inline-block font-mono text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
                      {t('landing.hero.titleSuffix')}
                    </span>
                  </div>
                </h1>

                {/* Enhanced animated gradient subtitle */}
                <p className="mt-6 text-xl text-[#AFAFAF] sm:text-2xl lg:mt-8 lg:text-2xl">
                  <span className="inline-block animate-gradient bg-gradient-to-r from-[#ff8c00] via-[#ff40ff] to-[#4080ff] bg-[length:400%_100%] bg-clip-text font-bold text-transparent">
                    {t('landing.hero.subtitleHighlight')}
                  </span>
                  <span className="mt-2 block text-lg text-[#BFBFBF] sm:text-xl">
                    {t('landing.hero.subtitleRest')}
                  </span>
                </p>

                {/* Enhanced DevHunt Badge with glow effect */}
                <div className={cn('mt-8 inline-flex w-fit items-center gap-3 rounded-xl border px-5 py-3 backdrop-blur-sm transition-all hover:scale-105', styles['product-badge'])}>
                  <div className="relative flex h-14 w-14 items-center justify-center">
                    <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-br from-amber-400 to-yellow-500 blur-sm"></div>
                    <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-yellow-500">
                      <span className="text-2xl font-black text-black">#1</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-text-primary">Product of the week</span>
                    <span className="text-sm font-medium text-amber-400">on DevHunt</span>
                  </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <button
                    className={cn('group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-10 py-4 text-base font-bold text-black transition-all hover:scale-105', styles['primary-cta'])}
                    onClick={handleGetStarted}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
                    <span className="relative z-10">{t('landing.hero.getStartedFree')}</span>
                    <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button
                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-divider-regular bg-components-panel-bg/20 px-10 py-4 text-base font-semibold text-text-primary backdrop-blur-sm transition-all hover:border-amber-400/50 hover:bg-components-panel-bg/30 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]"
                    onClick={() => router.push('/#features')}
                  >
                    {t('landing.hero.viewFeatures')}
                    <svg className="h-5 w-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>

                {/* Enhanced additional info */}
                <p className="mt-6 flex items-center gap-2 text-sm text-[#AFAFAF]">
                  {t('landing.hero.builtWith')}
                  <span className="relative inline-flex items-center">
                    <span className="absolute inset-0 animate-pulse rounded bg-white/10 blur-md"></span>
                    <span className={cn('relative animate-gradient bg-[length:200%_100%] bg-clip-text font-semibold text-transparent', styles['gradient-text'])}>
                      Claude Code
                    </span>
                  </span>
                </p>

                {/* Enhanced Social Proof */}
                <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
                  <div className="flex items-center gap-4">
                    {/* Enhanced Avatar Stack - More compact */}
                    <div className="relative flex -space-x-4">
                      {teamAvatars.slice(0, 5).map((member, index) => (
                        <div
                          key={member.name}
                          className="relative transition-all hover:z-10 hover:scale-110"
                          style={{ zIndex: teamAvatars.length - index }}
                        >
                          <Avatar
                            name={member.name}
                            avatar={member.avatar}
                            size={40}
                            className="border-2 border-components-panel-bg shadow-[0_0_20px_rgba(251,191,36,0.4)] ring-2 ring-amber-400/20"
                          />
                        </div>
                      ))}
                      <div className="relative z-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-400/40 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 text-xs font-bold text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.3)] backdrop-blur-sm">
                        +{t('landing.hero.userCount')}
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-text-primary">
                        {t('landing.hero.userCount')}+ {t('landing.hero.developers')}
                      </p>
                      <p className="text-sm font-medium text-[#AFAFAF]">{t('landing.hero.alreadyUsing')}</p>
                    </div>
                  </div>

                  {/* Enhanced Rating */}
                  <div className="flex items-center gap-3 rounded-full bg-white/5 px-6 py-2 backdrop-blur-sm">
                    <div className="flex gap-1">
                      {[...new Array(5)].map((_, i) => (
                        <svg key={i} className="h-6 w-6 text-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.5)]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-lg font-bold text-text-primary">4.9</span>
                  </div>
                </div>
              </div>

              {/* Right side - Enhanced Visual element */}
              <div className="relative mt-12 hidden lg:col-span-5 lg:mt-0 lg:block">
                <div className="relative flex h-full items-center justify-center">
                  {/* Multiple animated gradient orbs */}
                  <div className="absolute -right-20 top-20 h-64 w-64 animate-pulse rounded-full bg-gradient-to-r from-amber-400/10 to-yellow-500/10 blur-3xl"></div>
                  <div className="absolute -left-10 bottom-10 h-48 w-48 animate-pulse rounded-full bg-gradient-to-r from-yellow-500/15 to-orange-400/15 blur-2xl" style={{ animationDelay: '1000ms' }}></div>
                  <div className="absolute right-10 top-1/2 h-32 w-32 animate-pulse rounded-full bg-amber-400/20 blur-xl" style={{ animationDelay: '2000ms' }}></div>

                  {/* Enhanced Tech stack floating cards */}
                  <div className="relative grid grid-cols-3 gap-6 p-4">
                    {[
                      { name: 'Next.js', color: 'from-white to-gray-300', glow: 'rgba(255,255,255,0.3)' },
                      { name: 'TypeScript', color: 'from-blue-400 to-blue-600', glow: 'rgba(59,130,246,0.3)' },
                      { name: 'Tailwind', color: 'from-cyan-400 to-cyan-600', glow: 'rgba(34,211,238,0.3)' },
                      { name: 'Supabase', color: 'from-emerald-400 to-emerald-600', glow: 'rgba(52,211,153,0.3)' },
                      { name: 'Stripe', color: 'from-purple-400 to-purple-600', glow: 'rgba(168,85,247,0.3)' },
                      { name: 'OpenAI', color: 'from-green-400 to-green-600', glow: 'rgba(74,222,128,0.3)' },
                      { name: 'Vercel', color: 'from-gray-300 to-gray-500', glow: 'rgba(209,213,219,0.3)' },
                      { name: 'Prisma', color: 'from-indigo-400 to-indigo-600', glow: 'rgba(129,140,248,0.3)' },
                      { name: 'React', color: 'from-cyan-300 to-cyan-500', glow: 'rgba(103,232,249,0.3)' },
                    ].map((tech, i) => (
                      <div
                        key={tech.name}
                        className="group relative"
                        style={{
                          animationDelay: `${i * 150}ms`,
                        }}
                      >
                        {/* Glow effect */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                          style={{ background: tech.glow }}
                        ></div>

                        {/* Card */}
                        <div
                          className="relative flex h-28 w-28 animate-float cursor-pointer items-center justify-center rounded-2xl border border-divider-regular bg-gradient-to-br from-components-panel-bg/80 to-components-panel-bg/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-divider-deep hover:shadow-2xl"
                          style={{
                            animationDuration: `${4 + (i % 3) * 0.8}s`,
                          }}
                        >
                          {/* Inner gradient */}
                          <div className={cn('absolute inset-0 rounded-2xl bg-gradient-to-br opacity-10 transition-opacity group-hover:opacity-20', tech.color)}></div>

                          {/* Tech name */}
                          <span className={cn('relative z-10 bg-gradient-to-br bg-clip-text text-sm font-bold text-transparent', tech.color)}>
                            {tech.name}
                          </span>

                          {/* Corner accent */}
                          <div className={cn('absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gradient-to-br opacity-60', tech.color)}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...new Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute h-1 w-1 animate-float rounded-full bg-amber-400/40"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${10 + i * 12}%`,
                          animationDelay: `${i * 500}ms`,
                          animationDuration: `${5 + i}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="relative px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-semibold leading-snug tracking-tighter text-text-primary md:text-4xl">
                {t('landing.techStack.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#AFAFAF]">
                {t('landing.techStack.subtitle')}
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {/* Next.js */}
              <div className="flex items-center justify-center rounded-lg border border-divider-regular bg-components-panel-bg/50 p-8 transition-all hover:border-amber-400/30 hover:bg-components-panel-bg/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-text-secondary">
                    <svg viewBox="0 0 180 180" fill="currentColor">
                      <path d="M0 0h180v180H0z" />
                      <path fill="#000" d="M47.1 114.5v.1l30.6-44.9v54.7a4.4 4.4 0 108.8 0V55.6a4.4 4.4 0 00-7.5-3.1L48.4 97.4V55.6a4.4 4.4 0 10-8.8 0v68.8a4.4 4.4 0 007.5 3.1v-13zm84.4-59a4.4 4.4 0 00-4.4 4.4v49.5L96.5 52.5a4.4 4.4 0 00-7.5 3.1v68.8a4.4 4.4 0 108.8 0V74.9l30.6 56.9a4.4 4.4 0 007.5-3.1V59.9a4.4 4.4 0 00-4.4-4.4z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-white/60">Next.js</p>
                </div>
              </div>

              {/* Supabase */}
              <div className="flex items-center justify-center rounded-lg border border-divider-regular bg-components-panel-bg/50 p-8 transition-all hover:border-amber-400/30 hover:bg-components-panel-bg/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-[#3ECF8E]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455H9.28v7.51c.015.985 1.26 1.409 1.874.636l9.261-11.65c1.095-1.378.114-3.406-1.645-3.406H11.9V1.036z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-text-tertiary">Supabase</p>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div className="flex items-center justify-center rounded-lg border border-divider-regular bg-components-panel-bg/50 p-8 transition-all hover:border-amber-400/30 hover:bg-components-panel-bg/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-[#38BDF8]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.51 12 7 12z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-text-tertiary">Tailwind</p>
                </div>
              </div>

              {/* TypeScript */}
              <div className="flex items-center justify-center rounded-lg border border-divider-regular bg-components-panel-bg/50 p-8 transition-all hover:border-amber-400/30 hover:bg-components-panel-bg/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-[#3178C6]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-text-tertiary">TypeScript</p>
                </div>
              </div>

              {/* Prisma */}
              <div className="flex items-center justify-center rounded-lg border border-divider-regular bg-components-panel-bg/50 p-8 transition-all hover:border-amber-400/30 hover:bg-components-panel-bg/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-text-secondary">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.807 7.165l-7.516-6.85A2.417 2.417 0 0011.18.682L2.365 15.803a2.149 2.149 0 00.411 3.251l5.197 3.135a2.412 2.412 0 002.845-.282l10.523-13.42a2.149 2.149 0 00.466-1.322zm-3.021 1.019L9.583 20.977l-3.8-2.291L13.744 5.51l5.042 1.674zm-8.159-5.37l-7.61 12.95 7.61-12.95z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-text-tertiary">Prisma</p>
                </div>
              </div>

              {/* Stripe */}
              <div className="flex items-center justify-center rounded-lg border border-divider-regular bg-components-panel-bg/50 p-8 transition-all hover:border-amber-400/30 hover:bg-components-panel-bg/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-[#635BFF]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-text-tertiary">Stripe</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative px-4 py-32">
          <div className="mx-auto max-w-7xl">
            {/* 严格按照 DESIGN.md 的 H2 规格 */}
            <div className="text-center">
              <h2 className="text-4xl font-semibold leading-snug tracking-tighter text-text-primary md:text-5xl">
                {t('landing.features.title')}
              </h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500"></div>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* Authentication */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                }
                title={t('landing.features.authentication.title')}
                description={t('landing.features.authentication.description')}
              />

              {/* Database */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                }
                title={t('landing.features.database.title')}
                description={t('landing.features.database.description')}
              />

              {/* Background Jobs */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title={t('landing.features.backgroundJobs.title')}
                description={t('landing.features.backgroundJobs.description')}
              />

              {/* SEO */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
                title={t('landing.features.seo.title')}
                description={t('landing.features.seo.description')}
              />

              {/* Emails */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title={t('landing.features.emails.title')}
                description={t('landing.features.emails.description')}
              />

              {/* Payments */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                }
                title={t('landing.features.payments.title')}
                description={t('landing.features.payments.description')}
              />

              {/* AI */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title={t('landing.features.ai.title')}
                description={t('landing.features.ai.description')}
              />

              {/* Components */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                }
                title={t('landing.features.components.title')}
                description={t('landing.features.components.description')}
              />

              {/* Vercel */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title={t('landing.features.vercel.title')}
                description={t('landing.features.vercel.description')}
              />

              {/* MDX Blog */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                }
                title={t('landing.features.mdxBlog.title')}
                description={t('landing.features.mdxBlog.description')}
              />

              {/* Admin */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title={t('landing.features.admin.title')}
                description={t('landing.features.admin.description')}
              />

              {/* Feedback */}
              <FeatureCard
                icon={
                  <svg className={cn('h-8 w-8', styles['feature-icon'])} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                }
                title={t('landing.features.feedback.title')}
                description={t('landing.features.feedback.description')}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative overflow-hidden px-4 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-4xl font-semibold leading-snug tracking-tighter text-text-primary md:text-5xl">
                {t('landing.testimonials.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#AFAFAF]">
                {t('landing.testimonials.subtitle')}
              </p>
            </div>
          </div>

          {/* Marquee Container */}
          <div className="relative mt-16">
            <div className={cn('absolute left-0 top-0 z-10 h-full w-32', styles['marquee-mask-left'])} />
            <div className={cn('absolute right-0 top-0 z-10 h-full w-32', styles['marquee-mask-right'])} />

            {/* First Row - Moving Right */}
            <div className="mb-8 flex animate-marquee-right gap-6">
              <TestimonialCard
                content={t('landing.testimonials.items.1.content')}
                author={t('landing.testimonials.items.1.author')}
                role={t('landing.testimonials.items.1.role')}
                rating={5}
              />
              <TestimonialCard
                content={t('landing.testimonials.items.2.content')}
                author={t('landing.testimonials.items.2.author')}
                role={t('landing.testimonials.items.2.role')}
                rating={5}
              />
              <TestimonialCard
                content={t('landing.testimonials.items.3.content')}
                author={t('landing.testimonials.items.3.author')}
                role={t('landing.testimonials.items.3.role')}
                rating={5}
              />
              <TestimonialCard
                content={t('landing.testimonials.items.4.content')}
                author={t('landing.testimonials.items.4.author')}
                role={t('landing.testimonials.items.4.role')}
                rating={5}
              />
              {/* Duplicate for seamless loop */}
              <TestimonialCard
                content={t('landing.testimonials.items.1.content')}
                author={t('landing.testimonials.items.1.author')}
                role={t('landing.testimonials.items.1.role')}
                rating={5}
              />
              <TestimonialCard
                content={t('landing.testimonials.items.2.content')}
                author={t('landing.testimonials.items.2.author')}
                role={t('landing.testimonials.items.2.role')}
                rating={5}
              />
            </div>

            {/* Second Row - Moving Left */}
            <div className="flex animate-marquee-left gap-6">
              <TestimonialCard
                content={t('landing.testimonials.items.5.content')}
                author={t('landing.testimonials.items.5.author')}
                role={t('landing.testimonials.items.5.role')}
                rating={5}
              />
              <TestimonialCard
                content={t('landing.testimonials.items.6.content')}
                author={t('landing.testimonials.items.6.author')}
                role={t('landing.testimonials.items.6.role')}
                rating={5}
              />
              <TestimonialCard
                content={t('landing.testimonials.items.7.content')}
                author={t('landing.testimonials.items.7.author')}
                role={t('landing.testimonials.items.7.role')}
                rating={5}
              />
              <TestimonialCard
                content={t('landing.testimonials.items.8.content')}
                author={t('landing.testimonials.items.8.author')}
                role={t('landing.testimonials.items.8.role')}
                rating={5}
              />
              {/* Duplicate for seamless loop */}
              <TestimonialCard
                content={t('landing.testimonials.items.5.content')}
                author={t('landing.testimonials.items.5.author')}
                role={t('landing.testimonials.items.5.role')}
                rating={5}
              />
              <TestimonialCard
                content={t('landing.testimonials.items.6.content')}
                author={t('landing.testimonials.items.6.author')}
                role={t('landing.testimonials.items.6.role')}
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative px-4 py-32">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-4xl font-semibold leading-snug tracking-tighter text-text-primary md:text-5xl">
                {t('landing.pricing.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#AFAFAF]">
                {t('landing.pricing.subtitle')}
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              <PricingCard
                title={t('landing.pricing.hobby.title')}
                price={t('landing.pricing.hobby.price')}
                period={t('landing.pricing.hobby.period')}
                description={t('landing.pricing.hobby.description')}
                features={[
                  t('landing.pricing.hobby.features.1'),
                  t('landing.pricing.hobby.features.2'),
                  t('landing.pricing.hobby.features.3'),
                  t('landing.pricing.hobby.features.4'),
                ]}
                cta={t('landing.pricing.hobby.cta')}
                onCtaClick={handleGetStarted}
              />

              <PricingCard
                title={t('landing.pricing.pro.title')}
                price={t('landing.pricing.pro.price')}
                originalPrice={t('landing.pricing.pro.originalPrice')}
                period={t('landing.pricing.pro.period')}
                description={t('landing.pricing.pro.description')}
                features={[
                  t('landing.pricing.pro.features.1'),
                  t('landing.pricing.pro.features.2'),
                  t('landing.pricing.pro.features.3'),
                  t('landing.pricing.pro.features.4'),
                  t('landing.pricing.pro.features.5'),
                  t('landing.pricing.pro.features.6'),
                ]}
                cta={t('landing.pricing.pro.cta')}
                isPopular={true}
                discount="80% OFF"
                onCtaClick={handleGetStarted}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative px-4 py-32">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="text-4xl font-semibold leading-snug tracking-tighter text-text-primary md:text-5xl">
                {t('landing.faq.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#AFAFAF]">
                {t('landing.faq.subtitle')}
              </p>
            </div>

            <div className="mt-16">
              <FAQAccordion
                items={[
                  {
                    question: t('landing.faq.items.1.question'),
                    answer: t('landing.faq.items.1.answer'),
                  },
                  {
                    question: t('landing.faq.items.2.question'),
                    answer: t('landing.faq.items.2.answer'),
                  },
                  {
                    question: t('landing.faq.items.3.question'),
                    answer: t('landing.faq.items.3.answer'),
                  },
                  {
                    question: t('landing.faq.items.4.question'),
                    answer: t('landing.faq.items.4.answer'),
                  },
                  {
                    question: t('landing.faq.items.5.question'),
                    answer: t('landing.faq.items.5.answer'),
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 py-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-background-body via-background-section to-background-body"></div>
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-96 w-96 rounded-full bg-amber-400/5 blur-3xl"></div>
            </div>
          </div>

          <div className="relative mx-auto max-w-5xl text-center">
            {/* 严格按照 DESIGN.md 的 H2 规格 */}
            <h2 className="text-4xl font-semibold leading-snug tracking-tighter text-text-primary md:text-5xl lg:text-6xl">
              {t('landing.cta.title')}
            </h2>

            {/* 严格按照 DESIGN.md 的段落规格 */}
            <p className="mx-auto mt-8 max-w-3xl text-xl font-normal leading-relaxed text-[#AFAFAF]">
              {t('landing.cta.subtitle')}
            </p>

            <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row">
              <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 text-lg font-semibold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]" onClick={handleGetStarted}>
                {t('landing.cta.startBuilding')}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-8 py-4 text-lg font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary" onClick={handleSignIn}>
                {t('landing.cta.signIn')}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-divider-regular bg-background-default py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
            <div className="flex items-center">
              <NeuroraLogo size="medium" style="monochromeWhite" className="mr-3" />
              <span className="text-lg font-semibold text-text-primary">LovMe</span>
            </div>
            <div className="text-sm font-medium text-text-tertiary">
              {t('landing.footer.copyright', { year: new Date().getFullYear() })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
