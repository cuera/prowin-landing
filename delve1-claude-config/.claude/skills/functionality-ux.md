# Functionality & UX Skill — Delve Marketing Site
# Domain: Interactions, animations, micro-interactions, conversion patterns, user flow
# Trigger: Adding interactivity, animation work, CTA optimization, form building, navigation

## The Interaction Budget

Marketing sites have a strict interaction budget. Every piece of JavaScript has a cost:
- Parse time on mobile
- Hydration delay
- Bundle size increase
- Potential CLS (layout shift)

**Rule: Earn every interaction.** If a CSS-only solution exists, use it. If a static render works, skip the animation. Only add JS-driven interactivity when it genuinely improves comprehension or conversion.

## Animation System

### The Animation Hierarchy (Most to Least Impact)
```
1. PAGE ENTRANCE — Staggered reveal of hero elements (highest ROI)
2. SCROLL REVEALS — Sections appearing as user scrolls down
3. HOVER STATES — Interactive feedback on clickable elements
4. MICRO-INTERACTIONS — Button press effects, icon animations
5. AMBIENT MOTION — Background particles, floating shapes (lowest ROI, highest cost)
```

### Page Entrance — The First Impression
```typescript
"use client";
import { motion } from "framer-motion";

// Stagger container — wraps the hero section
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Child animation — each hero element uses this
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const HeroAnimated = () => (
  <motion.div variants={stagger} initial="initial" animate="animate">
    <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest">
      Consumer Intelligence
    </motion.p>
    <motion.h1 variants={fadeUp} className="mt-4 text-5xl font-bold">
      See What Your Competitors Can't
    </motion.h1>
    <motion.p variants={fadeUp} className="mt-6 text-lg text-muted">
      Real-time insights that drive decisions.
    </motion.p>
    <motion.div variants={fadeUp} className="mt-8 flex gap-4">
      <Button>Start Free Analysis</Button>
      <Button variant="outline">Watch Demo</Button>
    </motion.div>
  </motion.div>
);
```

**Rules for page entrance:**
```
✅ Total entrance duration: 0.6–1.0s (hero fully visible)
✅ Stagger delay: 0.08–0.15s between elements
✅ Individual duration: 0.4–0.6s per element
✅ Easing: [0.25, 0.4, 0.25, 1] (custom ease-out) or "easeOut"
✅ Direction: bottom-to-top (fadeUp) or subtle scale (0.98 → 1)

❌ Don't animate the LCP element (largest text/image) with opacity:0 start
   → This delays LCP measurement. Animate from opacity:0.5 or skip it.
❌ Don't exceed 1s total — visitors are waiting to read
❌ Don't animate more than 5 elements — it becomes a slideshow
```

### Scroll Reveals — Below-Fold Sections
```typescript
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ScrollReveal = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

**Rules for scroll reveals:**
```
✅ Use `once: true` — animate only on first appearance, not every scroll
✅ margin: "-80px" to "-120px" — trigger slightly before element enters viewport
✅ Keep it subtle: y: 20-40px, opacity: 0 → 1, duration: 0.5-0.7s
✅ Stagger grid children: each card reveals 0.1s after the previous

❌ Don't animate EVERY section — alternate: reveal, static, reveal, static
❌ Don't use scale or rotate for scroll reveals (disorienting)
❌ Don't animate sections the user has already scrolled past
❌ Don't use IntersectionObserver manually — Framer Motion's useInView handles it
```

### Hover States — Interactive Feedback
```typescript
// ✅ CSS-first hover states (no JS needed)

// Card hover — subtle lift
<div className="
  rounded-xl border bg-[var(--bg-elevated)] p-6
  transition-all duration-200
  hover:shadow-lg hover:-translate-y-1 hover:border-[var(--accent-subtle)]
"/>

// Button hover — color shift
<button className="
  bg-[var(--accent)] text-white px-6 py-3 rounded-lg
  transition-colors duration-150
  hover:bg-[var(--accent-hover)]
  active:scale-[0.98] active:transition-transform
"/>

// Link hover — underline reveal
<a className="
  relative text-[var(--accent)]
  after:absolute after:bottom-0 after:left-0
  after:h-[1px] after:w-0 after:bg-current
  after:transition-all after:duration-300
  hover:after:w-full
"/>

// Logo hover — grayscale to color
<Image className="
  opacity-50 grayscale
  transition-all duration-300
  hover:opacity-100 hover:grayscale-0
"/>
```

**Rules for hover states:**
```
✅ Every clickable element must have a visible hover state
✅ Duration: 150-200ms (instant feel, not sluggish)
✅ Use CSS transitions, not Framer Motion (simpler, no JS cost)
✅ Combine transform + color/shadow for cards (lift + glow effect)
✅ active:scale-[0.98] on buttons gives satisfying click feedback

❌ Don't animate width/height (causes reflow — use transform)
❌ Don't use hover effects on mobile (no hover on touch)
❌ Don't change text content on hover (disorienting)
```

### Micro-Interactions — Small Delights
```typescript
// Arrow slides right on button hover (CSS only)
<button className="group flex items-center gap-2">
  Get Started
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</button>

// Icon rotates on card hover
<div className="group rounded-xl border p-6 hover:border-[var(--accent)]">
  <Activity className="h-8 w-8 transition-transform group-hover:rotate-12 group-hover:scale-110" />
  <h3>Real-time Tracking</h3>
</div>

// Number count-up animation (client component)
"use client";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};
```

## Navigation Patterns

### Header
```typescript
// Desktop: static or sticky
// Mobile: hamburger with slide-out or overlay

// Sticky header pattern
<header className="
  sticky top-0 z-50
  bg-[var(--bg-primary)]/80 backdrop-blur-lg
  border-b border-[var(--border)]
