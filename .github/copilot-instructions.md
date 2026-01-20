# GitHub Copilot Instructions for dev-blog

This repository contains an Astro blog built on the Ryze template. Follow these guidelines to ensure smooth development and maintain code quality.

## Tech Stack

- **Astro v5** - Static site generator
- **React 19** - UI library for interactive components
- **TypeScript** - Typed JavaScript superset
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **pnpm** - Fast, disk space efficient package manager

## Development Workflow

### Starting Development

- **ALWAYS use `pnpm dev`** for local development with hot module replacement (HMR)
- **NEVER run `pnpm build`** during active development - it switches to production assets and breaks HMR
- Development server runs at `http://localhost:4321`
- Restart the dev server after installing dependencies

### Available Commands

| Command            | Usage                              |
| ------------------ | ---------------------------------- |
| `pnpm dev`         | Start local development server     |
| `pnpm build`       | Build production-ready static site |
| `pnpm preview`     | Preview production build locally   |
| `pnpm astro ...`   | Run Astro CLI commands             |
| `pnpm install`     | Install dependencies               |

## Project Structure

```
/
├── src/
│   ├── blog/          - Markdown blog posts
│   ├── components/    - Astro & React components
│   ├── layouts/       - Page layouts
│   ├── pages/         - Astro pages & routes
│   └── styles/        - Global CSS & typography
├── public/            - Static assets
└── .github/           - GitHub configuration
```

## Coding Conventions

### TypeScript

- **Prefer TypeScript** (`.tsx`/`.ts`) for new components and utilities
- Use proper typing - avoid `any` type
- Leverage TypeScript's type inference when practical

### Component Organization

- Co-locate component-specific styles with the component when practical
- Use Astro components (`.astro`) for static content
- Use React components (`.tsx`) for interactive features requiring state

### Styling

- Use Tailwind CSS utility classes for styling
- Follow existing patterns in the codebase
- Maintain responsive design for all devices

### File Naming

- Use PascalCase for component files (e.g., `PostCard.astro`, `ThemeToggle.tsx`)
- Use kebab-case for utility files and pages
- Use descriptive, clear names

## Content Management

- Blog posts are Markdown files in `src/blog/`
- Use frontmatter for post metadata (title, date, tags, featured, etc.)
- Follow existing post structure for consistency

## Dependencies

- **Use pnpm** for all package management operations
- Run `pnpm install` to install dependencies
- Update `pnpm-lock.yaml` when adding/updating dependencies
- Restart development server after dependency changes
- Verify compatibility with Astro v5 before adding new packages

## Code Quality

- Use ESLint for code linting
- Use Prettier for code formatting
- Maintain existing code style and patterns
- Write clean, maintainable code with clear intent

## Restrictions

- **DO NOT** run production builds during development
- **DO NOT** modify `node_modules/` or `dist/` directories
- **DO NOT** commit secrets, API keys, or sensitive data
- **DO NOT** break hot module replacement by using wrong commands
- **DO NOT** use `any` type in TypeScript without good reason

## Performance & SEO

- This is a static site optimized for performance
- Maintain SEO optimization (Open Graph, Twitter Cards, etc.)
- Keep bundle sizes small
- Optimize images and assets

## Testing Changes

1. Start dev server with `pnpm dev`
2. Make changes and verify HMR works
3. Test in browser at `http://localhost:4321`
4. For production validation, build with `pnpm build` and preview with `pnpm preview`

## Additional Context

- Built on the [Ryze template](https://github.com/8366888C/Ryze)
- Optimized for personal blogs and content-focused websites
- Uses Shiki for syntax highlighting in code blocks
- Supports light/dark mode with system preference detection
- Includes automatic sitemap and RSS feed generation

## Best Practices

- Keep the development server running while making changes
- Make small, incremental changes
- Test changes immediately in the browser
- Maintain consistency with existing code patterns
- Write semantic, accessible HTML
- Consider mobile-first responsive design
