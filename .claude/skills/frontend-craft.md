# Frontend Craft Skill — Delve Marketing Site
# Domain: Component architecture, rendering strategy, responsive patterns, code quality
# Trigger: Building new sections, refactoring components, performance work

## Component Thinking for Marketing Sites

Marketing sites are NOT web apps. Different rules apply:

```
WEB APP thinking:                    MARKETING SITE thinking:
├─ State management is critical      ├─ State is minimal (maybe a toggle or two)
├─ Data fetching everywhere          ├─ Content is mostly static/hardcoded
├─ Forms, CRUD, real-time            ├─ One or two forms (contact, newsletter)
├─ Reusable component library        ├─ Section-specific components, few shared
├─ Client-side routing               ├─ Full page loads are fine (3 pages)
├─ Bundle size = gradual concern     ├─ Bundle size = immediate LCP concern
└─ User sessions, auth               └─ Anonymous visitors, SEO matters
```

**Key insight:** Every `"use client"` directive on a marketing site is a tax. Server-render everything you can. The user sees pixels faster, Google indexes content directly, and your Lighthouse score thanks you.

## Section Component Blueprint

Every marketing page is a vertical stack of sections. Here's the pattern:

```typescript
// src/components/FeatureShowcase.tsx
// Server Component by default — no directive needed

import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureShowcaseProps {
  className?: string;
}

export const FeatureShowcase = ({ className }: FeatureShowcaseProps) => {
  return (
    <section
      className={cn("py-16 md:py-24 lg:py-32", className)}
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Section header — always centered, always constrained */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Features
          </p>
          <h2
            id="features-heading"
            className="mt-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            Intelligence that moves at market speed
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Description that expands on the heading without repeating it.
          </p>
        </div>

        {/* Section content — varies per section type */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          {/* ... */}
        </div>
      </div>
    </section>
  );
};
```

### Section Anatomy Checklist
```
Every section MUST have:
  ✅ Semantic <section> tag with aria-labelledby
  ✅ Consistent container: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
  ✅ Vertical padding from the spacing scale (py-16/py-24/py-32)
  ✅ className prop for override from page level
  ✅ Real content (no Lorem Ipsum ever committed)

Every section header SHOULD have:
  ✅ Optional eyebrow/kicker text (small, uppercase, accent colored)
  ✅ h2 with id (for aria-labelledby and anchor linking)
  ✅ Supporting paragraph
  ✅ Constrained width: max-w-2xl mx-auto text-center
```

## Content Rendering Patterns

### Static Content (90% of a Marketing Site)
```typescript
// ✅ Hardcode content directly — this is a marketing site, not a CMS
const features = [
  {
    title: "Real-time Tracking",
    description: "Monitor consumer sentiment as it shifts.",
    icon: Activity,
  },
  {
    title: "Predictive Insights",
    description: "See demand signals before competitors.",
    icon: TrendingUp,
  },
  // ...
] as const;

// Render from array — clean, DRY, type-safe
{features.map((feature) => (
  <FeatureCard key={feature.title} {...feature} />
))}
```

### When Content Arrays Make Sense vs Inline JSX
```
USE ARRAYS when:
  - 3+ items with identical structure (cards, stats, logos, steps)
  - Content might grow (features list, team members)
  - You want to reorder without touching JSX

USE INLINE JSX when:
  - Hero section (unique, one-off layout)
  - CTA sections (each is different enough to warrant unique markup)
  - Complex alternating layouts (image-left/image-right rows)
  - Sections with mixed content types
```

## Client Islands — Minimal Interactivity Pattern

```typescript
// PATTERN: Server-rendered section with one interactive island

// src/components/PricingSection.tsx (Server Component — no directive)
import { PricingToggle } from "./PricingToggle";

export const PricingSection = () => (
  <section className="py-24">
    <div className="mx-auto max-w-7xl px-4">
      <h2>Simple, transparent pricing</h2>
      {/* Only this child is client-side */}
      <PricingToggle />
    </div>
  </section>
);

// src/components/PricingToggle.tsx (Client Component — minimal)
"use client";
import { useState } from "react";

export const PricingToggle = () => {
  const [annual, setAnnual] = useState(true);
  return (
    <>
      <button onClick={() => setAnnual(!annual)}>
        {annual ? "Annual" : "Monthly"}
      </button>
      <div>{/* Price cards — rendered based on toggle */}</div>
    </>
  );
};
```

### What Needs "use client" on Delve (Exhaustive List)
```
Components that likely need it:
  ✅ Mobile navigation hamburger menu (state: open/close)
  ✅ FAQ accordion (state: which item is open)
  ✅ Pricing toggle (state: monthly/annual)
  ✅ Image carousel/slider (state: active slide)
  ✅ Tab components (state: active tab)
  ✅ Any Framer Motion animated component (uses hooks internally)
  ✅ Contact/newsletter form (state: form values)
  ✅ Cookie consent banner (state: dismissed)
  ✅ particles.tsx (if using canvas/requestAnimationFrame)

Components that do NOT need it:
  ❌ Header (unless hamburger state — split it)
  ❌ Footer
  ❌ Hero section (unless animated — split the animation out)
  ❌ Feature cards (static content)
  ❌ Testimonial display (unless carousel)
  ❌ Stats/metrics display
  ❌ Logo strips
  ❌ CTA sections
```

