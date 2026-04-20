# Performance & Lighthouse — Project Rules

## Target Scores (Marketing Site)
```
Performance:   ≥ 90
Accessibility: ≥ 95
Best Practices: ≥ 95
SEO:           100
```

## Core Web Vitals Targets
```
LCP  < 2.5s   Largest Contentful Paint (hero image/text)
FID  < 100ms  First Input Delay (interaction responsiveness)
CLS  = 0      Cumulative Layout Shift (visual stability)
INP  < 200ms  Interaction to Next Paint (React 19 helps here)
```

## LCP Optimization

The LCP element on marketing pages is typically the hero image or hero heading.

```typescript
// ✅ Hero image: priority + sized + optimized format
<Image
  src="/hero.webp"
  alt="..."
  width={1200}
  height={630}
  priority              // Preloads — only use for above-fold LCP candidate
  sizes="100vw"         // Full-width hero
  quality={85}          // Balance quality/size
/>

// ✅ Hero text: server-rendered, no client hydration delay
// Keep hero as Server Component — no "use client"

// ❌ Don't lazy-load hero images (they're the LCP element)
// ❌ Don't put hero content behind a loading spinner
// ❌ Don't animate the LCP element with opacity: 0 → 1 (delays LCP measurement)
```

## CLS Prevention

```typescript
// ✅ All images must have explicit dimensions
<Image width={400} height={300} ... />  // OR
<Image fill className="object-cover" ... />  // With sized parent

// ✅ Font loading: already handled in layout.tsx via next/font
// The Inter font is preloaded — don't add additional font links

// ✅ Reserve space for dynamic content
<div className="min-h-[200px]">  {/* Prevent jump when content loads */}
  <Suspense fallback={<Skeleton className="h-[200px]" />}>
    <DynamicContent />
  </Suspense>
</div>

// ❌ Don't insert content above existing content after load
// ❌ Don't use animations that change element dimensions (width/height)
// ❌ Don't dynamically inject stylesheets
```

## Bundle Size Control

```
Rules for a marketing site:
1. Every new npm dependency needs justification
2. Prefer CSS over JS for visual effects
3. Prefer Server Components over Client Components
4. Split client-side code at the route level
```

### Dependency Weight Awareness
```
framer-motion    ~30KB gzipped  — Already included. Don't add GSAP/Lottie.
lucide-react     Tree-shakes    — Import individual icons, not the package.
radix-ui/*       Tree-shakes    — Import individual primitives.
@tabler/icons    ~2KB per icon  — Use sparingly.
```

### Lazy Loading Below-Fold Sections
```typescript
import dynamic from "next/dynamic";

// ✅ Heavy components below the fold
const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection"),
  { loading: () => <div className="min-h-[400px]" /> }
);

// ❌ Don't lazy-load: Header, Hero, above-fold CTA
// ✅ Do lazy-load: Testimonials, FAQ, Footer map, particle effects
```

## Image Optimization

```
Format priority: WebP > AVIF (if supported) > PNG (logos only) > JPG (photos)
Hero images:     max 200KB after compression
Card images:     max 80KB after compression
Icons/logos:     Use SVG or icon library (not raster)
```

```typescript
// ✅ Responsive images with sizes hint
<Image
  src="/feature.webp"
  alt="..."
  width={600}
  height={400}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

## Server Component Performance

```typescript
// ✅ Keep data-heavy sections as Server Components
// No hydration cost, no JS shipped to client

// ✅ Use Suspense for any async data
<Suspense fallback={<SkeletonCard />}>
  <AsyncSection />
</Suspense>

// ✅ Stream long pages — each section can load independently
// Next.js 16 handles this automatically with Server Components + Suspense
```

## Audit Checklist (Run Before Major Deploys)

```bash
# 1. Build check
npm run build
# Look for: bundle size warnings, unused pages, large chunks

# 2. Lighthouse (local)
# Use Chrome DevTools → Lighthouse → Mobile → Performance

# 3. Quick checks
# - [ ] All above-fold images have priority prop
# - [ ] No "use client" on components that don't need it
# - [ ] No console.log statements left in
# - [ ] No unused imports (eslint catches most)
# - [ ] All images have alt text
# - [ ] Metadata is set for all routes
# - [ ] OG images exist for all routes
```
