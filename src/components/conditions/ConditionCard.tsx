'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ConditionIcon } from './ConditionIcon';
import type { Condition, ConditionTone } from '@/data/conditions';
import { cn } from '@/lib/utils';

/* ---------------------------------------------------------------------------
   Tone vocabulary — same as Services/Progress/Testimonials so the page reads
   as one design system. Conditions are calmer than Services, so the
   gradients here are lighter.
--------------------------------------------------------------------------- */
const toneMap: Record<ConditionTone, {
  bg: string;
  border: string;
  iconBg: string;
  iconText: string;
  accent: string;
  glow: string;
}> = {
  sky: {
    bg: 'from-sky-100/70 via-cream-100 to-sky-100/30',
    border: 'border-sky-200/60',
    iconBg: 'bg-gradient-to-br from-sky-100 to-sky-200',
    iconText: 'text-sky-700',
    accent: 'text-sky-700',
    glow: 'rgba(122, 165, 204, 0.22)',
  },
  peach: {
    bg: 'from-peach-100/70 via-cream-100 to-peach-100/30',
    border: 'border-peach-200/60',
    iconBg: 'bg-gradient-to-br from-peach-100 to-peach-200',
    iconText: 'text-coral-700',
    accent: 'text-coral-700',
    glow: 'rgba(232, 158, 114, 0.25)',
  },
  coral: {
    bg: 'from-peach-100/70 via-cream-100 to-coral-400/15',
    border: 'border-coral-400/30',
    iconBg: 'bg-gradient-to-br from-coral-400/25 to-coral-500/35',
    iconText: 'text-coral-700',
    accent: 'text-coral-700',
    glow: 'rgba(232, 146, 124, 0.25)',
  },
  lavender: {
    bg: 'from-lavender-100/70 via-cream-100 to-lavender-100/30',
    border: 'border-lavender-200/60',
    iconBg: 'bg-gradient-to-br from-lavender-100 to-lavender-200',
    iconText: 'text-lavender-700',
    accent: 'text-lavender-700',
    glow: 'rgba(177, 155, 201, 0.22)',
  },
  sage: {
    bg: 'from-sage-100/70 via-cream-100 to-sage-100/30',
    border: 'border-sage-200/60',
    iconBg: 'bg-gradient-to-br from-sage-100 to-sage-200',
    iconText: 'text-sage-700',
    accent: 'text-sage-700',
    glow: 'rgba(142, 187, 165, 0.22)',
  },
  cream: {
    bg: 'from-cream-200/80 via-cream-100 to-peach-100/30',
    border: 'border-cream-300/60',
    iconBg: 'bg-gradient-to-br from-cream-200 to-cream-300',
    iconText: 'text-ink-700',
    accent: 'text-ink-700',
    glow: 'rgba(232, 146, 124, 0.18)',
  },
};

type Props = {
  condition: Condition;
  index: number;
  onClick: () => void;
};

export function ConditionCard({ condition, index, onClick }: Props) {
  const tone = toneMap[condition.tone];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.8,
        delay: 0.08 * index,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className={cn(
        'group relative w-full text-left',
        'rounded-3xl p-6 md:p-7',
        'bg-gradient-to-br',
        tone.bg,
        'border',
        tone.border,
        'transition-shadow duration-500',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100',
      )}
      style={{
        // Soft hover shadow using inline style so we can use the tone color
        boxShadow: '0 1px 2px rgba(42, 36, 56, 0.04)',
      }}
      // Apply the lift shadow on hover via inline style
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 1px 2px rgba(42, 36, 56, 0.04), 0 24px 48px -16px ${tone.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(42, 36, 56, 0.04)';
      }}
    >
      {/* Noise overlay for warmth */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl opacity-25 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.14 0 0 0 0 0.22 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col h-full">
        {/* Icon */}
        <div
          className={cn(
            'inline-flex items-center justify-center',
            'w-14 h-14 rounded-2xl mb-5',
            tone.iconBg,
            tone.iconText,
            'shadow-soft',
            'transition-transform duration-500 group-hover:scale-105',
          )}
        >
          <ConditionIcon slug={condition.slug} className="w-8 h-8" />
        </div>

        {/* Name + subtitle */}
        <h3 className="font-display text-2xl text-ink-900 text-balance leading-tight">
          {condition.name}
        </h3>

        <p className={cn(
          'mt-2 italic-soul text-sm md:text-base',
          tone.accent,
        )}>
          {condition.subtitle}
        </p>

        {/* Brief */}
        <p className="mt-4 text-sm md:text-base text-ink-700 leading-relaxed text-pretty">
          {condition.brief}
        </p>

        {/* Spacer */}
        <div className="flex-1 min-h-6" />

        {/* Affordance — visible always, animates on hover */}
        <div className={cn(
          'mt-5 inline-flex items-center gap-1.5 text-sm font-medium',
          tone.accent,
          'transition-transform duration-300 group-hover:translate-x-0.5',
        )}>
          See how we support
          <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
        </div>
      </div>
    </motion.button>
  );
}
