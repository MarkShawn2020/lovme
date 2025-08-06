import RoutePrefixHandle from './routePrefixHandle'
import type { Viewport } from 'next'
import I18nServer from './components/i18n-server'
import BrowserInitializer from './components/browser-initializer'
import SentryInitializer from './components/sentry-initializer'
import { getLocaleOnServer } from '@/i18n/server'
import { TanstackQueryInitializer } from '@/context/query-client'
import { ThemeProvider } from 'next-themes'
import './styles/globals.css'
import './styles/markdown.scss'
import GlobalPublicStoreProvider from '@/context/global-public-context'
import { DatasetAttr } from '@/types/feature'
import cn from '@/utils/classnames'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  userScalable: false,
}

const LocaleLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = await getLocaleOnServer()

  const datasetMap: Record<DatasetAttr, string | undefined> = {
    [DatasetAttr.DATA_API_PREFIX]: process.env.NEXT_PUBLIC_API_PREFIX,
    [DatasetAttr.DATA_PUBLIC_API_PREFIX]: process.env.NEXT_PUBLIC_PUBLIC_API_PREFIX,
    [DatasetAttr.DATA_MARKETPLACE_API_PREFIX]: process.env.NEXT_PUBLIC_MARKETPLACE_API_PREFIX,
    [DatasetAttr.DATA_MARKETPLACE_URL_PREFIX]: process.env.NEXT_PUBLIC_MARKETPLACE_URL_PREFIX,
    [DatasetAttr.DATA_PUBLIC_EDITION]: process.env.NEXT_PUBLIC_EDITION,
    [DatasetAttr.DATA_PUBLIC_SUPPORT_MAIL_LOGIN]: process.env.NEXT_PUBLIC_SUPPORT_MAIL_LOGIN,
    [DatasetAttr.DATA_PUBLIC_SENTRY_DSN]: process.env.NEXT_PUBLIC_SENTRY_DSN,
    [DatasetAttr.DATA_PUBLIC_MAINTENANCE_NOTICE]: process.env.NEXT_PUBLIC_MAINTENANCE_NOTICE,
    [DatasetAttr.DATA_PUBLIC_SITE_ABOUT]: process.env.NEXT_PUBLIC_SITE_ABOUT,
    [DatasetAttr.DATA_PUBLIC_TEXT_GENERATION_TIMEOUT_MS]: process.env.NEXT_PUBLIC_TEXT_GENERATION_TIMEOUT_MS,
    [DatasetAttr.DATA_PUBLIC_MAX_TOOLS_NUM]: process.env.NEXT_PUBLIC_MAX_TOOLS_NUM,
    [DatasetAttr.DATA_PUBLIC_MAX_PARALLEL_LIMIT]: process.env.NEXT_PUBLIC_MAX_PARALLEL_LIMIT,
    [DatasetAttr.DATA_PUBLIC_TOP_K_MAX_VALUE]: process.env.NEXT_PUBLIC_TOP_K_MAX_VALUE,
    [DatasetAttr.DATA_PUBLIC_INDEXING_MAX_SEGMENTATION_TOKENS_LENGTH]: process.env.NEXT_PUBLIC_INDEXING_MAX_SEGMENTATION_TOKENS_LENGTH,
    [DatasetAttr.DATA_PUBLIC_LOOP_NODE_MAX_COUNT]: process.env.NEXT_PUBLIC_LOOP_NODE_MAX_COUNT,
    [DatasetAttr.DATA_PUBLIC_MAX_ITERATIONS_NUM]: process.env.NEXT_PUBLIC_MAX_ITERATIONS_NUM,
    [DatasetAttr.DATA_PUBLIC_MAX_TREE_DEPTH]: process.env.NEXT_PUBLIC_MAX_TREE_DEPTH,
    [DatasetAttr.DATA_PUBLIC_ALLOW_UNSAFE_DATA_SCHEME]: process.env.NEXT_PUBLIC_ALLOW_UNSAFE_DATA_SCHEME,
    [DatasetAttr.DATA_PUBLIC_ENABLE_WEBSITE_JINAREADER]: process.env.NEXT_PUBLIC_ENABLE_WEBSITE_JINAREADER,
    [DatasetAttr.DATA_PUBLIC_ENABLE_WEBSITE_FIRECRAWL]: process.env.NEXT_PUBLIC_ENABLE_WEBSITE_FIRECRAWL,
    [DatasetAttr.DATA_PUBLIC_ENABLE_WEBSITE_WATERCRAWL]: process.env.NEXT_PUBLIC_ENABLE_WEBSITE_WATERCRAWL,
  }

  return (
    <html
      lang={locale ?? 'en'}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#F9F9F7" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Neurora Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        {/* Preconnect to optimize font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={cn(
          // Base styles aligned with Claude design system
          'h-full select-auto',
          // Typography from design guide
          'font-claude-sans text-claude-text-main',
          // Background from design guide
          'bg-claude-bg-main',
          // Smooth transitions
          'transition-colors duration-claude ease-claude',
          // Color scheme
          'color-scheme',
        )}
        {...datasetMap}
      >
        {/* Layout wrapper with proper nesting */}
        <div className="relative min-h-screen flex flex-col">
          <BrowserInitializer>
            <SentryInitializer>
              <TanstackQueryInitializer>
                <ThemeProvider
                  attribute='data-theme'
                  defaultTheme='supabase-dark'
                  themes={['light', 'dark', 'supabase-dark', 'system']}
                  enableSystem
                  disableTransitionOnChange
                >
                  <I18nServer>
                    <GlobalPublicStoreProvider>
                      {/* Main content area */}
                      <main className="flex-1 w-full">
                        {children}
                      </main>
                    </GlobalPublicStoreProvider>
                  </I18nServer>
                </ThemeProvider>
              </TanstackQueryInitializer>
            </SentryInitializer>
          </BrowserInitializer>
        </div>
        <RoutePrefixHandle />
      </body>
    </html>
  )
}

export default LocaleLayout
