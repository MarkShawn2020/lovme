// Design System Configuration based on Claude Official Website Design Guide
// This configuration extends the existing theme with design guide specifications

const designSystem = {
  colors: {
    // Claude Design Guide Primary Colors
    'claude': {
      'primary': '#D97757', // Main accent color from design guide
      'primary-hover': '#C86647', // Darker shade for hover
      'primary-light': '#E8A88C', // Lighter shade
    },
    
    // Text colors from design guide
    'claude-text': {
      'main': '#181818', // Primary text
      'secondary': '#87867F', // Secondary/faded text
      'tertiary': '#A8A7A0', // Even lighter text
      'quaternary': '#C0BFB8', // Disabled/very light text
    },
    
    // Background colors from design guide
    'claude-bg': {
      'main': '#F9F9F7', // Main page background
      'dark': '#141413', // Dark theme sections
      'ivory': '#F0EEE6', // Ivory medium background
      'oat': '#F7F4EC', // Oat background
      'clay': '#CC785C', // Clay accent
      'faded': '#3D3D3A', // Dark faded background
      'card': '#FFFFFF', // Card background
      'card-hover': '#FCFCFB', // Card hover state
    },
    
    // Swatch colors from design guide
    'claude-swatch': {
      'slate-light': '#87867F',
      'cloud-light': '#E8E6DC',
      'fig': '#B49FD8',
      'olive': '#C2C07D',
      'cactus': '#629A90',
      'sky': '#97B5D5',
      'heather': '#D2BEDF',
    },
    
    // Border colors
    'claude-border': {
      'default': '#87867F',
      'subtle': '#E8E6DC',
      'strong': '#676661',
    },
  },
  
  fontFamily: {
    // Font families from design guide
    'claude-sans': ['Fira Code', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    'claude-serif': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
  },
  
  fontSize: {
    // Typography scale with clamp() for responsive sizing
    'claude-display-xl': 'clamp(2.5rem, 2.04rem + 1.95vw, 4rem)', // H1
    'claude-display-l': 'clamp(2rem, 1.69rem + 1.3vw, 3rem)', // H2 Large
    'claude-display-m': 'clamp(1.75rem, 1.67rem + 0.32vw, 2rem)', // H2 Medium
    'claude-display-s': 'clamp(1.25rem, 1.17rem + 0.32vw, 1.5rem)', // H3
    'claude-paragraph-l': 'clamp(1.375rem, 1.33rem + 0.16vw, 1.5rem)', // Large paragraph
    'claude-paragraph-m': 'clamp(1.125rem, 1.08rem + 0.16vw, 1.25rem)', // Medium paragraph
    'claude-detail': 'clamp(0.875rem, 0.85rem + 0.1vw, 1rem)', // Small details
  },
  
  spacing: {
    // Spacing system from design guide
    'claude-text': '1rem', // 1em text spacing
    'claude-gutter': '2rem', // Gutter spacing
    'claude-s': '1rem', // Small gap
    'claude-m': '1.5rem', // Medium gap
    'claude-l': '3rem', // Large gap
    'claude-xl': '4rem', // Extra large gap
    'claude-xxl': '6rem', // Double extra large gap
  },
  
  borderRadius: {
    // Border radius from design guide
    'claude-sm': '0.5rem', // 8px
    'claude-md': '0.75rem', // 12px
    'claude-lg': '1.5rem', // 24px
    'claude-xl': '2rem', // 32px
    'claude-full': '9999px',
  },
  
  boxShadow: {
    // Shadow system for depth
    'claude-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    'claude-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    'claude-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    'claude-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  
  animation: {
    // Smooth animations
    'claude-fade-in': 'claudeFadeIn 0.3s ease-in-out',
    'claude-slide-up': 'claudeSlideUp 0.4s ease-out',
    'claude-scale': 'claudeScale 0.2s ease-in-out',
  },
  
  keyframes: {
    claudeFadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    claudeSlideUp: {
      '0%': { transform: 'translateY(10px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    claudeScale: {
      '0%': { transform: 'scale(0.95)' },
      '100%': { transform: 'scale(1)' },
    },
  },
  
  transitionDuration: {
    'claude': '200ms',
  },
  
  transitionTimingFunction: {
    'claude': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
}

module.exports = designSystem