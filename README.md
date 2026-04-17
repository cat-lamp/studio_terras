# Studio Terras — Landing Page

A modern, minimalist single-page landing site for **Studio Terras**, a premium website creation agency. Built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons.

## Design System

- **Palette** — Earth tones: warm terracotta, deep forest greens, soft sands, and a cream background (instead of pure white) for warmth.
- **Typography** — Playfair Display (serif) for headings, Inter (sans-serif) for body copy.
- **Style** — Generous whitespace, rounded corners, subtle fade-in-on-scroll animations.

All colors and fonts are centralized in [`tailwind.config.js`](./tailwind.config.js), so rebranding is a matter of editing a single file.

## Page Sections

1. **Hero** — Headline, subheadline, and a terracotta "Get Started" CTA.
2. **Value Proposition** — Three-column stat grid (SEO, First Impressions, Credibility) with Lucide icons.
3. **What We Do** — Custom Web Design, SEO Optimization, Technical Strategy.
4. **Contact** — Minimalist form (Name, Email, Project Details) with a warm terracotta "Send" button.
5. **Footer** — Simple links and copyright.

## Getting Started

Requires Node.js 18+.

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
.
├── index.html              # Entry HTML with meta tags
├── src/
│   ├── App.tsx             # All page sections + scroll-reveal hook
│   ├── index.css           # Tailwind layers + fonts + reveal utility
│   └── main.tsx            # React entrypoint
├── tailwind.config.js      # Earth tone palette + serif/sans font families
└── postcss.config.js
```

## Responsiveness

The layout is fully responsive — single-column on mobile, three-column on desktop — using Tailwind's `md:` breakpoint. Sticky navigation collapses its nav links on narrow viewports.

## Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`).
- Each section is labelled with `aria-labelledby`.
- Focus states on interactive elements; form fields are properly associated with labels.
- Smooth scrolling with `prefers-reduced-motion`-friendly fallbacks (IntersectionObserver disabled gracefully).
