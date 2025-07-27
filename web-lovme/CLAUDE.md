# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development**: `pnpm dev` - Start development server with Node.js inspector on port 3000
- **Build**: `pnpm build` - Build production application
- **Production**: `pnpm start` - Start production server (requires build first)
- **Testing**: `pnpm test` - Run Jest tests, `pnpm test:watch` - Run tests in watch mode
- **Linting**: 
  - `pnpm lint` - Run oxlint and eslint with caching
  - `pnpm lint-only-show-error` - Show only errors (quiet mode)
  - `pnpm fix` - Fix linting issues with Next.js linter
  - `pnpm eslint-fix` - Fix ESLint issues with caching
- **Type Checking**: No explicit typecheck command - TypeScript errors are ignored during builds
- **Storybook**: `pnpm storybook` - Start Storybook on port 6006
- **Utilities**:
  - `pnpm gen-icons` - Generate icon components
  - `pnpm check-i18n` - Check internationalization
  - `pnpm analyze` - Analyze bundle size with ANALYZE=true

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15+ with App Router (`app/` directory structure)
- **React**: v19+ with TypeScript
- **State Management**: Zustand, SWR for data fetching, React Query (TanStack)
- **Styling**: Tailwind CSS with custom themes, SCSS for some components
- **Testing**: Jest with React Testing Library
- **Package Manager**: pnpm (enforced via preinstall script)

### Key Directory Structure
- `app/` - Next.js App Router pages and layouts
  - `(commonLayout)/` - Shared layout for main app sections (apps, datasets, tools, plugins)
  - `(shareLayout)/` - Public sharing layouts for chat, workflow, etc.
  - `components/` - Reusable UI components organized by feature
- `service/` - API service layer with HTTP client utilities
- `context/` - React contexts for global state (app context, workspace, etc.)
- `hooks/` - Custom React hooks
- `utils/` - Utility functions and helpers
- `i18n/` - Internationalization with support for 20+ languages
- `types/` - TypeScript type definitions
- `themes/` - CSS theme files for light/dark modes

### API Architecture
- Base API client in `service/base.ts` with automatic token refresh
- Separate public API endpoints for shared/embedded content
- Marketplace API for plugin/tool management
- Streaming support for real-time chat and workflow execution
- Multi-tenant workspace support

### Component Architecture
- Component library in `app/components/base/` (buttons, inputs, modals, etc.)
- Feature-specific components organized by domain (app/, workflow/, datasets/)
- Extensive use of React context for cross-component state
- Custom hook patterns for business logic separation

### Internationalization
- 20+ supported languages in `i18n/` directory
- Server-side and client-side i18n support
- Automated translation scripts: `pnpm auto-gen-i18n`

### Configuration
- Environment-based configuration with `.env.local`
- TypeScript path aliases: `@/*` maps to project root
- ESLint with Antfu config, Tailwind, SonarJS, and oxlint
- Custom Next.js config with MDX support and bundle analysis

## Development Guidelines

### Code Quality
- **Linting**: Always run `pnpm lint` and fix issues before committing
- **Testing**: Write unit tests using Jest and React Testing Library
- **TypeScript**: Strict mode enabled, but build errors are ignored for development speed

### Styling
- Use Tailwind CSS utility classes with custom CSS variables for theming
- Component-specific styles in `.module.css` files when needed
- Support for both light and dark themes

### API Integration
- Use SWR for data fetching with automatic caching and revalidation
- Implement error handling with automatic token refresh
- Follow RESTful conventions with proper HTTP methods

### State Management
- Zustand for complex client-side state
- React Context for component tree state sharing
- SWR/React Query for server state management

## Important Notes

- **Node.js Version**: Requires Node.js >= v22.11.0
- **Package Manager**: Must use pnpm (enforced by preinstall script)
- **Environment**: Development requires `.env.local` configuration
- **Build Output**: Configured for standalone deployment
- **Performance**: Large codebase with 40k+ files - use specific paths when exploring

## Development Hints

- When working locally in dev mode, do not build the application
- Use `pnpm eslint-fix-only-show-error` to ensure no compilation errors