# Next.js 16 + React 19 — Project Rules

## Server vs Client Components

**Default: Server Component** (no directive needed)
```typescript
// src/components/Hero.tsx — Server Component
// Can: fetch data, access backend, read fs, use async/await
// Cannot: useState, useEffect, onClick, browser APIs

export const Hero = async () => {
  return <section>...</section>;
};
```

**Client Component** (only when necessary)
```typescript
// src/components/ewaste/CollectionMap.tsx — Client Component
"use client";
// Required for: state, effects, event handlers, browser APIs, Framer Motion

import { useState } from "react";
import { motion } from "framer-motion";
```

**Decision checklist:**
- Uses `useState`, `useEffect`, `useRef` → `"use client"`
- Uses `onClick`, `onChange`, `onSubmit` → `"use client"`
- Uses Framer Motion → `"use client"`
- Uses `window`, `document`, `navigator` → `"use client"`
- None of the above → Server Component (don't add the directive)

**Island pattern** — When only PART of a section needs interactivity:
```typescript
// Server Component (parent)
export const PricingSection = () => (
  <section>
    <h2>Pricing</h2>                    {/* Static — server rendered */}
    <PricingToggle />                    {/* Client island */}
  </section>
);

// Client Component (child) — "use client" only here
"use client";
export const PricingToggle = () => {
  const [annual, setAnnual] = useState(true);
  return <button onClick={() => setAnnual(!annual)}>...</button>;
};
```

## Metadata

```typescript
// Static metadata (preferred for marketing pages)
export const metadata: Metadata = {
  title: "Delve — Consumer Intelligence Platform",
  description: "...",
  openGraph: {
    title: "...",
    description: "...",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

// Dynamic metadata (only if route params needed)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `...` };
}
```

**Never:** Use `<Head>` from next/head (that's Pages Router). Never put `<title>` in JSX.

## Routing

```
src/app/page.tsx              → /
src/app/ewaste/page.tsx       → /ewaste
src/app/waste/page.tsx        → /waste
src/app/layout.tsx            → Root layout (shared across all routes)
src/app/not-found.tsx         → Custom 404
```

**Rules:**
- One `page.tsx` per route. No barrel exports from route directories.
- Shared layout logic → `layout.tsx` at the appropriate level.
- Loading states → `loading.tsx` (only if needed, prefer Suspense boundaries).
- Error handling → `error.tsx` with `"use client"` directive.
- No API routes unless the site needs server-side form handling.

## React 19 Patterns

```typescript
// ✅ Use React 19 features when appropriate:

// use() for data fetching in server components
import { use } from "react";

// Ref as prop (no forwardRef needed in React 19)
const Input = ({ ref, ...props }: { ref?: React.Ref<HTMLInputElement> }) => (
  <input ref={ref} {...props} />
);

// useActionState for forms (if any)
// useOptimistic for optimistic UI (if any)
```

**Note:** This is a marketing site. Most React 19 features (actions, optimistic UI, transitions) are more relevant to interactive apps. Don't add them for the sake of being "modern."

## Performance Checklist

Before any change that affects a route:
- [ ] Above-fold images use `priority` prop on `next/image`
- [ ] No `"use client"` on components that don't need it
- [ ] Heavy animations are below the fold or lazy-loaded
- [ ] No new npm dependencies unless truly necessary
- [ ] `npm run build` succeeds with no increase in bundle warnings
