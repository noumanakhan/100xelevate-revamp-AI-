# 100xElevate — Next.js Revamp

Re-implementation of [100xelevate.com](https://100xelevate.com) in Next.js, migrating from WordPress.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Sitemap:** next-sitemap

## Project Structure

```
100xelevate/        # Next.js application
  app/              # App Router pages and layouts
  components/       # Shared UI components
  lib/              # Utilities, metadata helpers, data files
  public/           # Static assets
```

## Getting Started

```bash
cd 100xelevate
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Site Structure

The site covers full SEO parity with the original WordPress site:

- **Static pages** — Services, verticals, audits, tools, legal, etc.
- **Dynamic city pages** — ~3,700 programmatic location pages across 4 services
- **For AI articles** — 255 articles at `/for-ai/[slug]/`
- **Insights** — Blog posts via WordPress API at `/insights/[slug]/`
- **Comparisons, Guides, Case Studies** — Content hub pages


