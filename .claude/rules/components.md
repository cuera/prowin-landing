# Component Architecture — Project Rules

## File Naming

```
Components:  PascalCase.tsx     → Hero.tsx, PricingCard.tsx
UI prims:    kebab-case.tsx     → button.tsx, dialog.tsx, avatar.tsx
Utilities:   camelCase.ts       → utils.ts, formatDate.ts
Pages:       page.tsx           → Always page.tsx (Next.js convention)
Layouts:     layout.tsx         → Always layout.tsx
```

## Component Structure

```typescript
// 1. Directive (only if needed)
"use client";

// 2. Imports — grouped with blank lines between groups
import { type FC, useState } from "react";           // React
import Image from "next/image";                        // Next.js
import { motion } from "framer-motion";                // Third-party
import { ArrowRight } from "lucide-react";             // Icons
import { cn } from "@/lib/utils";                      // Internal utils
import { Button } from "@/components/ui/button";       // Internal components

// 3. Types (colocated)
interface HeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

// 4. Component (named export for components, default for pages)
export const Hero: FC<HeroProps> = ({ title, subtitle, className }) => {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* content */}
    </section>
  );
};
```

## Export Rules

```typescript
// ✅ Named exports for components
export const Hero = () => { ... };
export const PricingCard = () => { ... };

// ✅ Default export ONLY for page.tsx and layout.tsx
export default function Page() { ... }
export default function Layout({ children }) { ... }

// ❌ No barrel files (index.ts re-exports) — they break tree-shaking
// ❌ No default exports for components
```

## UI Primitives (src/components/ui/)

Built with Radix UI + CVA. Follow existing patterns:

```typescript
// src/components/ui/button.tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-transparent hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: FC<ButtonProps> = ({ className, variant, size, ...props }) => (
  <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
);
```

**Rules for UI primitives:**
- Always accept `className` prop for override capability
- Always use CVA for variants
- Always wrap Radix with project's design tokens
- Never put business logic in UI primitives
- Keep them under 80 lines each

## Section Components (Marketing Pages)

```typescript
// Pattern for page sections
export const FeaturesSection: FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Description text
          </p>
        </div>
        {/* Section content */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Cards/items */}
        </div>
      </div>
    </section>
  );
};
```

**Marketing section checklist:**
- [ ] Semantic HTML: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- [ ] Consistent container: `max-w-7xl mx-auto px-4 md:px-6`
- [ ] Vertical rhythm: `py-16 md:py-24` between sections
- [ ] Heading hierarchy: one `<h1>` per page, `<h2>` per section, `<h3>` for sub-items
- [ ] All text is real (no Lorem Ipsum in committed code)

## Accessibility Baseline

```typescript
// ✅ Always include on interactive elements
<button aria-label="Close menu">
<a href="/ewaste" aria-current={isActive ? "page" : undefined}>
<dialog aria-labelledby="dialog-title">

// ✅ Images
<Image alt="Descriptive text about the image content" ... />
<Image alt="" role="presentation" ... />  // Only for purely decorative

// ✅ Keyboard navigation
// All interactive elements must be keyboard-reachable (tab order)
// Custom components: add tabIndex, onKeyDown where needed

// ✅ Color contrast
// Minimum 4.5:1 for body text, 3:1 for large text
// Check against project's CSS custom properties

// ❌ Don't remove focus outlines without providing alternatives
// ❌ Don't use color alone to convey information
// ❌ Don't create keyboard traps
```

## Icon Usage

```typescript
// Primary: Lucide React
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

// Secondary: Tabler Icons (when Lucide doesn't have what you need)
import { IconBrandGithub } from "@tabler/icons-react";

// UI-specific: Radix Icons (for Radix component integration)
import { Cross2Icon } from "@radix-ui/react-icons";

// ✅ Always set size explicitly
<ArrowRight className="h-5 w-5" />

// ✅ Decorative icons get aria-hidden
<ArrowRight className="h-5 w-5" aria-hidden="true" />

// ✅ Meaningful icons get aria-label on parent or sr-only text
<button aria-label="Open menu"><Menu className="h-6 w-6" /></button>

// ❌ Never mix icon libraries in a single component
// ❌ Never use raw SVGs when the library has the icon
```
