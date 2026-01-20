# Ryze

**Ryze** is a modern, reader-friendly and content-first starter built with **Astro v5**, **Tailwind CSS v4**, and optimized for SEO and responsiveness across all devices. Perfect for personal blogs and content-focused websites.

This blog is deployed at [dev.geraint.io](https://dev.geraint.io/) using GitHub Pages.

## Features

- [x] Modern & minimalist design with responsive layout
- [x] Light & Dark mode with system preference detection
- [x] Static site generation for optimal performance
- [x] Automatic sitemap and RSS feed generation
- [x] SEO optimization (Open Graph, Twitter Cards, Canonical URLs)
- [x] Markdown-based blog posts with frontmatter metadata
- [x] Syntax highlighting with Shiki
- [x] Featured posts and tag-based organization
- [x] Archive and chronological browsing
- [x] Reading time estimation
- [x] TypeScript support
- [x] Component-based architecture with Astro & React
- [x] Tailwind CSS v4 for styling
- [x] Code quality tools (ESLint & Prettier)

## Lighhouse Performance Scores

<p align="center">
  <a href="https://pagespeed.web.dev/analysis/https-ryze-pages-dev/rg7pfbgh1l?form_factor=desktop">
    <img width="710" alt="Ryze Lighthouse score" src="https://github.com/8366888C/Ryze/blob/main/public/ryze-lighthouse-score.png">
  <a>
</p>

## Project Structure

```
Ryze
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── ... (static assets like fonts, icons)
│   ├── blog/
│   │   ├── post-title.md
│   │   ├── another-post.md
│   │   └── ... (add your posts here)
│   │
│   ├── components/
|   |   ├── CopyButton.astro
│   │   ├── FeatureCard.astro
│   │   ├── Featured.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Introduction.astro
│   │   ├── Navigation.astro
│   │   ├── Newsletterastro
│   │   ├── Pagination.astro
│   │   ├── PostCard.astro
│   │   ├── ProgressBar.tsx
│   │   ├── Seo.astro
│   │   ├── Socials.astro
│   │   ├── ThemeToggle.tsx
│   │   ├── Title.astro
│   │   └── Year.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── [...slug].astro
│   │   ├── 404.astro
│   │   ├── rss.xml.ts
│   │   ├── robots.txt.ts
│   │   ├── archive/
│   │   │   ├── [page].astro
│   │   │   └── [year]/[page].astro
│   │   └── tags/
│   │       ├── index.astro
│   │       └── [tag]/[page].astro
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── typography.css
│   │
│   └── content.config.ts
│
├── .gitignore
├── .prettierrc
├── astro.config.mjs
├── tsconfig.json
├── eslint.config.js
├── package.json
├── LICENSE
└── README.md
```

## Tech Stack

- [Astro v5](https://astro.build) - Static site generator
- [React](https://reactjs.org/) - UI library for interactive components
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript superset
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [Tabler Icons](https://tabler-icons.io/) - Icon library
- [Fontsource](https://fontsource.org/) - Self-hosted web fonts
- [GitHub Pages](https://pages.github.com/) - Deployment platform
- [Shiki](https://shiki.matsu.io/) - Syntax highlighting
- [RSS](https://www.npmjs.com/package/rss) - RSS feed generation
- [Sitemap](https://www.npmjs.com/package/sitemap) - Sitemap generation
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Code quality and formatting

## Installation

This blog is based on the [Ryze](https://github.com/8366888C/Ryze) Astro template.

```bash
# Clone the repository
git clone https://github.com/geraintguan/dev-blog.git
cd dev-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Commands

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start local development server     |
| `npm run build`     | Build production-ready static site |
| `npm run preview`   | Preview production build locally   |
| `npm run astro ...` | Run Astro CLI commands             |

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. Triggers on every push to the `main` branch
2. Can also be manually triggered from the Actions tab
3. Builds the static site using `npm run build`
4. Deploys the `dist` folder to GitHub Pages
5. Serves the site at the custom domain `dev.geraint.io`

The workflow configuration can be found in `.github/workflows/deploy.yml`.

### Setting up GitHub Pages

To enable GitHub Pages for this repository:

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select "GitHub Actions"
3. The site will be deployed automatically on the next push to `main`

For the custom domain `dev.geraint.io`:
1. Add a `CNAME` file in the `public/` directory (already done)
2. Configure your DNS provider to point `dev.geraint.io` to GitHub Pages:
   - Add a `CNAME` record pointing to `<username>.github.io`
   - Or add `A` records pointing to GitHub Pages IP addresses
3. In repository Settings → Pages → Custom domain, enter `dev.geraint.io`
4. Enable "Enforce HTTPS" once DNS propagation is complete

## License

This project is open source. See [LICENSE](LICENSE) for more information.
