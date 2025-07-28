# Indie Kit - Full Clone Analysis

## Style Mode

### Design System

```javascript
// tailwind.config.js 扩展
{
  colors: {
    primary: 'hsl(var(--primary))', // Dynamic, likely a shade of amber or yellow
    background: '#000000',
    text: '#F4F4F5',
    'text-light': 'hsla(240, 5%, 86%, 1)',
    border: 'hsla(0, 0%, 10%, 1)',
    'rating': '#FBBF24',
    'amber-300': '#FCD34D',
    'amber-400': '#FBBF24',
    'amber-500': '#F59E0B',
    'yellow-500': '#EAB308',
    'white-90': 'rgba(255, 255, 255, 0.9)',
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
  },
  spacing: {
    // Based on common Tailwind classes observed
    'base': '1rem', // 16px
    'px': '1px',
    '2': '0.5rem', // 8px
    '3': '0.75rem', // 12px
    '4': '1rem', // 16px
    '8': '2rem', // 32px
  },
  borderRadius: {
    DEFAULT: '1rem', // 16px on cards
    full: '9999px', // for pills and avatars
  },
  boxShadow: {
    DEFAULT: '0 1px 2px 0 rgb(0 0 0 / 0.07)',
    hover: '0 0 20px rgba(251,191,36,0.4)',
  }
}
```

### Core Components

- **Button: Primary CTA**
  - **Description**: Main call-to-action button.
  - **Style**: `bg-primary`, `text-primary-foreground`, `hover:bg-primary/90`, `rounded-md`, `px-8`, `font-semibold`
  - **States**: Hover state has a slightly faded background (`bg-primary/90`).

- **Button: Secondary/Link**
  - **Description**: Used for navigation and less prominent actions.
  - **Style**: `text-white/90`, `hover:text-white`
  - **States**: Text becomes fully white on hover.

- **Badge**
  - **Description**: Small informational pill.
  - **Style**: `rounded-full`, `border`, `px-2.5`, `py-0.5`, `text-xs`, `font-semibold`
  - **Example**: "80% OFF" badge has `bg-gradient-to-r from-amber-500/20 to-yellow-500/20`, `border-amber-400/30`, `text-amber-300`.

- **Testimonial Card**
  - **Description**: Displays user testimonials in a marquee.
  - **Style**: `bg-black`, `border`, `border-white/10`, `rounded-xl`, `p-6`, `flex`, `flex-col`
  - **States**: No specific hover states on the card itself, but part of a moving marquee.

### Layout Patterns

- **Header**: `glass-enabled` class suggests a semi-transparent, blurred background effect. It's a fixed header that overlays the content.
- **Main Content**: Sections are typically full-width with a `max-w-screen-xl` container inside for content, centered with `mx-auto`.
- **Responsive**: The layout adapts to smaller screens by stacking elements vertically and hiding/showing navigation items. The `md:flex` and similar responsive prefixes are used extensively.

---

## Full Mode

### Page Structure

```
Header
  - Logo: /assets/icons/indie-kit.svg
  - Navigation:
    - Pricing
    - Vibe Coding (with "New" badge)
    - Wall of Love
    - Blog
    - Login
    - Get Started (CTA Button)

Main Content
  Section 1: Hero
    - Component: Hero Section
    - Title: "AI powered NextJS 15 boilerplate"
    - Subtitle: "The ultimate starting point for indie hackers, solopreneurs, and developers who want to build and launch their SaaS applications faster."
    - CTA: "Get Started for Free"

  Section 2: Tech Stack
    - Title: "Built with the best technologies"
    - Content: A grid of logos representing the tech stack (Next.js, Supabase, Inngest, etc.)

  Section 3: Features
    - Title: "Everything you need to launch your SaaS"
    - Content: A grid of feature cards with icons and descriptions.
      - Authentication
      - Database
      - Background Jobs
      - SEO
      - Emails
      - Payments
      - AI
      - Components
      - Vercel
      - MDX Blog
      - Admin
      - Feedback

  Section 4: Testimonials
    - Title: "Join hundreds of happy developers"
    - Component: Marquee of testimonial cards.

  Section 5: Pricing
    - Title: "Start for free, then pay once"
    - Component: Pricing cards for different tiers.
      - Hobby: $0
      - Pro: $149 (Discounted from $299)

  Section 6: FAQ
    - Title: "Frequently Asked Questions"
    - Component: Accordion with questions and answers.

Footer
  - Logo and Slogan: "Build, Ship, and Grow."
  - Links:
    - Product: Features, Pricing, Wall of Love
    - Company: Blog, About
    - Legal: Privacy Policy, Terms of Service
  - Copyright: "© 2024 Indie Kit. All rights reserved."
```

### Content Inventory

- **Titles**:
  - "AI powered NextJS 15 boilerplate"
  - "Built with the best technologies"
  - "Everything you need to launch your SaaS"
  - "Join hundreds of happy developers"
  - "Start for free, then pay once"
  - "Frequently Asked Questions"

- **Paragraphs**:
  - Hero subtitle provides a concise summary of the product's value proposition.
  - Feature descriptions are short and to the point.
  - Testimonials offer social proof from other developers.

- **Button/CTA Texts**:
  - "Get Started for Free"
  - "Get Started"
  - "Login"
  - "Buy Now"

- **Image Resources**:
  - `/assets/icons/indie-kit.svg` (Logo)
  - `/assets/icons/indie-kit.png`
  - `/assets/people/1.jpg` (Testimonial avatar)
  - `/assets/screenshots/dailyblogpost-app.png`
  - Numerous logos for the tech stack (Supabase, Inngest, etc.)

### Interactive Elements

- **Navigation Links**: All links in the header and footer navigate to different sections of the page or external pages.
- **CTA Buttons**: "Get Started" and "Buy Now" buttons likely lead to a checkout or registration page.
- **Testimonial Marquee**: An auto-scrolling marquee of testimonial cards.
- **FAQ Accordion**: Questions can be clicked to reveal the answers.
