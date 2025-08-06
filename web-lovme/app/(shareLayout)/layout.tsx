import type { FC, PropsWithChildren } from 'react'
import WebAppStoreProvider from '@/context/web-app-context'
import Splash from './components/splash'
import ClaudeContainer from '@/app/components/layout/claude-container'
import cn from '@/utils/classnames'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={cn(
        'h-full min-w-[300px]',
        'pb-[env(safe-area-inset-bottom)]',
        'bg-gradient-to-br from-claude-bg-main via-claude-bg-ivory to-claude-bg-oat',
        'animate-claude-fade-in',
      )}
    >
      <WebAppStoreProvider>
        <Splash>
          {/* Content wrapper with Claude design system */}
          <ClaudeContainer
            size="md"
            padding="lg"
            className="min-h-screen flex flex-col"
          >
            {/* Share layout specific header */}
            <div className="mb-claude-gutter animate-claude-slide-up">
              <div className="text-center py-claude-m">
                <h1 className="text-claude-display-m font-claude-serif text-claude-text-main">
                  Neurora Share
                </h1>
                <p className="text-claude-paragraph-m text-claude-text-secondary mt-2">
                  Secure content sharing platform
                </p>
              </div>
            </div>

            {/* Main content with card style */}
            <div
              className={cn(
                'flex-1',
                'bg-white rounded-claude-lg',
                'shadow-claude-lg',
                'p-claude-gutter',
                'animate-claude-slide-up',
                'animation-delay-100',
              )}
            >
              {children}
            </div>

            {/* Share layout footer */}
            <div className="mt-claude-gutter text-center">
              <p className="text-claude-detail text-claude-text-tertiary">
                Protected by end-to-end encryption
              </p>
            </div>
          </ClaudeContainer>
        </Splash>
      </WebAppStoreProvider>
    </div>
  )
}

export default Layout
