'use client'

import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import NeuroraLogo from '@/app/components/base/logo/neurora-logo'
import Button from '@/app/components/base/button'

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="relative z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <NeuroraLogo size="large" className="mr-3" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('landing.header.title')}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={handleSignIn}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
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
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
              {t('landing.hero.title')}
              <span className="block text-blue-600 dark:text-blue-400">
                {t('landing.hero.subtitle')}
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              {t('landing.hero.description')}
            </p>

            <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="large"
                onClick={handleGetStarted}
                className="px-8 py-3 text-lg"
              >
                {t('landing.hero.getStartedFree')}
              </Button>
              <Button
                variant="secondary"
                size="large"
                onClick={handleSignIn}
                className="px-8 py-3 text-lg"
              >
                {t('landing.hero.signIn')}
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                {t('landing.features.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t('landing.features.subtitle')}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {t('landing.features.workflow.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('landing.features.workflow.description')}
                </p>
              </div>

              <div className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {t('landing.features.multiModel.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('landing.features.multiModel.description')}
                </p>
              </div>

              <div className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {t('landing.features.rag.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('landing.features.rag.description')}
                </p>
              </div>

              <div className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                  <svg className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {t('landing.features.security.title')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('landing.features.security.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-16 dark:bg-blue-700">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-white">
              {t('landing.cta.title')}
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              {t('landing.cta.subtitle')}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                variant="secondary"
                size="large"
                onClick={handleGetStarted}
                className="bg-white px-8 py-3 text-lg text-blue-600 hover:bg-gray-50"
              >
                {t('landing.cta.startBuilding')}
              </Button>
              <Button
                variant="ghost"
                size="large"
                onClick={handleSignIn}
                className="border-white px-8 py-3 text-lg text-white hover:bg-blue-700"
              >
                {t('landing.cta.signIn')}
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center md:mb-0">
              <NeuroraLogo size="medium" style="monochromeWhite" className="mr-3" />
              <span className="font-semibold text-white">{t('landing.header.title')}</span>
            </div>
            <div className="text-sm text-gray-400">
              {t('landing.footer.copyright', { year: new Date().getFullYear() })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
