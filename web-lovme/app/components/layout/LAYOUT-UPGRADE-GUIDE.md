# Layout System Upgrade Guide - Claude Design System

## 🎨 Overview

This guide documents the comprehensive layout system upgrade aligned with Claude's official design guide. All layouts now follow the "全宽分区 + 居中容器" (full-width sections + centered containers) pattern.

## 📁 Layout Components Structure

```
app/components/layout/
├── claude-container.tsx    # Container with max-width constraints
├── claude-section.tsx       # Full-width section wrapper
├── claude-grid.tsx         # Responsive grid system
├── claude-nav.tsx          # Navigation component
├── claude-footer.tsx       # Footer component
└── LAYOUT-UPGRADE-GUIDE.md # This file
```

## 🔧 Core Layout Components

### 1. **ClaudeContainer**
Primary container component implementing the design guide's centered layout pattern.

```tsx
<ClaudeContainer 
  size="lg"           // sm | md | lg | xl | full
  padding="md"        // none | sm | md | lg | xl
  background="main"   // main | ivory | dark | gradient
  fullBleed           // Extends background edge-to-edge
>
  {content}
</ClaudeContainer>
```

**Size Mappings:**
- `sm`: max-w-3xl (~768px)
- `md`: max-w-5xl (~1024px)
- `lg`: max-w-7xl (~1280px) - Primary container
- `xl`: max-w-[1440px]
- `full`: max-w-full

### 2. **ClaudeSection**
Full-width section component with theme variations.

```tsx
<ClaudeSection
  theme="light"       // light | dark | ivory | gradient
  containerSize="lg"  // Container size preset
  padding="lg"        // Padding preset
  withBorder          // Add top/bottom borders
  withShadow          // Add shadow
  animate             // Enable entrance animation
>
  {content}
</ClaudeSection>
```

### 3. **ClaudeGrid**
Responsive grid system based on the design guide's `u-grid-desktop` pattern.

```tsx
<ClaudeGrid
  cols={{ mobile: 1, tablet: 2, desktop: 12 }}
  gap="md"
  stackOnMobile
>
  <ClaudeGridItem span={{ desktop: 6 }}>
    {leftContent}
  </ClaudeGridItem>
  <ClaudeGridItem span={{ desktop: 6 }}>
    {rightContent}
  </ClaudeGridItem>
</ClaudeGrid>
```

## 🏗️ Layout Implementations

### Root Layout (`app/layout.tsx`)
- **Typography**: `font-claude-sans` as default
- **Background**: `bg-claude-bg-main` (#F9F9F7)
- **Text Color**: `text-claude-text-main` (#181818)
- **Smooth Transitions**: Global transition settings

### Common Layout (`app/(commonLayout)/layout.tsx`)
- **Sticky Header**: Backdrop blur with subtle shadow
- **Content Gradient**: Main to ivory background gradient
- **Footer**: Dark theme with proper spacing
- **Animations**: Fade-in and slide-up effects

### Share Layout (`app/(shareLayout)/layout.tsx`)
- **Background**: Gradient from main via ivory to oat
- **Card Style**: White content cards with shadows
- **Centered Content**: Medium container (max-w-5xl)
- **Security Notice**: End-to-end encryption message

### Dataset Detail Layout
- **Breadcrumb Navigation**: Ivory section with border
- **Sidebar/Main Split**: 3/9 column layout
- **Sticky Sidebar**: Information panel
- **Card Containers**: Bordered with shadows

## 🎨 Design Tokens Applied

### Colors
```css
--claude-primary: #D97757
--claude-text-main: #181818
--claude-text-secondary: #87867F
--claude-bg-main: #F9F9F7
--claude-bg-dark: #141413
--claude-bg-ivory: #F0EEE6
```

### Spacing
```css
--claude-gutter: 2rem
--claude-m: 1.5rem
--claude-l: 3rem
--claude-xl: 4rem
```

### Border Radius
```css
--claude-md: 0.75rem (12px)
--claude-lg: 1.5rem (24px)
```

### Shadows
```css
--claude-sm: 0 1px 2px rgba(0,0,0,0.05)
--claude-md: 0 4px 6px rgba(0,0,0,0.1)
--claude-lg: 0 10px 15px rgba(0,0,0,0.1)
```

## 📱 Responsive Behavior

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px
- **Wide**: > 1280px

### Mobile Adaptations
- Single column layouts
- Collapsed navigation
- Reduced padding
- Full-width containers

## ⚡ Performance Optimizations

1. **CSS-Only Animations**: Using transform and opacity
2. **Backdrop Blur**: Limited to header for performance
3. **Sticky Elements**: Using CSS sticky positioning
4. **Font Loading**: Preconnect to font servers

## 🔄 Migration Guide

### Before (Old Layout)
```tsx
<div className="bg-background-body">
  <div className="max-w-screen-xl mx-auto px-4">
    {content}
  </div>
</div>
```

### After (Claude Design System)
```tsx
<ClaudeSection theme="light">
  <ClaudeContainer size="lg" padding="md">
    {content}
  </ClaudeContainer>
</ClaudeSection>
```

## 📊 Layout Patterns

### Pattern 1: Hero Section
```tsx
<ClaudeSection theme="gradient" fullHeight>
  <ClaudeContainer size="lg">
    <ClaudeGrid cols={{ mobile: 1, desktop: 2 }}>
      {/* Hero content */}
    </ClaudeGrid>
  </ClaudeContainer>
</ClaudeSection>
```

### Pattern 2: Feature Cards
```tsx
<ClaudeSection theme="ivory">
  <ClaudeContainer size="xl">
    <ClaudeGrid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="lg">
      {features.map(feature => (
        <Card key={feature.id} {...feature} />
      ))}
    </ClaudeGrid>
  </ClaudeContainer>
</ClaudeSection>
```

### Pattern 3: Content with Sidebar
```tsx
<ClaudeContainer size="lg">
  <ClaudeGrid cols={12} gap="lg">
    <ClaudeGridItem span={{ mobile: 12, desktop: 3 }}>
      <Sidebar />
    </ClaudeGridItem>
    <ClaudeGridItem span={{ mobile: 12, desktop: 9 }}>
      <MainContent />
    </ClaudeGridItem>
  </ClaudeGrid>
</ClaudeContainer>
```

## ✅ Checklist for Layout Implementation

- [ ] Container max-width follows design guide (7xl = 1280px)
- [ ] Spacing uses Claude tokens (gutter, m, l, xl)
- [ ] Colors match hex values from design guide
- [ ] Animations use fade-in and slide-up
- [ ] Responsive breakpoints are properly set
- [ ] Sticky elements use proper z-index
- [ ] Shadows follow the 4-tier system
- [ ] Typography uses serif for headings where appropriate
- [ ] Gradients transition smoothly
- [ ] Dark sections have proper text contrast

## 🚀 Next Steps

1. **Component Library**: Build out more specific components
2. **Dark Mode**: Extend theme system for dark mode support
3. **Animation Library**: Create reusable animation utilities
4. **A11y Improvements**: Add ARIA landmarks and focus management
5. **Performance Monitoring**: Track Core Web Vitals

## 📚 References

- Design Guide: `/design/design-guide.md`
- Tailwind Config: `/tailwind-design-system.js`
- Component Examples: `/app/components/layout/`

---

*Last Updated: 2024*
*Version: 1.0.0*