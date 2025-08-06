import tailwindThemeVarDefine from './themes/tailwind-theme-var-define'
const designSystem = require('./tailwind-design-system')

const config = {
  theme: {
    typography: require('./typography'),
    extend: {
      colors: {
        // Claude Design System colors
        ...designSystem.colors,
        
        // DESIGN.md inspired colors (new additions)
        'dark-surface': '#1C1C1C',
        'dark-accent': '#3B3B3B',
        'text-primary': '#FFFFFF',
        'text-secondary': '#AFAFAF',
        'text-tertiary': '#888888',
        'bg-dark': '#000000',
        'border-subtle': '#3B3B3B',
        'border-muted': '#2E2E2E',

        // Primary color system using CSS variables for theme support
        'primary': {
          25: 'var(--color-primary-25)',
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        'gray': {
          25: '#fcfcfd',
          50: '#f9fafb',
          100: '#f2f4f7',
          200: '#eaecf0',
          300: '#d0d5dd',
          400: '#98a2b3',
          500: '#667085',
          700: '#475467',
          600: '#344054',
          800: '#1d2939',
          900: '#101828',
        },
        'blue': {
          500: '#E1EFFE',
        },
        'green': {
          50: '#F3FAF7',
          100: '#DEF7EC',
          800: '#03543F',

        },
        'yellow': {
          100: '#FDF6B2',
          800: '#723B13',
        },
        'purple': {
          50: '#F6F5FF',
          200: '#DCD7FE',
        },
        'indigo': {
          25: '#F5F8FF',
          50: '#EEF4FF',
          100: '#E0EAFF',
          300: '#A4BCFD',
          400: '#8098F9',
          600: '#444CE7',
          800: '#2D31A6',
        },
        ...tailwindThemeVarDefine,
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        ...designSystem.fontFamily,
      },
      fontSize: {
        ...designSystem.fontSize,
      },
      spacing: {
        ...designSystem.spacing,
        'base': '1rem', // 16px
        'sm': '0.5rem', // 8px
        'xs': '0.25rem', // 4px
        'lg': '1.5rem', // 24px
        'xl': '2rem', // 32px
        '2xl': '2.5rem', // 40px
        '3xl': '3rem', // 48px
      },
      borderRadius: {
        sm: '0.25rem', // 4px
        md: '0.5rem', // 8px
        lg: '0.75rem', // 12px
        xl: '1rem', // 16px
        full: '9999px',
        ...designSystem.borderRadius,
      },
      boxShadow: {
        ...designSystem.boxShadow,
      },
      animation: {
        ...designSystem.animation,
      },
      keyframes: {
        ...designSystem.keyframes,
      },
      transitionDuration: {
        ...designSystem.transitionDuration,
      },
      transitionTimingFunction: {
        ...designSystem.transitionTimingFunction,
      },
      screens: {
        'mobile': '100px',
        // => @media (min-width: 100px) { ... }
        'tablet': '640px', // 391
        // => @media (min-width: 600px) { ... }
        'pc': '769px',
        // => @media (min-width: 769px) { ... }
        '2k': '2560px',
      },
      boxShadow: {
        // DESIGN.md inspired shadows
        'dark-border': '0 0 0 1px #333, 0 0 20px -5px #000',
        'dark-elevated': '0 0 0 1px #171717, 0 10px 30px -10px #000',
        'primary-glow': '0 0 20px -5px #3ECF8E',

        // Existing shadows (preserving for compatibility)
        'xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'sm-no-bottom': '0px -1px 2px 0px rgba(16, 24, 40, 0.06), 0px -1px 3px 0px rgba(16, 24, 40, 0.10)',
        'xl': '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
        '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
        '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
        'status-indicator-green-shadow': '0px 2px 6px 0px var(--color-components-badge-status-light-success-halo), 0px 0px 0px 1px var(--color-components-badge-status-light-border-outer)',
        'status-indicator-warning-shadow': '0px 2px 6px 0px var(--color-components-badge-status-light-warning-halo), 0px 0px 0px 1px var(--color-components-badge-status-light-border-outer)',
        'status-indicator-red-shadow': '0px 2px 6px 0px var(--color-components-badge-status-light-error-halo), 0px 0px 0px 1px var(--color-components-badge-status-light-border-outer)',
        'status-indicator-blue-shadow': '0px 2px 6px 0px var(--color-components-badge-status-light-normal-halo), 0px 0px 0px 1px var(--color-components-badge-status-light-border-outer)',
        'status-indicator-gray-shadow': '0px 1px 2px 0px var(--color-components-badge-status-light-disabled-halo), 0px 0px 0px 1px var(--color-components-badge-status-light-border-outer)',
      },
      opacity: {
        2: '0.02',
        8: '0.08',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      backgroundColor: {
        'background-gradient-bg-fill-chat-bubble-bg-3': 'var(--color-background-gradient-bg-fill-chat-bubble-bg-3)',
      },
      backgroundImage: {
        'chatbot-bg': 'var(--color-chatbot-bg)',
        'chat-bubble-bg': 'var(--color-chat-bubble-bg)',
        'chat-input-mask': 'var(--color-chat-input-mask)',
        'workflow-process-bg': 'var(--color-workflow-process-bg)',
        'workflow-run-failed-bg': 'var(--color-workflow-run-failed-bg)',
        'workflow-batch-failed-bg': 'var(--color-workflow-batch-failed-bg)',
        'mask-top2bottom-gray-50-to-transparent': 'var(--mask-top2bottom-gray-50-to-transparent)',
        'marketplace-divider-bg': 'var(--color-marketplace-divider-bg)',
        'marketplace-plugin-empty': 'var(--color-marketplace-plugin-empty)',
        'toast-success-bg': 'var(--color-toast-success-bg)',
        'toast-warning-bg': 'var(--color-toast-warning-bg)',
        'toast-error-bg': 'var(--color-toast-error-bg)',
        'toast-info-bg': 'var(--color-toast-info-bg)',
        'app-detail-bg': 'var(--color-app-detail-bg)',
        'app-detail-overlay-bg': 'var(--color-app-detail-overlay-bg)',
        'dataset-chunk-process-success-bg': 'var(--color-dataset-chunk-process-success-bg)',
        'dataset-chunk-process-error-bg': 'var(--color-dataset-chunk-process-error-bg)',
        'dataset-chunk-detail-card-hover-bg': 'var(--color-dataset-chunk-detail-card-hover-bg)',
        'dataset-child-chunk-expand-btn-bg': 'var(--color-dataset-child-chunk-expand-btn-bg)',
        'dataset-option-card-blue-gradient': 'var(--color-dataset-option-card-blue-gradient)',
        'dataset-option-card-purple-gradient': 'var(--color-dataset-option-card-purple-gradient)',
        'dataset-option-card-orange-gradient': 'var(--color-dataset-option-card-orange-gradient)',
        'dataset-chunk-list-mask-bg': 'var(--color-dataset-chunk-list-mask-bg)',
        'line-divider-bg': 'var(--color-line-divider-bg)',
        'dataset-warning-message-bg': 'var(--color-dataset-warning-message-bg)',
        'price-premium-badge-background': 'var(--color-premium-badge-background)',
        'premium-yearly-tip-text-background': 'var(--color-premium-yearly-tip-text-background)',
        'price-premium-text-background': 'var(--color-premium-text-background)',
        'price-enterprise-background': 'var(--color-price-enterprise-background)',
        'grid-mask-background': 'var(--color-grid-mask-background)',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'marquee-right': 'marquee-right 40s linear infinite',
        'marquee-left': 'marquee-left 40s linear infinite',
        'gradient': 'gradient 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'marquee-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'gradient': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // https://github.com/tailwindlabs/tailwindcss/discussions/5969
  corePlugins: {
    preflight: false,
  },
}

export default config
