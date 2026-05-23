# Naivedyam Child Development & Rehabilitation Center — Website

A cinematic, emotionally engaging frontend-heavy website for **Naivedyam**, Gwalior.

> **Aesthetic direction:** *Soft Cinematic Healing.* Warm cream base, watercolor pastels (peach, dusty sky, sage, lavender), humanist serif headlines on Fraunces, warm-tinted glassmorphism. Deliberately avoiding the cold blue tech-glass aesthetic that AI tooling defaults to.

---

## Quick preview (no install needed)

The easiest way: **open `index.html` in your browser** — it's a small launcher page that links to all six section previews in one place. Or open any individual preview directly:

- `preview-hero.html` — the Hero + Navbar in isolation
- `preview-founder.html` — Hero + Founder section flowing together
- `preview-services.html` — Services bento with 3D-tilt cards
- `preview-conditions.html` — Conditions with strengths-first cards and modal drill-down
- `preview-progress.html` — Progress Journey: non-linear truth, milestone timeline, growth dimensions
- `preview-testimonials.html` — Testimonials with the featured-story navigator + consent badges

---

## Run the project

### Prerequisites
- Node.js **18.18+** or **20+**
- A package manager: `npm`, `pnpm`, or `yarn`

### One-time setup

```bash
cd naivedyam-website
npm install
npm run dev
```

Then open **http://localhost:3000**.

That's it. Everything else (fonts, design tokens, smooth scroll, Tailwind) is pre-wired.

### Other scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | ESLint check |

---

## What's built right now

This is the **foundation pass**. Everything below is production-grade and immediately usable.

### Foundation
- ✅ Next.js 15 + TypeScript + App Router
- ✅ TailwindCSS with the full **Naivedyam design system** (`tailwind.config.ts`)
- ✅ Brand fonts wired via `next/font/google`: **Fraunces** (serif) + **Plus Jakarta Sans**
- ✅ Global CSS with warm noise overlay, custom scrollbar, focus rings, reduced-motion support
- ✅ Lenis smooth-scroll provider (`SmoothScrollProvider`)
- ✅ Brand constants in one place (`src/lib/constants.ts`) — change `BRAND`, `CONTACT`, `STATS` there and the whole site updates
- ✅ Navigation data centralised in `src/data/navigation.ts`
- ✅ Reusable utility `cn()` for class merging

### UI primitives (`src/components/ui/`)
- ✅ `<Button>` — primary (coral CTA), secondary (warm glass), ghost variants. Three sizes. Hover lift, focus rings, reduced-motion safe.
- ✅ `<GlassCard>` — warm/cool tint variants, optional interactive lift, optional gradient border.
- ✅ `<SectionHeading>` — consistent eyebrow + headline + description pattern with gradient highlight word.

### Built sections
- ✅ **Navbar** — transparent on top, gains warm glass background after 24px scroll. Mobile menu with staggered link reveals.
- ✅ **Hero** — composed of:
  - `HeroBackground` — 4 breathing colour blobs (peach, sky, lavender, sage) + dotted constellation grid + top/bottom vignettes
  - `FloatingElements` — 6 soft floating SVG shapes (stars, hearts, sparkles) with desynced timing so they feel organic
  - Staggered reveal animation (eyebrow → headline → subhead → CTAs → trust strip)
  - Dual CTAs: coral primary + warm glass secondary
  - Trust strip with 3 stats in a single warm glass card
- ✅ **Founder section (Maya Dubey)** — composed of:
  - `FounderPortrait` — arched frame (top-rounded, mosque-niche shape), gradient border (peach→lavender), breathing halo, scroll-linked parallax, illustrated placeholder until real photo is provided
  - `AchievementCards` — 4 glass pills that float around the portrait on desktop, stack neatly on mobile, with desynced float timing
  - `FounderStats` — 4 stat counters that animate from 0 → value when scrolled into view (uses `useCountUp` hook with ease-out cubic curve)
  - Pull-quote in cool-tinted glass card, floats below portrait on desktop, sits inline on mobile
  - Story paragraphs reveal with stagger
