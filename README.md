# christinabeaumier.com

Professional portfolio site for Christina Beaumier — technology executive, product leader, and ad tech industry veteran.

## Tech Stack

- [Astro 5](https://astro.build/) (static site generation)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
- Deployed to GitHub Pages & Cloudflare Pages

## Development

```bash
bun install    # Install dependencies
bun dev        # Start dev server at localhost:4321
bun run build  # Production build → dist/
bun run preview # Preview production build
```

## Project Structure

```
src/
├── pages/        # File-based routing (index, resume, press, panels, etc.)
├── components/   # Reusable Astro components
├── content/      # JSON data files (experience, education, awards, press, etc.)
├── layouts/      # BaseLayout with scroll animations
├── styles/       # Tailwind theme config (cream/warm-gray/gold palette)
└── types.ts      # TypeScript interfaces for content data
```
