# Premium Design Skill — Delve Marketing Site
# Domain: Visual identity, spatial design, typography, color, atmosphere
# Trigger: Any task involving new sections, page design, visual overhaul, branding

## Design Identity: Delve

Delve is a **consumer intelligence platform** — not a toy, not a startup MVP. The design must communicate:
- **Authority** — "We process data you can't access elsewhere"
- **Clarity** — Complex intelligence, simple presentation
- **Premium** — Enterprise-grade, not template-grade
- **Trust** — Clean, structured, nothing feels hacked together

Sub-products (EcoNexus/Waste) inherit this identity but can have their own color accent and environmental tone.

## The Anti-Slop Checklist

Before designing ANY section, verify you're not falling into generic AI patterns:

```
❌ SLOP SIGNALS — If you see these, redesign:
- Purple/blue gradient hero on white background
- Centered 3-card grid with rounded corners and shadows
- Generic icon + heading + paragraph cards
- "Get Started" button in primary color with no visual weight hierarchy
- Perfectly symmetrical layouts with no visual tension
- Gradient text on everything
- Stock photography feel (even if custom)
- Same font for everything at different sizes
- Evenly spaced everything (no rhythm, no breathing)

✅ PREMIUM SIGNALS — Aim for these:
- One bold typographic moment per section (oversized, cropped, or unexpected)
- Intentional asymmetry or off-grid placement
- Depth layers (foreground/midground/background elements)
- Meaningful negative space (not "empty" — deliberate pause)
- Color used sparingly and with purpose (accent, not decoration)
- Subtle texture or grain that adds tactile quality
- Visual hierarchy so clear you can squint and still see the structure
- Motion that reveals information, not just decorates
```

## Typography System

### Hierarchy Rules
```
Display/Hero:    One typeface, bold weight, oversized (clamp(2.5rem, 5vw, 5rem))
Section Heads:   Same family or complementary, semi-bold, large (clamp(1.75rem, 3vw, 3rem))
Body/Paragraph:  Readable, regular weight, comfortable size (1rem–1.125rem, line-height 1.6–1.75)
Captions/Meta:   Smaller, lighter, often uppercase with letter-spacing
Numbers/Stats:   Tabular figures, can be display-size for impact
```

### Font Pairing Strategy
The project uses Inter. For a premium upgrade path:
```
Option A: Keep Inter for body, add a display face for heroes/headlines
  → Suggestions: Instrument Serif, Playfair Display, DM Serif Display
  → Creates editorial/magazine tension between geometric body and classical display

Option B: Switch entirely to a more distinctive family
  → Suggestions: Satoshi, General Sans, Cabinet Grotesk, Plus Jakarta Sans
  → Maintains geometric clarity but adds character Inter lacks

Option C: Embrace Inter but use it dramatically
  → Extreme weight contrast (Inter Thin 100 at 5rem vs Inter Bold 700 at 0.875rem)
  → Oversized numbers, tight letter-spacing on caps, generous line-height on body
  → Proves you can make any font premium through composition
```

**Current constraint:** Inter is loaded in layout.tsx. Adding a second font = update layout.tsx with `next/font/google` second import. Always variable fonts for performance.

## Color Architecture

### Structure (Not Just a Palette)
```
Background System:
  --bg-primary:     Main page background (dark or light, commit to one)
  --bg-secondary:   Alternating section background (subtle shift, not jarring)
  --bg-elevated:    Cards, modals, floating elements (slight lift from bg-primary)

Text System:
  --text-primary:   Headlines, key content (maximum contrast)
  --text-secondary: Body text, descriptions (slightly muted)
  --text-muted:     Captions, metadata (clearly subordinate)

Accent System:
  --accent:         ONE dominant brand color (used sparingly — CTAs, highlights, key data)
  --accent-subtle:  10-15% opacity version for backgrounds, borders
  --accent-hover:   Slightly shifted for interactive states

Semantic:
  --success / --warning / --error  (only where needed)
```

### Color Usage Rules
```
The 60-30-10 Rule:
  60% — Background colors (bg-primary, bg-secondary)
  30% — Text and structural elements
  10% — Accent color (CTAs, highlights, active states)

If your accent color appears in more than 3 elements per viewport → you're overusing it.
Accent is a scalpel, not a paintbrush.
```

### Per-Product Color Strategy
```
Delve (main):     Professional — deep navy, slate, or near-black with a sharp accent
EcoNexus (ewaste): Environmental — introduce green/teal accent, retain Delve base
Waste:            Industrial — introduce amber/copper accent, retain Delve base
```

## Spatial Composition

### Section Rhythm
```
Not every section should be the same height or density.

Pattern: Breathe → Dense → Breathe → Dense → CTA

Example flow:
  [Hero — full viewport, generous space, one message]
  [Social Proof — compact strip, logos or stats, tight]
  [Features — medium density, grid with breathing room]
  [Deep Dive — asymmetric, image + text, editorial feel]
  [Testimonials — compact, card carousel or quote strip]
  [CTA — full viewport, generous space, one action]
  [Footer — dense, utility, links + legal]
```

### Grid Breaking
```
Not everything sits in a 12-column grid. Premium sites break the grid intentionally:

- Hero image bleeds past content container on one side
- A stat or pull-quote floats outside the main column
- An accent line or shape extends from edge-to-edge behind a contained section
- Background elements (gradients, shapes) ignore the grid entirely
- One element per page is noticeably larger than expected (creates visual anchor)
```