">

// ✅ Show/hide on scroll (optional — improves content focus)
// Scroll down → header slides up (hidden)
// Scroll up → header slides down (visible)
// This requires "use client" — only add if the site needs it
```

### Mobile Menu
```typescript
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="md:hidden"
      >
        {open ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[var(--bg-primary)] p-6 md:hidden"
            aria-label="Mobile navigation"
          >
            {/* Nav links — full width, large touch targets */}
            <a href="/" className="block py-4 text-lg">Home</a>
            <a href="/ewaste" className="block py-4 text-lg">EcoNexus</a>
            <a href="/waste" className="block py-4 text-lg">Waste</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
```

## Conversion Patterns

### CTA Hierarchy
```
Every page should have exactly ONE primary action and up to ONE secondary.

VISUAL WEIGHT:
  Primary CTA:   Solid background, accent color, large, prominent
  Secondary CTA:  Outline or ghost, neutral, smaller or same size
  Tertiary links: Text-only with underline or arrow, inline

COPY RULES:
  ❌ "Get Started"     → Too vague
  ❌ "Learn More"      → Passive, no outcome
  ❌ "Submit"          → Bureaucratic
  ❌ "Click Here"      → 1998 called

  ✅ "Start Free Analysis"    → Value + low friction
  ✅ "See Live Demo"          → Specific, active
  ✅ "Talk to Our Team"       → Human, direct
  ✅ "Calculate Your ROI"     → Outcome-focused
```

### CTA Placement Strategy
```
ABOVE FOLD:   Primary CTA in hero (always)
MID-PAGE:     Contextual CTA after features or social proof
PRE-FOOTER:   Final CTA section (full-width, high contrast background)
STICKY:       Optional mobile sticky CTA bar at bottom (for long pages)

Rule: A visitor should NEVER scroll more than 2 sections without seeing a CTA.
```

### Trust Signals (Place Strategically)
```
NEAR HERO:
  - Logo bar: "Trusted by teams at [logos]"
  - Metric: "50K+ analyses run this month"

NEAR PRICING:
  - "No credit card required"
  - "Cancel anytime"
  - Security badges (SOC 2, GDPR if applicable)

NEAR FORMS:
  - "Your data is encrypted"
  - "We never share your information"
  - Privacy policy link

IN TESTIMONIALS:
  - Real names + real companies + photos
  - Specific results: "Reduced research time by 60%"
  - Role titles that match target buyer persona
```

### Form UX (Contact/Newsletter)
```typescript
// ✅ Minimal fields — every field reduces conversion
<form>
  <input type="email" placeholder="Work email" required />
  <button type="submit">Get Started</button>
</form>
// 1 field + 1 button = highest conversion rate

// ✅ If you need more fields — progressive disclosure
// Step 1: Email only → Submit
// Step 2: Name + Company → Submit
// Don't show all fields at once

// ✅ Form feedback
// Loading: disable button, show spinner
// Success: replace form with confirmation message
// Error: inline message below the field, not an alert()

// ❌ Never: CAPTCHA on a marketing form (kills conversion)
// ❌ Never: Required phone number (unnecessary friction)
// ❌ Never: Dropdown with 200 country options (just ask for country name)
```

## Reduced Motion — Accessibility Requirement

```typescript
// ✅ Always respect prefers-reduced-motion
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// In component, check preference:
import { useReducedMotion } from "framer-motion";

const prefersReduced = useReducedMotion();

<motion.div
  {...(prefersReduced ? {} : fadeUp)}
  // If reduced motion: render instantly, no animation
/>

// CSS fallback for non-Framer animations:
<div className="motion-safe:transition-transform motion-safe:hover:scale-105" />
```

## Scroll Behavior

```css
/* In globals.css */
html {
  scroll-behavior: smooth;
  /* Only for anchor links — doesn't affect programmatic scroll */
}

/* Offset for sticky header */
html {
  scroll-padding-top: 5rem; /* Match header height */
}
```

```typescript
// ✅ Anchor scroll for single-page sections
<a href="#features" className="...">Features</a>

// ✅ In the target section
<section id="features" className="scroll-mt-20">
```

## Loading & Empty States

```typescript
// ✅ Skeleton for async content (rare on marketing sites)
<div className="animate-pulse space-y-4">
  <div className="h-4 w-3/4 rounded bg-muted" />
  <div className="h-4 w-1/2 rounded bg-muted" />
</div>

// ✅ Form submission loading
<button disabled={isSubmitting}>
  {isSubmitting ? (
    <Loader2 className="h-4 w-4 animate-spin" />
  ) : (
    "Submit"
  )}
</button>

// ✅ Image loading — blur placeholder
<Image
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..." // Tiny base64 blur
/>
```

## Performance Impact Table

Before adding any interaction, check its cost:

```
INTERACTION                      JS COST    CLS RISK   WORTH IT?
─────────────────────────────────────────────────────────────────
CSS hover transitions            0          None       Always ✅
CSS scroll-behavior: smooth      0          None       Always ✅
Framer Motion entrance           ~30KB*     Low        Hero only ✅
Framer Motion scroll reveal      ~30KB*     Low        2-3 sections ✅
Framer Motion AnimatePresence    ~30KB*     Medium     Mobile menu ✅
Number count-up                  ~1KB       None       Stats section ✅
Parallax scrolling               ~5KB       HIGH       Rarely worth it ⚠️
Particle background              ~15KB      Medium     One section max ⚠️
Lottie animation                 ~50KB      Medium     Almost never ❌
GSAP (on top of Framer)          ~25KB      Low        Never — pick one ❌
Video background                 ~500KB+    HIGH       Hero only, autoplay muted ⚠️

* Framer Motion is already in the bundle — cost is shared across uses
```