- ✅ **Services section** — composed of:
  - `ServiceCard` — individual card with mouse-tracked 3D tilt (capped at 6°), tone-themed gradients, hover state with brightening + sliding "Learn more" arrow
  - `ServiceIcon` — 6 hand-crafted SVG illustrations (ABA = connected nodes, Speech = bubble with sound waves, Sensory = ripples, Physio = walking figure, OT = palm with object, Special Ed = book with rising sun), each with internal motion
  - `ServicesGrid` — responsive bento layout: 1-col mobile, 2-col tablet, 3-col desktop with ABA as 2×2 anchor and Special Ed as full-width foundation card
  - Each card has its own colour soul: ABA=lavender, Speech=coral, Sensory=sage, Physio=sky, OT=peach, Special Ed=cream
- ✅ **Progress Journey** — three honest movements:
  - `NonLinearTruth` — opening visual that contrasts the **imagined straight line** of progress against the **real one** (with plateaus, dips, restarts), both ending at the same height. Earns trust by being honest first. SVG paths reveal on scroll.
  - `MilestoneTimeline` + `MilestoneCard` — vertical timeline of 6 composite milestones ("First sustained eye contact", "Self-initiated play", etc.) alternating left/right around a centre spine that draws itself in warm gradient as you scroll
  - `GrowthDimensions` — 6 small tone-themed cards showing qualitative Then→Now shifts ("Long meltdowns → 5-minute reset"). No percentages, no fake numbers.
  - Closes with a pull-quote from Maya: *"What we're really measuring is the child becoming more themselves."*
