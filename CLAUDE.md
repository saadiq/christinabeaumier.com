# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev        # Start dev server
bun run build  # Production build → dist/
bun run preview # Preview production build
```

No test or lint setup exists.

## Architecture

Astro 5 static site (SSG) — a professional portfolio for Christina Beaumier. Deploys to GitHub Pages with custom domain `christinabeaumier.com`.

### Data Flow

JSON files in `src/content/` → imported by page components → cast to TypeScript interfaces from `src/types.ts` → passed as props to Astro components. All content is static; no dynamic rendering or content collections.

### Key Directories

- `src/pages/` — File-based routing (index, resume, press, panels, interviews, presentations)
- `src/components/` — Reusable Astro components (cards, headers, layout pieces)
- `src/content/` — JSON data files (experience, education, awards, press, etc.)
- `src/layouts/BaseLayout.astro` — Single layout wrapper with scroll animation observer
- `src/types.ts` — All TypeScript interfaces for content data
- `src/styles/global.css` — Tailwind 4 theme config (cream/warm-gray/gold palette)

### Design System

Tailwind CSS 4 with custom theme tokens defined via `@theme` in `global.css`:
- **Colors:** cream-50→200, warm-gray-300→900, gold-500→700
- **Fonts:** Inter Variable (sans), Georgia (serif)
- **Animations:** `.animate-on-scroll` class triggers fade-in + slide-up via Intersection Observer in BaseLayout

### Navigation

Links use plain paths (no base path prefix needed with custom domain). Active page detection compares against `Astro.url.pathname`. Mobile menu toggle uses JS in Header.astro.

### Redirects

Old Squarespace paths are redirected via Astro's `redirects` config in `astro.config.mjs`:
- `/bio` → `/` , `/about` → `/resume`, `/new-page` → `/panels`, `/images` → `/interviews`

### Deployment

- **GitHub Pages only** — `astro.config.mjs`: site=`https://christinabeaumier.com`, custom domain via `public/CNAME`
