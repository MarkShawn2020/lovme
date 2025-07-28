'use client'

import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import NeuroraLogo from '@/app/components/base/logo/neurora-logo'
import Button from '@/app/components/base/button'
import FeatureCard from '@/app/components/base/feature-card'

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
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#2E2E2E] bg-black/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <NeuroraLogo size="large" className="mr-3" />
              <span className="text-xl font-semibold text-white">
                {t('landing.header.title')}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center gap-2 rounded-md border border-[#3B3B3B] bg-transparent px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:border-[#AFAFAF] hover:bg-[#1C1C1C]">
                {t('landing.header.signIn')}
              </button>
              <button className="inline-flex items-center gap-2 rounded-md border border-[#3ECF8E] bg-[#3ECF8E] px-6 py-3 text-base font-medium text-black shadow-[0_0_20px_-5px_#3ECF8E] transition-all duration-200 hover:shadow-[0_0_30px_-5px_#3ECF8E]" onClick={handleGetStarted}>
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
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 transform">
            <div className="h-96 w-96 rounded-full bg-[#3ECF8E]/10 blur-3xl"></div>
          </div>
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 transform">
            <div className="h-64 w-64 rounded-full bg-[#3ECF8E]/5 blur-2xl"></div>
          </div>
        </div>
        
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
          <div className="mx-auto max-w-7xl">
            {/* 严格按照 DESIGN.md 的 H1 规格 */}
            <h1 className="text-6xl font-bold leading-tight tracking-tighter text-white md:text-7xl lg:text-8xl">
              {t('landing.hero.title')}
              <span className="block bg-gradient-to-r from-[#3ECF8E] to-[#2AB973] bg-clip-text text-transparent">
                {t('landing.hero.subtitle')}
              </span>
            </h1>

            {/* 严格按照 DESIGN.md 的段落规格 */}
            <p className="mx-auto mt-8 max-w-3xl text-xl font-normal leading-relaxed text-[#AFAFAF]">
              {t('landing.hero.description')}
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="inline-flex items-center gap-2 rounded-md border border-[#3ECF8E] bg-[#3ECF8E] px-8 py-4 text-lg font-medium text-black shadow-[0_0_20px_-5px_#3ECF8E] transition-all duration-200 hover:shadow-[0_0_30px_-5px_#3ECF8E] hover:scale-105" onClick={handleGetStarted}>
                {t('landing.hero.getStartedFree')}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 rounded-md border border-[#3B3B3B] bg-transparent px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:border-[#AFAFAF] hover:bg-[#1C1C1C]" onClick={handleSignIn}>
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

        {/* Features Section */}
        <section className="relative px-4 py-32">
          <div className="mx-auto max-w-7xl">
            {/* 严格按照 DESIGN.md 的 H2 规格 */}
            <div className="text-center">
              <h2 className="text-4xl font-semibold leading-snug tracking-tighter text-white md:text-5xl">
                {t('landing.features.title')}
              </h2>
              <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-[#3ECF8E] to-[#2AB973] rounded-full"></div>
            </div>
            
            <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                }
                title={t('landing.features.workflow.title')}
                description={t('landing.features.workflow.description')}
              />
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title={t('landing.features.multiModel.title')}
                description={t('landing.features.multiModel.description')}
              />
              <FeatureCard
                icon={
                  <svg className="h-8 w-8 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                }
                title={t('landing.features.rag.title')}
                description={t('landing.features.rag.description')}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 py-32">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1C1C1C] to-black"></div>
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="h-96 w-96 rounded-full bg-[#3ECF8E]/5 blur-3xl"></div>
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
              <button className="inline-flex items-center gap-2 rounded-md border border-[#3ECF8E] bg-[#3ECF8E] px-8 py-4 text-lg font-medium text-black shadow-[0_0_20px_-5px_#3ECF8E] transition-all duration-200 hover:shadow-[0_0_30px_-5px_#3ECF8E] hover:scale-105" onClick={handleGetStarted}>
                {t('landing.cta.startBuilding')}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 rounded-md border border-[#3B3B3B] bg-transparent px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:border-[#AFAFAF] hover:bg-[#1C1C1C]" onClick={handleSignIn}>
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
