# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Next.js)
- `npm run build` — Production build
- `npm run lint` — Run ESLint (flat config, Next.js core-web-vitals + TypeScript rules)
- `npm start` — Serve production build

## Architecture

This is a **Next.js 16** marketing/landing site for "Delve" built with React 19, TypeScript, and Tailwind CSS v4. It uses the App Router (`src/app/`).

### Routes

- `/` — Main Delve landing page (consumer intelligence platform)
- `/ewaste` — EcoNexus e-waste management product page (client component)
- `/waste` — Waste management product page (client component)

### Key Directories

- `src/components/` — Shared components (Header, Footer, Hero, etc.)
- `src/components/ui/` — Reusable UI primitives (button, avatar, dialog, particles, etc.) built with Radix UI + CVA
- `src/components/ewaste/` — EcoNexus e-waste page components
- `src/components/waste/` — Waste management page components
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

### Stack & Conventions

- **Styling**: Tailwind CSS v4 via PostCSS (`@import "tailwindcss"`). Design tokens defined as CSS custom properties in `globals.css`.
- **Animations**: Framer Motion
- **Icons**: Lucide React, Tabler Icons, Radix Icons
- **UI primitives**: Radix UI (avatar, dialog, slot) with class-variance-authority for variants
- **Path alias**: `@/*` maps to `./src/*`
- **Font**: Inter, loaded via Google Fonts in layout.tsx