- ✅ **Testimonials section** — "Letters, not reviews":
  - `FeaturedStories` — manual navigator (prev/next chevrons + clickable pips + arrow-key support) for cycling through long-form featured "letter cards." **No autoplay** — autoplay-rotation is the carousel sin.
  - `TestimonialCard` — supporting wall cards with tone variants and visible `ConsentBadge`
  - `QuoteMark` — hand-drawn asymmetric quote-mark SVG (the section's signature ornament, deliberately NOT the Lucide icon-set Quote)
  - `ParentPortrait` — silhouette placeholders tinted to match the card's tone; real portraits drop in when families consent
  - `ConsentBadge` — visible badge declaring consent status (placeholder / verbal / written-signed). On every card. The presence of the badge is itself a trust signal.
  - `TrustStrip` — three honest, structural facts (avg. months stayed, referral rate, languages spoken). **NOT** 5-star ratings or "trusted by N parents."
  - Visible consent note baked into the section flow, not buried in a footer
  - **Ethics-aware data structure** in `src/data/testimonials.ts` — every testimonial has explicit `consentStatus`, `displayPolicy`, `childMention` fields. `getPublishableTestimonials()` helper filters to only `written-signed` for production.
- ✅ **Conditions Supported section** — "What we see in them":
  - **Strengths-first framing**, deliberately not deficits-first. Each condition opens with what we genuinely observe in these children's strengths.
  - `ConditionCard` — calm index card (icon, name, subtitle, brief). Clicking opens the modal — the deep content lives there so the index view stays unanxious.
  - `ConditionModal` — full detail view with five structured movements: brief → strengths → lived-experience (from the child's perspective) → how-we-help (cross-linked to Services) → signs-to-notice → small clinical note → CTA.
  - `ConditionIcon` — 6 custom SVG illustrations (Autism = infinity loop with focused dots, ADHD = radiating energy, CP = growing tree, Down Syndrome = layered heart-embrace, LD = unusual-shaped key, Dev Delays = sprouting seed). **No puzzle pieces** — a contested autism symbol.
  - Modal handles focus management, Esc-to-close, click-outside-to-close, body scroll lock, mobile drag handle.
  - Therapy pills inside the modal cross-link back to the Services section.
  - Closes with *"Don't see what you're looking for?"* — explicitly welcoming families with unclear or non-listed diagnoses.

### Page narrative order

The narrative order on `/` was deliberately reordered:

1. **Hero** — emotional promise
2. **Founder** — earned trust
3. **Services** — how we help (the methods)
4. **Conditions** — who we help (the kids)
5. **Progress** — what growth looks like
6. **Testimonials** — what families say

This sequence answers a parent's natural questions in the order they're likely to ask them.

---

## What's next (build in this order)

| # | Section | Notes |
|---|---|---|
| ~~1~~ | ~~Founder (Maya Dubey)~~ | ✅ Built |
| ~~2~~ | ~~Services~~ | ✅ Built |
| ~~3~~ | ~~Progress Journey~~ | ✅ Built |
| ~~4~~ | ~~Testimonials~~ | ✅ Built |
| ~~5~~ | ~~Conditions Supported~~ | ✅ Built |
| 6 | **Assessment CTA + Google Form embed** | Replace `ASSESSMENT_FORM_URL` in `src/lib/constants.ts` once the form is built. |
| 7 | **Footer + Contact** | Map embed, hours, social links. |
| 8 | **Gallery** | Masonry layout with lightbox. Optional — needs center photos. |
| 9 | **Optimisation** | Image WebP/AVIF, animation performance audit, Lighthouse pass. |
| 10 | **Deployment** | Vercel push. |

---

## ⚠️ Important: Before testimonials go to production

All current testimonial content in `src/data/testimonials.ts` is **clearly-marked placeholder copy**. The names use `[bracketed placeholders]`, portraits are silhouettes, and each card displays a "Placeholder" consent badge.

**Before launch:**
1. Collect real testimonials from families who have explicitly agreed to share.
2. Have each family sign a **written consent form** that specifies:
   - Their preferred display name (full / first only / initials / anonymous)
   - Whether their child can be named
   - Whether their child's condition can be mentioned
   - Whether their photo can be used
3. Update each testimonial's `consentStatus` to `'written-signed'`.
4. The `getPublishableTestimonials()` helper in the data file will then include them on the live site.

This protects the center against accidental privacy violations involving minors.

---

## Project structure

```
naivedyam-website/
├── preview-hero.html              ← Hero-only preview (open in browser)
├── preview-founder.html           ← Hero + Founder preview (open in browser)
├── package.json                   ← Dependencies pinned to specific versions
├── next.config.js                 ← Image domains + package optimisation
├── tailwind.config.ts             ← FULL DESIGN SYSTEM lives here
├── tsconfig.json                  ← Path alias: @/* → src/*
├── postcss.config.js
├── .gitignore
│
├── public/                        ← Drop images, videos, logos, fonts here
│   ├── images/
│   │   └── founder/               ← Drop maya-dubey-portrait.jpg here
│   ├── videos/
│   ├── gifs/
│   ├── icons/
│   ├── logos/
│   └── fonts/
│
└── src/
    ├── app/
    │   ├── layout.tsx             ← Fonts, metadata, smooth-scroll wrapper
    │   ├── page.tsx               ← Landing page composition
    │   └── globals.css            ← Base styles, glass utilities, aurora
    │
    ├── components/
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── GlassCard.tsx
    │   │   ├── SectionHeading.tsx
    │   │   └── AnimatedCounter.tsx     ← NEW: count-up component
    │   ├── navbar/
    │   │   └── Navbar.tsx
    │   ├── hero/
    │   │   ├── Hero.tsx
    │   │   ├── HeroBackground.tsx
    │   │   └── FloatingElements.tsx
    │   ├── founder/                    ← NEW: Founder section
    │   │   ├── FounderSection.tsx
    │   │   ├── FounderPortrait.tsx
    │   │   ├── FounderStats.tsx
    │   │   └── AchievementCards.tsx
    │   └── animations/
    │       └── SmoothScrollProvider.tsx
    │
    ├── hooks/
    │   ├── useSmoothScroll.ts
    │   └── useCountUp.ts               ← NEW: count-up hook
    │
    ├── lib/
    │   ├── constants.ts           ← BRAND, CONTACT, STATS — single source of truth
    │   └── utils.ts               ← cn() helper
    │
    └── data/
        ├── navigation.ts
        └── founder.ts                  ← NEW: Maya Dubey's bio, stats, quote
```

---

## Design system reference

### Colors (Tailwind class → use case)

| Token | Purpose |
|---|---|
| `cream-100` | Page background. Warm off-white. Never use `bg-white`. |
| `ink-900` | Body text. Warm near-black with violet undertone. Never use `text-black`. |
| `coral-500` | **Primary CTA**. The only "loud" colour. Use sparingly. |
| `peach-300` | Hero atmosphere, warm accents |
| `sky-300` | Cool accents, cool glass tints |
| `sage-300` | Calm secondary accents |
| `lavender-300` | Atmosphere only — never UI surfaces |

### Typography

- **Headlines** → `font-display` (Fraunces). Use `italic-soul` + `text-gradient-warm` for emphasis words.
- **Body** → `font-sans` (Plus Jakarta Sans, default).
- **Sizes** → `text-hero`, `text-display-1`, `text-display-2` are pre-set for fluid responsive sizing.

### Surface treatments

- `glass-warm` — peach/cream tinted glass. Default.
- `glass-cool` — sky/lavender tinted glass. Use for variety.
- `bg-dawn` — vertical cream → peach → lavender gradient.
- `bg-aurora` — radial watercolor wash.

### Motion

- Use **Framer Motion** for component-level animations (already imported where needed).
- Use the built-in animations: `animate-breathe`, `animate-float-slow`, `animate-drift`, `animate-shimmer`, `animate-reveal`.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-breath`) is the brand's signature curve — used for everything that "settles into place".

### Accessibility

- All animations respect `prefers-reduced-motion`.
- Focus rings are coral on cream offset.
- Mobile menu is keyboard-traversable.

---

## Updating brand info

Edit **only** `src/lib/constants.ts`. The rest of the site reads from there.

```ts
export const CONTACT = {
  phone: '+91 0000000000',       // ← replace
  email: 'hello@naivedyam.in',   // ← replace
  whatsapp: '+910000000000',     // ← replace
  // …
};
```

When the Google Form is ready, update:

```ts
export const ASSESSMENT_FORM_URL = 'https://docs.google.com/forms/...';
```

---

## Asset additions

The site is built to **gracefully accept assets later**. Drop files in:

| Folder | What goes here | Used by |
|---|---|---|
| `public/images/founder/` | Maya Dubey portrait | Founder section (next) |
| `public/images/center/` | Therapy room, sensory room, classroom photos | Gallery section |
| `public/images/testimonials/` | Parent photos (with consent) | Testimonials |
| `public/videos/` | Optional hero video background | Hero (optional upgrade) |
| `public/logos/` | Logo variants, favicon | Navbar, footer, browser tab |

All paths in the codebase already reference these locations — just add the files and the components pick them up.

---

## Deployment (when ready)

```bash
git init
git add .
git commit -m "Initial commit — foundation + hero"
gh repo create naivedyam-website --public --source=.
git push -u origin main
```

Then on [vercel.com](https://vercel.com): **New Project → import the repo → Deploy.** Zero config needed.

---

## Why the design choices

A few decisions worth understanding before extending the codebase:

1. **No pure white, no pure black.** Cream `#FBF7F1` and ink `#2A2438` instead. White on a children's therapy site reads as "hospital"; black reads as "tech product". Warm off-white + warm near-black is what reads as *Pixar*, *Apple Health*, *premium pediatric care*.

2. **Serif headlines.** Fraunces, not Inter. Serifs carry warmth and editorial weight; sans-serifs read as tech-product. Headlines are where the emotional promise lives — they get the serif.

3. **Coral, not blue, as the CTA.** Medical sites default to blue. Blue is calming but also distant. Coral (`#E8927C`) is warm, hopeful, optimistic — the right emotional signal for "book a free assessment".

4. **Glassmorphism, but warm.** The typical Apple/iOS glass is cold blue. Our `glass-warm` has a peach undertone — the difference is small in code but huge in feel.

5. **Breathing motion, not zoomy motion.** Every animation uses `cubic-bezier(0.16, 1, 0.3, 1)` — it settles. No bouncy springs, no aggressive easing.

If you're tempted to add a vibrant gradient or a fast animation, ask whether it fits *Soft Cinematic Healing*. Usually the answer is no.

---

## Need help?

- **Building the next section** → just say "build the founder section" / "build the services section" and we continue from this foundation.
- **Adjusting the aesthetic** → all design tokens live in `tailwind.config.ts` and `src/app/globals.css`. Change them in one place and it propagates.
- **Performance issues** → the heavy lifting (animations, smooth scroll, blob blurs) is the most likely culprit. We'll do a performance pass before deployment.
