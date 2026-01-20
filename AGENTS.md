# AGENTS Guidelines for This Repository

This repository contains a Astro blog located in the root of this repository. When working on the project interactively with an agent (e.g. the Codex CLI) please follow the guidelines below so that the development experience – in particular Hot Module Replacement (HMR) – continues to work smoothly.

This blog was built on top of a template called [Ryze](https://github.com/8366888C/Ryze) which is a modern, reader-friendly and content-first starter built with **Astro v5**, **Tailwind CSS v4**, and optimized for SEO and responsiveness across all devices. Perfect for personal blogs and content-focused websites.

## 1. Use the Development Server, **not** `npm run build`

* **Always use `npm run dev` (or `pnpm dev`, `yarn dev`, etc.)** while iterating on the application. This starts Astro in development mode with hot-reload enabled.

* **Do _not_ run `npm run build` inside the agent session.**  Running the production build command switches to production assets which disables hot reload and can leave the development server in an inconsistent state. If a production build is required, do it outside of the interactive agent workflow.

## 2. Keep Dependencies in Sync

If you add or update dependencies remember to:

1. Update the appropriate lockfile (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`).
2. Re-start the development server so that Astro picks up the changes.

## 3. Coding Conventions

* Prefer TypeScript (`.tsx`/`.ts`) for new components and utilities.
* Co-locate component-specific styles in the same folder as the component when practical.

## 4. Useful Commands Recap

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start local development server     |
| `npm run build`     | Build production-ready static site |
| `npm run preview`   | Preview production build locally   |
| `npm run astro ...` | Run Astro CLI commands             |

---

Following these practices ensures that the agent-assisted development workflow stays fast and dependable. When in doubt, restart the dev server rather than running the production build.

## Git Guidelines

* Use conventional commits for your commit messages.
* Prefer short concise commit messages over long detailed commit messages.
* Assume the reader of your commit messages will be an experienced software engineer.
* Avoid describing things in your commit messages that can be easily inferred from the changes.
