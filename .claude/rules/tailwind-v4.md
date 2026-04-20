# Tailwind CSS v4 — Project Rules

## Setup (Already Configured)

```css
/* globals.css — v4 import style */
@import "tailwindcss";

/* Design tokens as CSS custom properties */
:root {
  --color-primary: ...;
  --color-secondary: ...;
  --radius: ...;
  /* etc. — check globals.css for actual values */
}
```

**Critical:** Tailwind v4 does NOT use `tailwind.config.js` for theme. All tokens are CSS custom properties in `globals.css`. Do not create a tailwind.config.js.

## What Changed in v4 (vs v3)

| v3 (old) | v4 (this project) |
|----------|-------------------|
| `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| `tailwind.config.js` for theme | CSS custom properties in globals.css |
| `darkMode: 'class'` in config | CSS `@media (prefers-color-scheme)` or custom properties |
| JIT mode (opt-in) | Always JIT (no config needed) |
| `@apply` in components | Still works but prefer utility classes directly |

## Class Ordering Convention

Follow this order for readability:
```
1. Layout:      flex, grid, block, hidden, relative, absolute
2. Sizing:      w-*, h-*, min-*, max-*
3. Spacing:     p-*, m-*, gap-*
4. Typography:  text-*, font-*, leading-*, tracking-*
5. Colors:      bg-*, text-*, border-*
6. Borders:     border-*, rounded-*
7. Effects:     shadow-*, opacity-*, blur-*
8. Transitions: transition-*, duration-*, ease-*
9. Responsive:  sm:*, md:*, lg:* (at the end)
```

Example:
```tsx
<div className="flex items-center gap-4 p-6 text-lg font-medium text-gray-900 bg-white rounded-xl shadow-sm transition-shadow hover:shadow-md md:p-8" />
```

## cn() Usage

Always use `cn()` from `@/lib/utils` for:
- Conditional classes
- Merging component defaults with user-provided className
- Resolving Tailwind conflicts

```typescript
import { cn } from "@/lib/utils";

// ✅ Conditional
<div className={cn("flex gap-4", isActive && "bg-primary", className)} />

// ✅ Variant merging (with CVA)
<button className={cn(buttonVariants({ variant, size }), className)} />

// ❌ Don't use template literals for conditionals
<div className={`flex gap-4 ${isActive ? "bg-primary" : ""}`} />
```

## Custom Properties Pattern

When referencing tokens defined in globals.css:
```tsx
// ✅ Use arbitrary values referencing CSS variables
<div className="bg-[var(--color-surface)] text-[var(--color-text)]" />

// ✅ Or if mapped as Tailwind utilities via v4 theme
<div className="bg-primary text-foreground" />

// ❌ Don't hardcode hex values
<div className="bg-[#1a1a2e]" />  // Use the token instead
```

**Always check globals.css first** for existing tokens before introducing arbitrary values.

## Responsive Rules

```tsx
// ✅ Mobile-first (base = mobile, then scale up)
<div className="flex flex-col md:flex-row lg:gap-8" />
<h1 className="text-2xl md:text-4xl lg:text-6xl" />

// ✅ Container pattern (if used)
<div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8" />

// ❌ Desktop-first (don't use max-width breakpoints)
// ❌ Arbitrary breakpoints: min-[832px]:flex
```

## Spacing & Sizing

```tsx
// ✅ Use Tailwind scale (4px base: 1=4px, 2=8px, 4=16px, etc.)
<div className="p-4 mt-8 gap-6" />

// ✅ Section spacing: consistent vertical rhythm
<section className="py-16 md:py-24 lg:py-32" />

// ❌ Arbitrary pixel values unless matching a design spec
<div className="p-[13px]" />  // Smells wrong — use nearest scale value
```

## Animation Classes

```tsx
// ✅ Simple transitions via Tailwind
<button className="transition-colors duration-200 hover:bg-primary/90" />
<div className="transition-transform duration-300 hover:scale-105" />

// ✅ Respect reduced motion
<div className="motion-safe:transition-opacity motion-safe:duration-300" />

// When to use Tailwind transitions vs Framer Motion:
// - Hover/focus states → Tailwind transition-*
// - Entrance/exit animations → Framer Motion
// - Scroll-triggered → Framer Motion useInView
// - Complex orchestration → Framer Motion variants
```
