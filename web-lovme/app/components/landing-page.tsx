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
    <div className="min-h-screen bg-bg-dark">
      {/* Header */}
      <header className="relative z-10 border-b border-border-subtle bg-bg-dark/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <NeuroraLogo size="large" className="mr-3" />
              <span className="text-xl font-semibold text-text-primary">
                {t('landing.header.title')}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="secondary"
                onClick={handleSignIn}
              >
                {t('landing.header.signIn')}
              </Button>
              <Button
                variant="primary"
                onClick={handleGetStarted}
              >
                {t('landing.header.getStarted')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        <section className="flex flex-col items-center justify-center px-4 py-20 text-center">
          <div className="mx-auto max-w-7xl">
            <h1 className="supabase-h1">
              {t('landing.hero.title')}
              <span className="block text-primary-500">
                {t('landing.hero.subtitle')}
              </span>
            </h1>

            <p className="supabase-p mx-auto mt-6 max-w-2xl text-lg">
              {t('landing.hero.description')}
            </p>

            <div className="mb-16 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                onClick={handleGetStarted}
              >
                {t('landing.hero.getStartedFree')}
              </Button>
              <Button
                variant="secondary"
                onClick={handleSignIn}
              >
                {t('landing.hero.signIn')}
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="supabase-h2 text-center">
              {t('landing.features.title')}
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={
                  <svg className="h-6 w-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                }
                title={t('landing.features.workflow.title')}
                description={t('landing.features.workflow.description')}
              />
              <FeatureCard
                icon={
                  <svg className="h-6 w-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title={t('landing.features.multiModel.title')}
                description={t('landing.features.multiModel.description')}
              />
              <FeatureCard
                icon={
                  <svg className="h-6 w-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <section className="bg-dark-surface px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="supabase-h2">
              {t('landing.cta.title')}
            </h2>
            <p className="supabase-p mt-6">
              {t('landing.cta.subtitle')}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                onClick={handleGetStarted}
              >
                {t('landing.cta.startBuilding')}
              </Button>
              <Button
                variant="secondary"
                onClick={handleSignIn}
              >
                {t('landing.cta.signIn')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle bg-bg-dark py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center md:mb-0">
              <NeuroraLogo size="medium" style="monochromeWhite" className="mr-3" />
              <span className="font-semibold text-text-primary">{t('landing.header.title')}</span>
            </div>
            <div className="supabase-small">
              {t('landing.footer.copyright', { year: new Date().getFullYear() })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
