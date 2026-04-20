/**
 * ============================================================================
 * PROWIN — TYPOGRAPHY SYSTEM (tailwind.config.js)
 * ============================================================================
 *
 * DESIGN PRINCIPLES
 * -----------------
 * 1. Single font family (Inter) — weight range 400–800
 * 2. Semantic token names — what it IS, not where it lives
 * 3. Fluid sizing via clamp() — no per-breakpoint text-[Npx] overrides needed
 * 4. Tight negative tracking on headings, wide positive tracking on labels
 * 5. 4px base grid alignment for all sizes
 *
 * RATIONALIZATION FROM EXISTING PAGES
 * ------------------------------------
 * BEFORE (homepage + Impact at Scale):
 *   • 19 distinct font sizes (10–180px), many differing by 1px
 *   • Inconsistent tracking (-0.02em vs -0.03em on same-tier headings)
 *   • Mix of fixed px and responsive text-[Npx] sm:text-[Npx]
 *
 * AFTER (this config):
 *   • 6 display tiers, 4 heading tiers, 4 body tiers, 3 label tiers,
 *     2 button tiers, 3 stat tiers = 22 semantic tokens
 *   • Consistent tracking per tier
 *   • Fluid clamp() where responsiveness is needed
 *
 * USAGE EXAMPLES
 * --------------
 *   <h2 className="text-display-lg">         → 42px → 56px fluid
 *   <h3 className="text-heading-lg">         → 24px → 28px fluid
 *   <p  className="text-body-md">            → 15px, lh 1.65
 *   <span className="text-label-md uppercase font-mono"> → 11px eyebrow
 *   <span className="text-stat-hero font-mono">         → 88px → 180px
 *
 * ============================================================================
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    /**
     * ──────────────────────────────────────────────────────────────────────
     * FONT FAMILIES
     * ──────────────────────────────────────────────────────────────────────
     * Inter is loaded via Google Fonts (or next/font) at weights 400–800.
     * The mono stack is used for eyebrow labels, stat numbers, step labels.
     * Icons use Material Symbols Rounded (loaded separately).
     */
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'SF Mono',
        'Menlo',
        'Consolas',
        'Liberation Mono',
        'monospace',
      ],
      icons: ['Material Symbols Rounded'],
    },

    extend: {
      /**
       * ────────────────────────────────────────────────────────────────────
       * FONT SIZE — SEMANTIC TOKENS
       * ────────────────────────────────────────────────────────────────────
       *
       * Format: [fontSize, { lineHeight, letterSpacing, fontWeight? }]
       *
       * Each token is named by PURPOSE, not location:
       *   display-*  → section headings (H2), hero statements
       *   heading-*  → card titles, sub-headings (H3)
       *   body-*     → paragraph text, descriptions
       *   label-*    → eyebrow badges, uppercase tags
       *   button-*   → CTA text
       *   stat-*     → numeric data displays
       *   caption-*  → footnotes, timestamps (EXTENDED — new)
       *
       * Fluid tokens use clamp(min, preferred, max):
       *   min       = mobile size (≤ 640px)
       *   preferred = viewport-relative scale
       *   max       = desktop cap
       *
       * ── MAPPING FROM ORIGINAL PAGES ──────────────────────────────────
       *
       * DISPLAY TIER (was: Final CTA 68px, Deploy 52/64, Section 42/56, Story 32/42)
       * → Collapsed into 5 fluid tiers + 1 fixed tier
       *
       * HEADING TIER (was: 20px, 24px, 24/28px, 28px, 28/34px)
       * → Collapsed into 4 tiers
       *
       * BODY TIER (was: 12px, 14px, 15px, 16px, 16/18px)
       * → Collapsed into 4 tiers
       */
      fontSize: {

        // ── DISPLAY (Section Headings / H2 / Hero statements) ──────────

        // Final CTA, big declarative statements
        // Was: 68px extrabold, tracking -2.5px
        'display-2xl': ['68px', {
          lineHeight: '1.05',
          letterSpacing: '-0.035em',
        }],

        // Deploy-tier headings — large emphasis sections
        // Was: 52px/64px semibold
        'display-xl': ['clamp(52px, 5.5vw, 64px)', {
          lineHeight: '1.05',
          letterSpacing: '-0.03em',
        }],

        // Standard section headings (Feature, Platform, Applications, Closed Loop)
        // Was: 42px/56px medium — the most common H2 pattern
        'display-lg': ['clamp(42px, 4.5vw, 56px)', {
          lineHeight: '1.05',
          letterSpacing: '-0.03em',
        }],

        // Closed Loop extended (has lg:68px breakpoint)
        // For sections that scale up further on large screens
        'display-lg-plus': ['clamp(42px, 5vw, 68px)', {
          lineHeight: '1.05',
          letterSpacing: '-0.03em',
        }],

        // Smaller section headings (Story, Resources CTA)
        // Was: 32px/42px
        'display-md': ['clamp(32px, 3.5vw, 42px)', {
          lineHeight: '1.1',
          letterSpacing: '-0.03em',
        }],

        // EXTENDED — for future sub-section headings or modal titles
        'display-sm': ['clamp(26px, 2.8vw, 32px)', {
          lineHeight: '1.15',
          letterSpacing: '-0.02em',
        }],


        // ── HEADING (Card Titles / H3 / Sub-headings) ──────────────────

        // Large card titles (Deploy category, Resources card)
        // Was: 28px/34px
        'heading-xl': ['clamp(28px, 2.8vw, 34px)', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
        }],

        // Medium card titles (Platform feature, Closed Loop card)
        // Was: 24px/28px
        'heading-lg': ['clamp(24px, 2.2vw, 28px)', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
        }],

        // Small card titles (Feature carousel)
        // Was: 20px
        'heading-md': ['20px', {
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
        }],

        // EXTENDED — for sidebar nav, modal sub-titles, list group headers
        'heading-sm': ['18px', {
          lineHeight: '1.35',
          letterSpacing: '-0.01em',
        }],


        // ── BODY (Descriptions / Paragraphs) ───────────────────────────

        // Large body (Closed Loop descriptions)
        // Was: 16px/18px
        'body-lg': ['clamp(16px, 1.3vw, 18px)', {
          lineHeight: '1.6',
        }],

        // Standard body — the default paragraph size
        // Was: 15px (most section descriptions)
        'body-md': ['15px', {
          lineHeight: '1.65',
        }],

        // Compact body (Deploy items, card descriptions)
        // Was: 14px
        'body-sm': ['14px', {
          lineHeight: '1.7',
        }],

        // Smallest body (footer text)
        // Was: 12px
        'body-xs': ['12px', {
          lineHeight: '1.5',
        }],


        // ── LABEL / EYEBROW (Uppercase tags, badges) ───────────────────

        // Pill badges, mono-variant eyebrows
        // Was: 12px medium+mono, tracking 0.18em
        'label-lg': ['12px', {
          lineHeight: '1.4',
          letterSpacing: '0.15em',
        }],

        // Standard eyebrows — the most common label pattern
        // Was: 11px medium, tracking 0.14em
        'label-md': ['11px', {
          lineHeight: '1.4',
          letterSpacing: '0.14em',
        }],

        // Compact labels (header nav category)
        // Was: 10px bold, tracking 0.2em
        'label-sm': ['10px', {
          lineHeight: '1.4',
          letterSpacing: '0.2em',
        }],


        // ── BUTTON / CTA ───────────────────────────────────────────────

        // Standard buttons and CTAs — the majority of actions
        // Was: 14px–15px semibold
        'button-md': ['14px', {
          lineHeight: '1',
          letterSpacing: '0.01em',
        }],

        // Compact header CTA
        // Was: 13px bold uppercase
        'button-sm': ['13px', {
          lineHeight: '1',
          letterSpacing: '0.05em',
        }],

        // EXTENDED — for large landing-page CTAs
        'button-lg': ['16px', {
          lineHeight: '1',
          letterSpacing: '0.01em',
        }],


        // ── STAT / NUMERIC DISPLAY ─────────────────────────────────────

        // Impact hero stat (e.g. "98%", "1.75M" at largest size)
        // Was: 88px/140px/180px
        'stat-hero': ['clamp(88px, 14vw, 180px)', {
          lineHeight: '0.9',
          letterSpacing: '-0.04em',
        }],

        // Impact at Scale card stats
        // Was: 32px/40px bold
        'stat-lg': ['clamp(32px, 3.5vw, 40px)', {
          lineHeight: '1',
          letterSpacing: '-0.02em',
        }],

        // Inline stats and KPI values
        // Was: 30px bold
        'stat-md': ['30px', {
          lineHeight: '1.2',
          letterSpacing: '-0.015em',
        }],

        // EXTENDED — small inline stats, dashboard widgets
        'stat-sm': ['24px', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
        }],


        // ── CAPTION (EXTENDED — new tokens for future pages) ───────────

        // Image captions, timestamps, metadata
        'caption-md': ['13px', {
          lineHeight: '1.5',
        }],

        // Legal text, fine print
        'caption-sm': ['11px', {
          lineHeight: '1.5',
        }],


        // ── HERO (Header-specific — the homepage hero pattern) ─────────

        // Hero main heading
        // Was: 32px/38px medium, tracking -0.8px
        'hero-heading': ['clamp(32px, 3.2vw, 38px)', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
        }],

        // Hero eyebrow
        // Was: 12px bold, tracking 1.2px
        'hero-eyebrow': ['12px', {
          lineHeight: '1',
          letterSpacing: '0.1em',
        }],
      },


      /**
       * ────────────────────────────────────────────────────────────────────
       * LETTER SPACING — named semantic scale
       * ────────────────────────────────────────────────────────────────────
       * Most tracking is baked into fontSize tokens above. These standalone
       * values are for edge cases where you override on a one-off basis.
       */
      letterSpacing: {
        'tightest':  '-0.04em',   // stat-hero, display-2xl
        'tighter':   '-0.03em',   // display headings
        'tight':     '-0.02em',   // card headings
        'snug':      '-0.01em',   // small headings
        'normal':    '0em',
        'wide':      '0.05em',    // button-sm
        'wider':     '0.1em',     // hero-eyebrow
        'widest':    '0.14em',    // standard eyebrow
        'ultrawide': '0.2em',     // nav labels, closed loop labels
      },


      /**
       * ────────────────────────────────────────────────────────────────────
       * LINE HEIGHT — named semantic scale
       * ────────────────────────────────────────────────────────────────────
       */
      lineHeight: {
        'none':       '1',
        'display':    '0.9',      // stat-hero
        'tight':      '1.05',     // display headings
        'snug':       '1.1',      // display-md
        'heading':    '1.2',      // card headings, hero
        'relaxed':    '1.35',     // heading-sm
        'body':       '1.6',      // standard body
        'body-loose': '1.65',     // body-md
        'loose':      '1.7',      // body-sm, applications
        'caption':    '1.5',      // captions, footer, buttons
      },


      /**
       * ────────────────────────────────────────────────────────────────────
       * FONT WEIGHT — map to Inter's available weights
       * ────────────────────────────────────────────────────────────────────
       * Inter ships 100–900; we use 400–800. Named tokens below.
       */
      fontWeight: {
        'light':     '300',      // applications body (light)
        'normal':    '400',      // body text default
        'medium':    '500',      // headings, labels, most display
        'semibold':  '600',      // deploy heading, section CTAs, pill tags, stat desc
        'bold':      '700',      // hero eyebrow, header CTA, story title, stats
        'extrabold': '800',      // final CTA only
      },


      /**
       * ────────────────────────────────────────────────────────────────────
       * TEXT COLORS — semantic tokens
       * ────────────────────────────────────────────────────────────────────
       * Sourced from CSS custom properties in typography.css. This allows
       * runtime theming and single-source-of-truth for color values.
       */
      colors: {
        text: {
          'primary':   'var(--color-text-primary)',     // #FFFFFF — headings
          'secondary': 'var(--color-text-secondary)',   // #94A3B8 — body descriptions
          'tertiary':  'var(--color-text-tertiary)',    // #a1b3b8 — applications body
          'muted':     'var(--color-text-muted)',       // EXTENDED — general muted
          'accent':    'var(--color-text-accent)',      // #34d399 — stat descriptions
          'inverse':   'var(--color-text-inverse)',     // EXTENDED — for light sections

          // Opacity tiers (matching existing white/NN pattern)
          'w80':       'var(--color-text-w80)',         // nav links
          'w70':       'var(--color-text-w70)',         // secondary CTA
          'w60':       'var(--color-text-w60)',         // subtext
          'w50':       'var(--color-text-w50)',         // labels
          'w40':       'var(--color-text-w40)',         // muted labels
          'w30':       'var(--color-text-w30)',         // final CTA desc
          'w25':       'var(--color-text-w25)',         // footer, dimmest

          // Card-specific (from Impact at Scale)
          'stat':      'var(--color-text-stat)',        // #FFFFFF — stat numbers
          'stat-desc': 'var(--color-text-stat-desc)',   // #34d399 — stat descriptions
        },
      },


      /**
       * ────────────────────────────────────────────────────────────────────
       * SPACING — extended for consistent section rhythm
       * ────────────────────────────────────────────────────────────────────
       * EXTENDED tokens for page-level vertical rhythm.
       */
      spacing: {
        'section-sm':  'clamp(48px, 6vw, 72px)',
        'section-md':  'clamp(64px, 8vw, 96px)',
        'section-lg':  'clamp(80px, 10vw, 120px)',
        'section-xl':  'clamp(96px, 12vw, 160px)',
      },
    },
  },

  plugins: [],
};
