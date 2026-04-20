# Prowin Typography System — Developer Reference

## Quick Setup

```tsx
// layout.tsx (Next.js)
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','800'] })

// If using next/font, remove the @import in typography.css
// and set the CSS variable:
// <html className={inter.className}>
```

```css
/* globals.css */
@import './typography.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Token Cheat Sheet

### When to use WHAT

| You're building...                 | Token class                                    | Weight class    |
|------------------------------------|------------------------------------------------|-----------------|
| **Main page heading (H1)**         | `text-display-2xl`                             | `font-extrabold`|
| **Section heading (H2)**           | `text-display-lg`                              | `font-medium`   |
| **Bold section heading (Deploy)**  | `text-display-xl`                              | `font-semibold` |
| **Smaller section heading**        | `text-display-md`                              | `font-semibold` |
| **Large card title (H3)**          | `text-heading-xl`                              | `font-medium`   |
| **Medium card title**              | `text-heading-lg`                              | `font-medium`   |
| **Small card title**               | `text-heading-md`                              | `font-medium`   |
| **Standard body text**             | `text-body-md`                                 | (default 400)   |
| **Large description**              | `text-body-lg`                                 | (default 400)   |
| **Small description**              | `text-body-sm`                                 | (default 400)   |
| **Footer text**                    | `text-body-xs`                                 | (default 400)   |
| **Eyebrow label (standard)**       | `typo-eyebrow` (composition)                   | built-in        |
| **Eyebrow label (mono)**           | `typo-eyebrow-mono` (composition)              | built-in        |
| **Nav category label**             | `typo-nav-label` (composition)                 | built-in        |
| **Pill badge**                     | `typo-stat-card-pill` (composition)             | built-in        |
| **Hero stat number (giant)**       | `typo-stat-hero` (composition)                 | built-in        |
| **Card stat number (32-40px)**     | `typo-stat-card-value` (composition)           | built-in        |
| **Stat description (green caps)**  | `typo-stat-card-desc` (composition)            | built-in        |
| **Header CTA button**              | `typo-button-header` (composition)             | built-in        |
| **Section CTA button**             | `typo-button-section` (composition)            | built-in        |
| **Nav link**                       | `typo-button-nav` (composition)                | built-in        |

---

### Two ways to apply

**Option A — Tailwind tokens** (atomic, composable):
```html
<h2 class="text-display-lg font-medium text-text-primary">
  Section Heading
</h2>
<p class="text-body-md text-text-secondary">
  Description text here.
</p>
```

**Option B — Composition classes** (single class, zero thinking):
```html
<span class="typo-eyebrow-mono">PLATFORM</span>
<h2 class="typo-section-heading">Section Heading</h2>
<div class="typo-stat-card-value">98%</div>
<div class="typo-stat-card-desc">RECOVERY RATE</div>
```

> **Rule of thumb**: Use composition classes (`typo-*`) for patterns that repeat identically across pages. Use Tailwind tokens (`text-*`) when you need to mix and match.

---

### Color reference

| Class                  | Color                          | When to use                    |
|------------------------|--------------------------------|--------------------------------|
| `text-text-primary`    | `#FFFFFF`                      | All headings                   |
| `text-text-secondary`  | `#94A3B8`                      | Body descriptions              |
| `text-text-tertiary`   | `#a1b3b8`                      | Light body (applications)      |
| `text-text-accent`     | `#34d399`                      | Stat descriptions, highlights  |
| `text-text-w80`        | `white/80`                     | Nav links                      |
| `text-text-w60`        | `white/60`                     | Subtext                        |
| `text-text-w50`        | `white/50`                     | Labels                         |
| `text-text-w40`        | `white/40`                     | Muted labels                   |
| `text-text-w30`        | `white/30`                     | Final CTA desc                 |
| `text-text-w25`        | `white/25`                     | Footer                         |

---

### Extended tokens (for new pages)

These don't exist in the current homepage/Impact pages but are pre-defined for consistency as you build out:

| Token              | Size            | Use case                              |
|--------------------|-----------------|---------------------------------------|
| `text-display-sm`  | 26px → 32px     | Modal titles, sub-section headers     |
| `text-heading-sm`  | 18px            | Sidebar nav, list group headers       |
| `text-button-lg`   | 16px            | Large landing-page CTAs               |
| `text-stat-sm`     | 24px            | Dashboard widgets, small KPIs         |
| `text-caption-md`  | 13px            | Image captions, timestamps            |
| `text-caption-sm`  | 11px            | Legal text, fine print                |
| `text-text-link`   | `#60a5fa`       | Inline hyperlinks                     |
| `text-text-error`  | `#f87171`       | Error states                          |
| `text-text-success`| `#34d399`       | Success states                        |
| `text-text-warning`| `#fbbf24`       | Warning states                        |

---

### Section spacing (vertical rhythm)

Use on section wrappers for consistent page rhythm:

```html
<section class="py-section-md">  <!-- 64px → 96px fluid -->
<section class="py-section-lg">  <!-- 80px → 120px fluid -->
```

| Token          | Range            |
|----------------|------------------|
| `section-sm`   | 48px → 72px      |
| `section-md`   | 64px → 96px      |
| `section-lg`   | 80px → 120px     |
| `section-xl`   | 96px → 160px     |
