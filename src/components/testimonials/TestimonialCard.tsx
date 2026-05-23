'use client';

import { motion } from 'framer-motion';
import { ParentPortrait } from './ParentPortrait';
import { ConsentBadge } from './ConsentBadge';
import { QuoteMark } from './QuoteMark';
import type { Testimonial, ToneVariant } from '@/data/testimonials';
import { cn } from '@/lib/utils';

/* ---------------------------------------------------------------------------
   Tone variants — same vocabulary as the Services / Progress sections so the
   whole page feels visually unified. Lighter weight here because testimonials
   are a "quiet" section.
--------------------------------------------------------------------------- */
const toneMap: Record<ToneVariant, {
  bg: string;
  border: string;
  quote: string;
  accent: string;
}> = {
  peach: {
    bg: 'from-peach-100/70 to-cream-100',
    border: 'border-peach-200/60',
    quote: 'text-coral-500',
    accent: 'text-coral-700',
  },
  sky: {
    bg: 'from-sky-100/70 to-cream-100',
    border: 'border-sky-200/60',
    quote: 'text-sky-500',
    accent: 'text-sky-700',
  },
  sage: {
    bg: 'from-sage-100/70 to-cream-100',
    border: 'border-sage-200/60',
    quote: 'text-sage-500',
    accent: 'text-sage-700',
  },
  lavender: {
    bg: 'from-lavender-100/70 to-cream-100',
    border: 'border-lavender-200/60',
    quote: 'text-lavender-500',
    accent: 'text-lavender-700',
  },
  coral: {
    bg: 'from-peach-100/70 to-cream-100',
    border: 'border-coral-400/40',
    quote: 'text-coral-500',
    accent: 'text-coral-700',
  },
  cream: {
    bg: 'from-cream-200/80 to-cream-100',
    border: 'border-cream-300/60',
    quote: 'text-coral-500',
    accent: 'text-ink-700',
  },
};

type Props = {
  testimonial: Testimonial;
  index: number;
  /** Featured cards get larger type, more breathing room, and the pullout treatment. */
  featured?: boolean;
};

export function TestimonialCard({ testimonial, index, featured = false }: Props) {
  const tone = toneMap[testimonial.tone];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.8,
        delay: 0.07 * index,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className={cn(
        'relative h-full flex flex-col',
        'rounded-3xl',
        featured ? 'p-8 md:p-10' : 'p-6 md:p-7',
        'bg-gradient-to-br',
        tone.bg,
        'border',
        tone.border,
        'transition-shadow duration-500 hover:shadow-lift',
      )}
    >
      {/* Soft noise overlay — keeps the gradient from feeling synthetic */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl opacity-25 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.14 0 0 0 0 0.22 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Quote mark — the visual hook (hand-drawn, not icon-set) */}
      <QuoteMark
        className={cn(
          featured ? 'w-12 h-9 md:w-14 md:h-11' : 'w-10 h-7',
          tone.quote,
        )}
      />

      {/* The pullout — only on featured cards, larger type, gradient-warm accent */}
      {featured && testimonial.pullout && (
        <p
          className={cn(
            'mt-5 font-display italic text-2xl md:text-3xl leading-tight text-balance',
            'text-gradient-warm',
          )}
        >
          {testimonial.pullout}
        </p>
      )}

      {/* The body of the quote */}
      <blockquote
        className={cn(
          'relative z-[1] mt-5 leading-relaxed text-pretty',
          featured ? 'text-lg md:text-xl text-ink-900' : 'text-base text-ink-800',
        )}
      >
        {testimonial.quote}
      </blockquote>

      {/* Spacer pushes attribution to the bottom regardless of quote length */}
      <div className="flex-1 min-h-6" />

      {/* Attribution row */}
      <figcaption className="relative z-[1] mt-6 flex items-center gap-4">
        <ParentPortrait
          src={testimonial.portraitSrc}
          alt={`Portrait of ${testimonial.name}`}
          tone={testimonial.tone}
          size={featured ? 'lg' : 'md'}
        />
        <div className="min-w-0 flex-1">
          <div className={cn(
            'truncate',
            featured ? 'font-display text-xl text-ink-900' : 'font-medium text-ink-900',
          )}>
            {testimonial.name}
          </div>
          <div className="text-sm text-ink-700 truncate">{testimonial.relation}</div>
          {testimonial.therapyTag && (
            <div className={cn('mt-1 text-xs uppercase tracking-[0.1em]', tone.accent)}>
              {testimonial.therapyTag}
            </div>
          )}
        </div>
      </figcaption>

      {/* Consent badge — bottom-right corner */}
      <div className="relative z-[1] mt-4 pt-4 border-t border-ink-300/15 flex items-center justify-end">
        <ConsentBadge status={testimonial.consentStatus} />
      </div>
    </motion.figure>
  );
}
