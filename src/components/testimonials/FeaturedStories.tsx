'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';
import { QuoteMark } from './QuoteMark';
import { ParentPortrait } from './ParentPortrait';
import { ConsentBadge } from './ConsentBadge';
import { cn } from '@/lib/utils';

/* ---------------------------------------------------------------------------
   Tone classes for the featured card — taken from the existing palette.
   Same vocabulary as TestimonialCard so the whole section feels unified.
--------------------------------------------------------------------------- */
const toneBg = {
  peach:    'from-peach-100/80 to-cream-100',
  sky:      'from-sky-100/80 to-cream-100',
  sage:     'from-sage-100/80 to-cream-100',
  lavender: 'from-lavender-100/80 to-cream-100',
  coral:    'from-peach-100/80 to-cream-100',
  cream:    'from-cream-200/80 to-cream-100',
} as const;

const toneAccent = {
  peach:    'text-coral-700',
  sky:      'text-sky-700',
  sage:     'text-sage-700',
  lavender: 'text-lavender-700',
  coral:    'text-coral-700',
  cream:    'text-ink-700',
} as const;

const toneQuote = {
  peach:    'text-coral-500',
  sky:      'text-sky-500',
  sage:     'text-sage-500',
  lavender: 'text-lavender-500',
  coral:    'text-coral-500',
  cream:    'text-coral-500',
} as const;

type Props = {
  featured: Testimonial[];
};

/**
 * Featured story display with manual navigation.
 *
 * IMPORTANT — no autoplay. Parents read at their own pace; autoplay-rotation
 * is the carousel sin that makes testimonials feel like ads.
 *
 * Includes:
 *  - Large "letter card" with quote mark, pullout, body quote, attribution
 *  - Prev/next chevron buttons (keyboard-accessible)
 *  - Index pips below — clickable to jump to a specific story
 */
export function FeaturedStories({ featured }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  if (featured.length === 0) return null;
  const current = featured[index];
  const tone = current.tone;

  function goTo(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + featured.length) % featured.length);
  }

  return (
    <div className="relative max-w-4xl mx-auto">

      {/* The featured "letter" card */}
      <div className="relative">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.figure
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'relative rounded-3xl',
              'p-8 md:p-12',
              'bg-gradient-to-br',
              toneBg[tone],
              'border border-cream-200/80',
              'shadow-soft',
            )}
          >
            {/* Soft noise — same texture treatment as the rest of the site */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-3xl opacity-25 pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.14 0 0 0 0 0.22 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative">
              {/* Big quote-mark ornament */}
              <span className={cn('block', toneQuote[tone], 'opacity-80')}>
                <QuoteMark className="w-12 h-9 md:w-16 md:h-12" />
              </span>

              {/* Pullout — the most quotable phrase, in display serif gradient */}
              {current.pullout && (
                <p className="mt-6 font-display italic text-2xl md:text-4xl leading-[1.1] text-balance text-gradient-warm">
                  {current.pullout}
                </p>
              )}

              {/* Body quote */}
              <blockquote className="mt-6 text-lg md:text-xl leading-relaxed text-ink-900 text-pretty">
                {current.quote}
              </blockquote>

              {/* Attribution row */}
              <figcaption className="mt-8 flex items-center gap-4 flex-wrap">
                <ParentPortrait
                  src={current.portraitSrc}
                  alt={`Portrait of ${current.name}`}
                  tone={current.tone}
                  size="lg"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-display text-xl md:text-2xl text-ink-900">
                    {current.name}
                  </div>
                  <div className="text-sm md:text-base text-ink-700">{current.relation}</div>
                  {current.therapyTag && (
                    <div className={cn('mt-1 text-xs uppercase tracking-[0.15em]', toneAccent[tone])}>
                      {current.therapyTag}
                    </div>
                  )}
                </div>

                <ConsentBadge status={current.consentStatus} />
              </figcaption>
            </div>
          </motion.figure>
        </AnimatePresence>

        {/* Prev / next buttons — pinned to the sides on larger screens, below on mobile */}
        {featured.length > 1 && (
          <>
            <button
              aria-label="Previous story"
              onClick={() => goTo(index - 1)}
              className={cn(
                'absolute top-1/2 -translate-y-1/2',
                'hidden md:grid place-items-center',
                'w-11 h-11 rounded-full',
                'glass-warm text-ink-800',
                'hover:text-coral-700 transition-colors',
                '-left-5 lg:-left-14',
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Next story"
              onClick={() => goTo(index + 1)}
              className={cn(
                'absolute top-1/2 -translate-y-1/2',
                'hidden md:grid place-items-center',
                'w-11 h-11 rounded-full',
                'glass-warm text-ink-800',
                'hover:text-coral-700 transition-colors',
                '-right-5 lg:-right-14',
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Mobile prev/next + pips together */}
      {featured.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            aria-label="Previous story"
            onClick={() => goTo(index - 1)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-full glass-warm text-ink-800"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Pips — index dots, each clickable */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Stories">
            {featured.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to story ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  'transition-all duration-300 rounded-full',
                  i === index
                    ? 'w-8 h-2 bg-gradient-to-r from-coral-500 to-peach-300'
                    : 'w-2 h-2 bg-ink-300/50 hover:bg-ink-300',
                )}
              />
            ))}
          </div>

          <button
            aria-label="Next story"
            onClick={() => goTo(index + 1)}
            className="md:hidden grid place-items-center w-10 h-10 rounded-full glass-warm text-ink-800"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Story counter — tiny, italic, anchors the navigation */}
      {featured.length > 1 && (
        <div className="mt-3 text-center text-sm italic text-ink-500">
          Story {index + 1} of {featured.length}
        </div>
      )}
    </div>
  );
}
