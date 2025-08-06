import React from 'react'
import type { ReactNode } from 'react'
import SwrInitializer from '@/app/components/swr-initializer'
import { AppContextProvider } from '@/context/app-context'
import GA, { GaType } from '@/app/components/base/ga'
import HeaderWrapper from '@/app/components/header/header-wrapper'
import Header from '@/app/components/header'
import { EventEmitterContextProvider } from '@/context/event-emitter'
import { ProviderContextProvider } from '@/context/provider-context'
import { ModalContextProvider } from '@/context/modal-context'
import ClaudeSection from '@/app/components/layout/claude-section'
import cn from '@/utils/classnames'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GA gaType={GaType.admin} />
      <SwrInitializer>
        <AppContextProvider>
          <EventEmitterContextProvider>
            <ProviderContextProvider>
              <ModalContextProvider>
                {/* Full height flex container */}
                <div className="flex h-screen flex-col overflow-hidden">
                  {/* Header with Claude design system */}
                  <header
                    className={cn(
                      'flex-shrink-0',
                      'bg-white/95 backdrop-blur-md',
                      'border-b border-claude-border-subtle',
                      'shadow-claude-sm',
                      'animate-claude-fade-in',
                      'z-50',
                    )}
                  >
                    <HeaderWrapper>
                      <Header />
                    </HeaderWrapper>
                  </header>

                  {/* Main content area - flex-1 to take remaining space */}
                  <main
                    className={cn(
                      'flex-1 overflow-hidden',
                      'bg-gradient-to-b from-claude-bg-main to-claude-bg-ivory',
                    )}
                  >
                    {/* Page transition animation wrapper - must maintain full height */}
                    <div className="h-full animate-claude-slide-up">
                      {children}
                    </div>
                  </main>
                </div>
              </ModalContextProvider>
            </ProviderContextProvider>
          </EventEmitterContextProvider>
        </AppContextProvider>
      </SwrInitializer>
    </>
  )
}

export default Layout
