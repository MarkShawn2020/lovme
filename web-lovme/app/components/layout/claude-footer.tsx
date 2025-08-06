'use client'

import React from 'react'
import Link from 'next/link'
import ClaudeContainer from './claude-container'
import ClaudeGrid, { ClaudeGridItem } from './claude-grid'
import NeuroraLogo from '@/app/components/base/logo/neurora-logo'
import cn from '@/utils/classnames'

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface ClaudeFooterProps {
  sections?: FooterSection[]
  showLogo?: boolean
  showSocial?: boolean
  className?: string
}

// Default footer sections
const defaultSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'API', href: '/api' },
      { label: 'Integrations', href: '/integrations' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Guides', href: '/guides' },
      { label: 'Blog', href: '/blog' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Press', href: '/press' },
    ],
  },
]

// Social media links component
const SocialLinks: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/neurora', icon: '📦' },
    { name: 'Twitter', href: 'https://twitter.com/neurora', icon: '🐦' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/neurora', icon: '💼' },
  ]

  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map(social => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'w-10 h-10 rounded-claude-full',
            'bg-white/10 hover:bg-white/20',
            'flex items-center justify-center',
            'transition-all duration-claude',
            'hover:scale-110',
          )}
          aria-label={social.name}
        >
          <span className="text-lg">{social.icon}</span>
        </a>
      ))}
    </div>
  )
}

/**
 * Claude Design System Footer Component
 * Implements the dark theme footer from design guide
 */
const ClaudeFooter: React.FC<ClaudeFooterProps> = ({
  sections = defaultSections,
  showLogo = true,
  showSocial = true,
  className,
}) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={cn(
        'w-full bg-claude-bg-dark text-white',
        'border-t border-claude-text-quaternary/20',
        className,
      )}
    >
      <ClaudeContainer size="lg" padding="xl">
        <ClaudeGrid
          cols={{ mobile: 1, tablet: 2, desktop: 6 }}
          gap="lg"
          className="pb-claude-gutter"
        >
          {/* Logo and description */}
          {showLogo && (
            <ClaudeGridItem span={{ mobile: 1, tablet: 2, desktop: 2 }}>
              <div className="space-y-claude-m">
                <NeuroraLogo style="monochromeWhite" size="large" />
                <p className="text-claude-paragraph-m text-gray-400">
                  Building the future of AI-powered knowledge management.
                </p>
                {showSocial && <SocialLinks />}
              </div>
            </ClaudeGridItem>
          )}

          {/* Footer sections */}
          {sections.map((section, index) => (
            <ClaudeGridItem key={index} span={1}>
              <div className="space-y-claude-s">
                <h3 className="font-claude-serif font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className={cn(
                          'text-gray-400 hover:text-white',
                          'transition-colors duration-claude',
                          'underline-offset-4 hover:underline',
                        )}
                        {...(link.external && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                      >
                        {link.label}
                        {link.external && (
                          <span className="ml-1 text-xs">↗</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ClaudeGridItem>
          ))}
        </ClaudeGrid>

        {/* Bottom bar */}
        <div
          className={cn(
            'pt-claude-gutter mt-claude-gutter',
            'border-t border-claude-text-quaternary/20',
            'flex flex-col md:flex-row justify-between items-center',
            'space-y-4 md:space-y-0',
          )}
        >
          <div className="text-sm text-gray-400">
            © {currentYear} Neurora. All rights reserved.
          </div>

          <div className="flex items-center space-x-claude-m text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </ClaudeContainer>
    </footer>
  )
}

export default ClaudeFooter
