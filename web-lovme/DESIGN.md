# Design and Implementation Guide: Supabase Homepage

This document reverse-engineers the design system, components, and layout from the Supabase homepage HTML. It provides a structured guide for recreating the visual style and structure in a Next.js and Tailwind CSS project.

## 1. Global Design Tokens (Global Design Tokens)

This configuration can be directly used in `tailwind.config.js` under the `theme.extend` object.

```json
// tailwind.config.js -> theme.extend
{
  "colors": {
    "primary": "#3ECF8E",
    "secondary": "#1C1C1C",
    "accent": "#3B3B3B",
    "text-main": "#FFFFFF",
    "text-light": "#AFAFAF",
    "text-dark": "#888888",
    "background-main": "#000000",
    "border-default": "#3B3B3B",
    "border-light": "#2E2E2E"
  },
  "fontFamily": {
    "sans": ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
  },
  "spacing": {
    "base": "1rem",      // 16px
    "sm": "0.5rem",      // 8px
    "xs": "0.25rem",     // 4px
    "lg": "1.5rem",      // 24px
    "xl": "2rem",        // 32px
    "2xl": "2.5rem",     // 40px
    "3xl": "3rem"        // 48px
  },
  "borderRadius": {
    "sm": "0.25rem",    // 4px
    "md": "0.5rem",      // 8px
    "lg": "0.75rem",     // 12px
    "xl": "1rem",        // 16px
    "full": "9999px"
  },
  "boxShadow": {
    "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "md": "0 0 0 1px #333, 0 0 20px -5px #000",
    "lg": "0 0 0 1px #171717, 0 10px 30px -10px #000",
    "primary-glow": "0 0 20px -5px #3ECF8E"
  }
}
```

## 2. Typography System

- **H1**: `font-size: 3.75rem (60px)`, `font-weight: 700`, `line-height: 1.1`, `letter-spacing: -0.025em`, `color: #FFFFFF`.
  - **Suggested Tailwind Class**: `text-6xl font-bold leading-tight tracking-tighter text-text-main`

- **H2**: `font-size: 2.25rem (36px)`, `font-weight: 600`, `line-height: 1.2`, `letter-spacing: -0.025em`, `color: #FFFFFF`.
  - **Suggested Tailwind Class**: `text-4xl font-semibold leading-snug tracking-tighter text-text-main`

- **H3**: `font-size: 1.5rem (24px)`, `font-weight: 600`, `line-height: 1.3`, `color: #FFFFFF`.
  - **Suggested Tailwind Class**: `text-2xl font-semibold leading-normal text-text-main`

- **Paragraph (p)**: `font-size: 1rem (16px)`, `font-weight: 400`, `line-height: 1.7`, `color: #AFAFAF`.
  - **Suggested Tailwind Class**: `text-base font-normal leading-relaxed text-text-light`

- **Link (a)**: `color: #FFFFFF`, `text-decoration: none`. On hover, `color: #3ECF8E`.
  - **Suggested Tailwind Class**: `text-text-main hover:text-primary transition-colors`

- **Small Text / Label**: `font-size: 0.875rem (14px)`, `font-weight: 500`, `color: #888888`.
  - **Suggested Tailwind Class**: `text-sm font-medium text-text-dark`

## 3. Core Component Analysis

### Component: Primary Button

- **Component Name**: `PrimaryButton`
- **Structure Description**: An `<a>` or `<button>` tag containing text and sometimes an optional right-arrow icon.
- **Style Details**:
  - **Layout & Size**: `display: inline-flex`, `align-items: center`, `gap: 8px`, `padding: 12px 24px`.
  - **Background & Border**: `background-color: #3ECF8E`, `border: 1px solid #3ECF8E`, `border-radius: 8px`.
  - **Typography**: `font-size: 1rem`, `font-weight: 500`, `color: #000000`.
- **States**:
  - `:hover`: `box-shadow: 0 0 20px -5px #3ECF8E` (primary-glow).
- **Suggested Tailwind Implementation**:
  ```html
  <button class="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-6 py-3 text-base font-medium text-black shadow-primary-glow transition-shadow hover:shadow-lg">
    Start your project
  </button>
  ```

### Component: Secondary Button

- **Component Name**: `SecondaryButton`
- **Structure Description**: An `<a>` or `<button>` tag, often with a transparent background and a visible border.
- **Style Details**:
  - **Layout & Size**: `display: inline-flex`, `align-items: center`, `gap: 8px`, `padding: 12px 24px`.
  - **Background & Border**: `background-color: transparent`, `border: 1px solid #3B3B3B`, `border-radius: 8px`.
  - **Typography**: `font-size: 1rem`, `font-weight: 500`, `color: #FFFFFF`.
- **States**:
  - `:hover`: `border-color: #AFAFAF`, `background-color: #1C1C1C`.
- **Suggested Tailwind Implementation**:
  ```html
  <button class="inline-flex items-center gap-2 rounded-md border border-border-default bg-transparent px-6 py-3 text-base font-medium text-text-main transition-colors hover:border-text-light hover:bg-secondary">
    Read the docs
  </button>
  ```