### Spacing Scale
```
Use exponential, not linear spacing between sections:

Tight:    py-8  md:py-12    (within a section, between related elements)
Normal:   py-16 md:py-24    (standard section padding)
Generous: py-24 md:py-32    (hero, CTA, key moments — room to breathe)

Inter-element gaps should follow Tailwind scale: gap-2, gap-4, gap-6, gap-8
Never arbitrary: gap-[13px] signals design uncertainty
```

## Visual Depth & Atmosphere

### Background Layers (Not Flat Solids)
```css
/* Subtle gradient — barely visible but adds dimension */
background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);

/* Noise texture overlay — adds tactile warmth */
.section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('/noise.svg');
  opacity: 0.03;
  pointer-events: none;
}

/* Radial glow behind key elements */
.hero-glow {
  background: radial-gradient(ellipse at center, var(--accent-subtle) 0%, transparent 70%);
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  pointer-events: none;
}
```

### Depth Signals
```
Cards/Elevated:   Subtle shadow OR subtle border, never both heavy
Overlapping:      Use z-index + negative margins for intentional overlap
Glassmorphism:    Use sparingly — backdrop-blur on ONE element per page maximum
Gradients:        Subtle (3-5% color shift) for backgrounds, bold for accent moments
Grain/Noise:      2-4% opacity SVG noise overlay adds analog warmth
Grid patterns:    Faint dot-grid or line-grid in backgrounds adds technical feel
```

## Image & Visual Treatment

### Photography Rules
```
No stock photography look — if using photos:
- Consistent color treatment (duotone, desaturated, or brand-tinted overlay)
- Consistent crop style (wide cinematic, tight detail, or overhead)
- Consistent lighting (all natural, all studio, or all moody — never mixed)

For a data/intelligence platform, consider:
- Abstract data visualizations instead of photos
- UI screenshots with careful framing (browser chrome, device mockup)
- Geometric/topographic patterns that suggest "mapping" and "intelligence"
```

### Illustration Style (If Used)
```
Pick ONE style and commit:
- Line illustrations (thin, geometric, monochrome)
- Isometric (technical, structured, dimensional)
- Abstract shapes (gradient blobs, intersecting planes)
- Data-inspired (charts, graphs, network nodes as decorative elements)

Never mix illustration styles across the site.
```

## Premium Design Patterns for SaaS Marketing

### Hero Section
```
The hero is the handshake. It has 3 seconds to establish trust.

Essential elements:
1. Headline: 6-10 words maximum. States the outcome, not the product.
   BAD: "Delve: Consumer Intelligence Platform"
   GOOD: "See What Your Competitors Can't"
   
2. Subheadline: 15-25 words. Explains the mechanism.
   "Real-time consumer intelligence that reveals market gaps, tracks sentiment shifts, and predicts demand before it happens."

3. Primary CTA: One action. High contrast. Clear value.
   "Start Free Analysis" not "Get Started" not "Learn More"

4. Visual proof: Screenshot, animation, or data visualization that SHOWS the product working.

5. Trust strip: Below hero — logos, "Trusted by X companies", or a key metric.
```

### Social Proof Strip
```
Compact. Horizontal. Logos or stats.

Pattern A: Logo bar
  "Trusted by teams at" + 5-8 grayscale logos + subtle horizontal scroll on mobile

Pattern B: Stat bar
  3-4 key metrics in a row: "50K+ Users · 99.9% Uptime · 150+ Countries · 4.9★ Rating"

Pattern C: Testimonial preview
  One powerful quote + name + photo + company. Links to full testimonials section.
```

### Feature Showcase
```
DON'T: 3 cards in a row with icon + heading + paragraph (the most generic pattern in SaaS)

DO one of these instead:
- Bento grid: Mixed-size cards, some tall, some wide, creating visual interest
- Alternating rows: Image left / text right, then flip. Editorial magazine feel.
- Tab/accordion reveal: Show one feature in depth, let user explore others.
- Interactive demo: Simplified product UI that responds to hover/click.
- Large screenshot: With hotspot callouts that expand on click/hover.
```

### Pricing Section
```
If applicable — pricing must feel transparent and simple:
- Maximum 3 tiers (more = decision paralysis)
- Highlight the recommended tier visually (larger, bordered, "Popular" badge)
- Toggle for monthly/annual with savings shown
- Feature comparison: Essential rows only, not 30-item checkmark grids
```

### CTA Section (Pre-Footer)
```
Full-viewport, generous space, one clear message.

Elements:
- Headline that restates the core value prop (not "Ready to get started?")
- One primary CTA button
- Optional: secondary action ("Talk to Sales" or "See Demo")
- Optional: trust reinforcement ("No credit card required · Free 14-day trial")

Background: Can be bolder than other sections (dark, accent-colored, or gradient)
```

## Design Review Checklist

Before shipping any visual change:
```
□ SQUINT TEST: Can you see the hierarchy when you squint at the screen?
□ CONSISTENCY: Does this match the rest of the site's visual language?
□ ONE MEMORABLE THING: What will someone remember about this section?
□ NOT GENERIC: Would this look identical on any other SaaS site? If yes, redesign.
□ MOBILE: Does the composition work on 375px width? (Not just "responsive" — actually good)
□ CONTRAST: Heading/body/muted text are clearly three different levels?
□ ACCENT BUDGET: Is the accent color used in ≤3 places per viewport?
□ BREATHING: Is there at least one section with generous negative space?
```