## Responsive Patterns

### Mobile-First Breakpoint Strategy
```typescript
// ✅ Base = mobile, then enhance
<div className="
  flex flex-col gap-8          /* Mobile: stacked */
  md:flex-row md:gap-12        /* Tablet: side by side */
  lg:gap-16                    /* Desktop: more breathing room */
"/>

// ✅ Typography scaling
<h1 className="
  text-3xl                     /* Mobile: readable, not cramped */
  md:text-5xl                  /* Tablet: impactful */
  lg:text-6xl xl:text-7xl      /* Desktop: hero-sized */
"/>

// ✅ Grid patterns
<div className="
  grid gap-6                   /* Mobile: single column */
  md:grid-cols-2               /* Tablet: 2 columns */
  lg:grid-cols-3               /* Desktop: 3 columns */
"/>

// ✅ Section padding
<section className="
  py-12 px-4                   /* Mobile: compact but breathing */
  md:py-20 md:px-6             /* Tablet: more generous */
  lg:py-28 lg:px-8             /* Desktop: premium spacing */
"/>
```

### Mobile-Specific Design Rules
```
1. Touch targets: minimum 44x44px (buttons, links, interactive elements)
2. No horizontal scroll: everything within viewport width
3. Stack, don't shrink: columns → rows, not tiny columns
4. Reduce, don't hide: show less content per card, don't display:none entire sections
5. Font floor: Never below 14px for body text on mobile
6. CTA stacking: Multiple buttons → full-width stack on mobile
7. Image strategy: Use `sizes` prop to serve smaller images on mobile
```

### Container Strategy
```typescript
// Standard container for most sections
<div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

// Narrow container for text-heavy sections (blog, legal, about)
<div className="mx-auto max-w-3xl px-4 md:px-6">

// Full-bleed container (hero, CTA, divider sections)
<div className="w-full">  {/* No max-width, background goes edge-to-edge */}
  <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
    {/* Content still contained */}
  </div>
</div>
```

## Performance-Aware Component Patterns

### Lazy Loading Below-Fold Sections
```typescript
import dynamic from "next/dynamic";

// ✅ Heavy components loaded on demand
const ParticleBackground = dynamic(
  () => import("@/components/ui/particles"),
  { ssr: false } // Canvas-based — no SSR benefit
);

const TestimonialsCarousel = dynamic(
  () => import("@/components/TestimonialsCarousel"),
  { loading: () => <div className="min-h-[300px]" /> }
);

// ❌ Never lazy-load: Header, Hero, primary CTA, Footer
```

### Image Component Patterns
```typescript
// Hero image (above fold — priority load)
<Image
  src="/images/hero-dashboard.webp"
  alt="Delve dashboard showing real-time consumer insights"
  width={1200}
  height={675}
  priority
  sizes="100vw"
  className="rounded-xl shadow-2xl"
/>

// Feature image (below fold — lazy by default)
<Image
  src="/images/feature-analytics.webp"
  alt="Analytics view with trend comparison"
  width={600}
  height={400}
  sizes="(max-width: 768px) 100vw, 50vw"
  className="rounded-lg"
/>

// Logo (small, inline)
<Image
  src="/images/logos/company.svg"
  alt="Company name"
  width={120}
  height={40}
  className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
/>
```

## Code Organization Patterns

### Page Composition
```typescript
// src/app/page.tsx — Thin orchestrator, no logic
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}

// Each section is self-contained:
// - Own data (hardcoded or fetched)
// - Own styles (via Tailwind classes)
// - Own aria labels
// - Own responsive behavior
```

### Prop Patterns for Marketing Components
```typescript
// ✅ Simple — most marketing components need minimal props
interface SectionProps {
  className?: string;  // Always accept for page-level override
}

// ✅ Variant — when a component has 2-3 visual modes
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  variant?: "default" | "featured";  // Use CVA for this
  className?: string;
}

// ❌ Over-engineered — this is NOT an app component
interface BadSectionProps {
  title: string;
  subtitle: string;
  alignment: "left" | "center" | "right";
  background: "light" | "dark" | "gradient" | "image";
  spacing: "sm" | "md" | "lg";
  titleTag: "h1" | "h2" | "h3";
  showDivider: boolean;
  // ... 15 more props that make it "flexible" but unusable
}
// Just hardcode the values in the component. It's a marketing site.
```

## Common Pitfalls

```
❌ Creating a "Section" wrapper component with 12 props
   → Just write the section directly. Each one is different.

❌ Building a component library before you have 3 pages
   → You have 3 pages. Build what you need, refactor later.

❌ Using Zustand/Redux for a mobile menu toggle
   → useState in the Header component. That's it.

❌ Creating an API route to serve static content
   → Hardcode it. It's marketing copy. It changes via git, not a CMS.

❌ Using React.memo on marketing components
   → These render once on page load. Memoization adds complexity for zero benefit.

❌ Extracting every 5-line element into its own file
   → If it's used once and is under 20 lines, keep it inline.
```