### Component: Feature Card

- **Component Name**: `FeatureCard`
- **Structure Description**: A root `div` containing an icon (`div`), a heading (`h3`), and a paragraph (`p`).
- **Style Details**:
  - **Layout & Size**: `display: flex`, `flex-direction: column`, `gap: 16px`, `padding: 24px`.
  - **Background & Border**: `background: linear-gradient(to bottom, #1C1C1C, #000000)`, `border: 1px solid #2E2E2E`, `border-radius: 12px`.
  - **Sub-elements**: The icon is a `div` with `width: 40px`, `height: 40px`, `border-radius: 8px`, and a specific background color/icon.
- **States**:
  - `:hover`: The border color changes to the primary color (`#3ECF8E`).
- **Suggested Tailwind Implementation**:
  ```html
  <div class="flex flex-col gap-4 rounded-lg border border-border-light bg-gradient-to-b from-secondary to-background-main p-6 transition-colors hover:border-primary">
    <div class="flex h-10 w-10 items-center justify-center rounded-md bg-accent">
      <!-- Icon SVG here -->
    </div>
    <h3 class="text-2xl font-semibold text-text-main">Instant APIs</h3>
    <p class="text-base text-text-light">Go from database to a full-fledged API in seconds.</p>
  </div>
  ```

### Component: Code Block

- **Component Name**: `CodeBlock`
- **Structure Description**: A `div` container with a header `div` (containing language tabs) and a `pre` tag for the code itself.
- **Style Details**:
  - **Layout & Size**: `display: flex`, `flex-direction: column`.
  - **Background & Border**: `background-color: #1C1C1C`, `border: 1px solid #3B3B3B`, `border-radius: 12px`.
  - **Header**: `display: flex`, `padding: 8px 16px`, `border-bottom: 1px solid #3B3B3B`. Active tab has a bottom border of the primary color.
  - **Code Area (`pre`)**: `padding: 16px`, `font-family: monospace`, `font-size: 0.875rem`, `overflow-x: auto`.
- **Suggested Tailwind Implementation**:
  ```html
  <div class="flex flex-col rounded-lg border border-border-default bg-secondary">
    <div class="flex gap-4 border-b border-border-default px-4 pt-2">
      <button class="border-b-2 border-primary pb-2 text-sm font-medium text-text-main">Bash</button>
      <button class="border-b-2 border-transparent pb-2 text-sm font-medium text-text-dark hover:text-text-light">JS</button>
    </div>
    <pre class="p-4 text-sm text-text-light overflow-x-auto"><code>// Your code here
npx supabase init</code></pre>
  </div>
  ```

## 4. Layout Structure

- **Major Layout Pattern**: The page uses a single-column, centered layout for its main content, with full-width sections for backgrounds and specific hero elements.

- **Containers and Breakpoints**: The primary content container has a `max-width` that appears to be around `1280px` (`max-w-7xl` in Tailwind). The content is centered within this container using `margin: 0 auto`.

- **Suggested Implementation**:
  - Use a main layout file (`app/layout.tsx`) to define the shared elements like the `<header>` and `<footer>`.
  - The page content (`app/page.tsx`) would then use `<main>` with sectioning elements (`<section>`).
  - Each section can alternate between full-bleed backgrounds and contained content.

  **`app/layout.tsx` Example:**
  ```tsx
  import Header from '@/components/Header'; // Assuming a Header component is created
  import Footer from '@/components/Footer'; // Assuming a Footer component is created

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className="bg-background-main text-text-light font-sans">
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    );
  }
  ```

  **`app/page.tsx` Section Example:**
  ```tsx
  export default function HomePage() {
    return (
      <>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-4 py-20 text-center">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-6xl font-bold leading-tight tracking-tighter text-text-main">The Postgres Development Platform</h1>
            <p className="mt-6 max-w-2xl text-lg text-text-light">Go from idea to production in minutes with a battle-hardened, open source stack that scales to any size.</p>
            {/* ... Buttons ... */}
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-semibold tracking-tighter text-text-main">What is Supabase?</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* ... FeatureCards go here ... */}
            </div>
          </div>
        </section>
      </>
    );
  }
  ```

---

## Summary

**Core Style**: The design is a sleek, modern "dark mode" aesthetic that is common in developer-focused tools. It uses a limited but high-contrast color palette, with a vibrant green as a primary accent. The design heavily emphasizes clean typography, generous spacing (following a consistent scale), and subtle but sharp details like single-pixel borders and soft glows.

**Key Implementation Points**: 
- **Consistency is Crucial**: Strictly adhere to the defined color palette and spacing units from the design tokens to maintain visual harmony.
- **Component-Based Approach**: Build out the core components (Buttons, Cards, Code Blocks) first. This will make assembling the final pages much faster and more maintainable.
- **Responsive First**: While this analysis focuses on the desktop view, implement all components and layouts with responsiveness in mind from the start, using Tailwind's breakpoint prefixes (`sm:`, `md:`, `lg:`).
