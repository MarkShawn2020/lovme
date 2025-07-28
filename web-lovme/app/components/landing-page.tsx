'use client'

import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import NeuroraLogo from '@/app/components/base/logo/neurora-logo'
import FeatureCard from '@/app/components/base/feature-card'
import TestimonialCard from '@/app/components/base/testimonial-card'
import PricingCard from '@/app/components/base/pricing-card'
import FAQAccordion from '@/app/components/base/faq-accordion'

const LandingPage = () => {
  const router = useRouter()
  const { t } = useTranslation()

  const handleGetStarted = () => {
    router.push('/signin')
  }

  const handleSignIn = () => {
    router.push('/signin')
  }

  return (
    <div className="bg-background-body">
      {/* Header with Glass Morphism */}
      <header className="glass-enabled sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <NeuroraLogo size="large" className="mr-3" />
              <span className="text-xl font-semibold text-white">
                {t('landing.header.title')}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 font-medium text-white/90 transition-colors duration-200 hover:text-white" onClick={handleSignIn}>
                {t('landing.header.signIn')}
              </button>
              <button className="rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-3 font-semibold text-black transition-all duration-200 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]" onClick={handleGetStarted}>
                {t('landing.header.getStarted')}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2">
            <div className="h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"></div>
          </div>
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2">
            <div className="h-64 w-64 rounded-full bg-yellow-500/5 blur-2xl"></div>
          </div>
        </div>

        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
          <div className="mx-auto max-w-7xl">
            {/* 严格按照 DESIGN.md 的 H1 规格 */}
            <h1 className="text-6xl font-bold leading-tight tracking-tighter text-white md:text-7xl lg:text-8xl">
              {t('landing.hero.title')}
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                {t('landing.hero.subtitle')}
              </span>
            </h1>

            {/* 严格按照 DESIGN.md 的段落规格 */}
            <p className="mx-auto mt-8 max-w-3xl text-xl font-normal leading-relaxed text-[#AFAFAF]">
              {t('landing.hero.description')}
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 text-lg font-semibold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]" onClick={handleGetStarted}>
                {t('landing.hero.getStartedFree')}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="px-8 py-4 text-lg font-medium text-white/90 transition-colors duration-200 hover:text-white" onClick={handleSignIn}>
                {t('landing.hero.signIn')}
              </button>
            </div>

            {/* 添加视觉指示器 */}
            <div className="mt-20 animate-bounce">
              <svg className="mx-auto h-6 w-6 text-[#AFAFAF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="relative px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-semibold leading-snug tracking-tighter text-white md:text-4xl">
                {t('landing.techStack.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#AFAFAF]">
                {t('landing.techStack.subtitle')}
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {/* Next.js */}
              <div className="flex items-center justify-center rounded-lg border border-white/10 bg-black/50 p-8 transition-all hover:border-amber-400/30 hover:bg-black/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-white/80">
                    <svg viewBox="0 0 180 180" fill="currentColor">
                      <path d="M0 0h180v180H0z" />
                      <path fill="#000" d="M47.1 114.5v.1l30.6-44.9v54.7a4.4 4.4 0 108.8 0V55.6a4.4 4.4 0 00-7.5-3.1L48.4 97.4V55.6a4.4 4.4 0 10-8.8 0v68.8a4.4 4.4 0 007.5 3.1v-13zm84.4-59a4.4 4.4 0 00-4.4 4.4v49.5L96.5 52.5a4.4 4.4 0 00-7.5 3.1v68.8a4.4 4.4 0 108.8 0V74.9l30.6 56.9a4.4 4.4 0 007.5-3.1V59.9a4.4 4.4 0 00-4.4-4.4z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-white/60">Next.js</p>
                </div>
              </div>

              {/* Supabase */}
              <div className="flex items-center justify-center rounded-lg border border-white/10 bg-black/50 p-8 transition-all hover:border-amber-400/30 hover:bg-black/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-[#3ECF8E]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455H9.28v7.51c.015.985 1.26 1.409 1.874.636l9.261-11.65c1.095-1.378.114-3.406-1.645-3.406H11.9V1.036z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-white/60">Supabase</p>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div className="flex items-center justify-center rounded-lg border border-white/10 bg-black/50 p-8 transition-all hover:border-amber-400/30 hover:bg-black/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-[#38BDF8]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.51 12 7 12z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-white/60">Tailwind</p>
                </div>
              </div>

              {/* TypeScript */}
              <div className="flex items-center justify-center rounded-lg border border-white/10 bg-black/50 p-8 transition-all hover:border-amber-400/30 hover:bg-black/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-[#3178C6]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8M13 11.25H8v1.5h1.5V20h1.75v-7.25H13v-1.5z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-white/60">TypeScript</p>
                </div>
              </div>

              {/* Prisma */}
              <div className="flex items-center justify-center rounded-lg border border-white/10 bg-black/50 p-8 transition-all hover:border-amber-400/30 hover:bg-black/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-white/80">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.807 7.165l-7.516-6.85A2.417 2.417 0 0011.18.682L2.365 15.803a2.149 2.149 0 00.411 3.251l5.197 3.135a2.412 2.412 0 002.845-.282l10.523-13.42a2.149 2.149 0 00.466-1.322zm-3.021 1.019L9.583 20.977l-3.8-2.291L13.744 5.51l5.042 1.674zm-8.159-5.37l-7.61 12.95 7.61-12.95z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-white/60">Prisma</p>
                </div>
              </div>

              {/* Stripe */}
              <div className="flex items-center justify-center rounded-lg border border-white/10 bg-black/50 p-8 transition-all hover:border-amber-400/30 hover:bg-black/70">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 text-[#635BFF]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-medium text-white/60">Stripe</p>
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
              <h2 className="text-4xl font-semibold leading-snug tracking-tighter text-white md:text-5xl">
                {t('landing.features.title')}
              </h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500"></div>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* Authentication */}
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                }
                title={t('landing.features.authentication.title')}
                description={t('landing.features.authentication.description')}
              />

              {/* Database */}
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                }
                title={t('landing.features.database.title')}
                description={t('landing.features.database.description')}
              />

              {/* Background Jobs */}
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title={t('landing.features.backgroundJobs.title')}
                description={t('landing.features.backgroundJobs.description')}
              />

              {/* SEO */}
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
                title={t('landing.features.seo.title')}
                description={t('landing.features.seo.description')}
              />

              {/* Emails */}
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title={t('landing.features.emails.title')}
                description={t('landing.features.emails.description')}
              />

              {/* Payments */}
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                }
                title={t('landing.features.payments.title')}
                description={t('landing.features.payments.description')}
              />

              {/* AI */}
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title={t('landing.features.ai.title')}
                description={t('landing.features.ai.description')}
              />

              {/* Components */}
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                }
                title={t('landing.features.components.title')}
                description={t('landing.features.components.description')}
              />

              {/* Vercel */}
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title={t('landing.features.vercel.title')}
                description={t('landing.features.vercel.description')}
              />

              {/* MDX Blog */}
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                }
                title={t('landing.features.mdxBlog.title')}
                description={t('landing.features.mdxBlog.description')}
              />

              {/* Admin */}
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="h-8 w-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <h2 className="text-4xl font-semibold leading-snug tracking-tighter text-white md:text-5xl">
                {t('landing.testimonials.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#AFAFAF]">
                {t('landing.testimonials.subtitle')}
              </p>
            </div>
          </div>

          {/* Marquee Container */}
          <div className="relative mt-16">
            <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

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
              <h2 className="text-4xl font-semibold leading-snug tracking-tighter text-white md:text-5xl">
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
              <h2 className="text-4xl font-semibold leading-snug tracking-tighter text-white md:text-5xl">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1C1C1C] to-black"></div>
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-96 w-96 rounded-full bg-amber-400/5 blur-3xl"></div>
            </div>
          </div>

          <div className="relative mx-auto max-w-5xl text-center">
            {/* 严格按照 DESIGN.md 的 H2 规格 */}
            <h2 className="text-4xl font-semibold leading-snug tracking-tighter text-white md:text-5xl lg:text-6xl">
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
              <button className="px-8 py-4 text-lg font-medium text-white/90 transition-colors duration-200 hover:text-white" onClick={handleSignIn}>
                {t('landing.cta.signIn')}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2E2E2E] bg-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
            <div className="flex items-center">
              <NeuroraLogo size="medium" style="monochromeWhite" className="mr-3" />
              <span className="text-lg font-semibold text-white">{t('landing.header.title')}</span>
            </div>
            <div className="text-sm font-medium text-[#888888]">
              {t('landing.footer.copyright', { year: new Date().getFullYear() })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
