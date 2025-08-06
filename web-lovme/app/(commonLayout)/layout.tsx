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
                  {/* Header wrapper handles its own Claude design styling */}
                  <HeaderWrapper>
                    <Header />
                  </HeaderWrapper>

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
