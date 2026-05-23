'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ProgressIcon } from './ProgressIcon';
import { GROWTH_DIMENSIONS } from '@/data/progress';
import { cn } from '@/lib/utils';

/* ---------------------------------------------------------------------------
   Tone map — same vocabulary as ServiceCard but lighter weight
   (these cards are smaller and shouldn't dominate).
--------------------------------------------------------------------------- */
const toneMap = {
  sky: {
    bg: 'from-sky-100/70 to-cream-100',
    iconBg: 'bg-sky-100',
    iconText: 'text-sky-700',
    accent: 'text-sky-700',
  },
  peach: {
    bg: 'from-peach-100/80 to-cream-100',
    iconBg: 'bg-peach-100',
    iconText: 'text-coral-700',
    accent: 'text-coral-700',
  },
  coral: {
    bg: 'from-peach-100/70 to-cream-100',
    iconBg: 'bg-gradient-to-br from-coral-400/25 to-coral-500/35',
    iconText: 'text-coral-700',
    accent: 'text-coral-700',
  },
  lavender: {
    bg: 'from-lavender-100/70 to-cream-100',
    iconBg: 'bg-lavender-100',
    iconText: 'text-lavender-700',
    accent: 'text-lavender-700',
  },
  sage: {
    bg: 'from-sage-100/70 to-cream-100',
    iconBg: 'bg-sage-100',
    iconText: 'text-sage-700',
    accent: 'text-sage-700',
  },
  cream: {
    bg: 'from-cream-200/80 to-cream-100',
    iconBg: 'bg-cream-200',
    iconText: 'text-ink-700',
    accent: 'text-ink-700',
  },
} as const;

export function GrowthDimensions() {
  return (
    <div>
      {/* Section sub-heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="inline-block text-xs uppercase tracking-[0.25em] text-coral-700 font-medium">
          What we measure
        </span>
        <h3 className="mt-3 font-display text-display-2 text-ink-900 text-balance">
          Six dimensions of growth
        </h3>
        <p className="mt-4 text-ink-700 leading-relaxed text-pretty">
          Not percentages. Not point scores. Real, qualitative shifts in how a child
          meets the world.
        </p>
      </motion.div>

      {/* Grid of dimensions */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GROWTH_DIMENSIONS.map((dim, i) => {
          const tone = toneMap[dim.tone];
          return (
            <motion.div
              key={dim.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: 0.08 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                'relative rounded-2xl p-5 md:p-6',
                'bg-gradient-to-br',
                tone.bg,
                'border border-cream-200/80',
                'transition-shadow duration-500 hover:shadow-soft',
              )}
            >
              {/* Header — icon + dimension name */}
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    'grid place-items-center w-10 h-10 rounded-xl shrink-0',
                    tone.iconBg,
                    tone.iconText,
                  )}
                >
                  <ProgressIcon slug={dim.icon} className="w-5 h-5" />
                </span>
                <h4 className="font-medium text-ink-900">{dim.name}</h4>
              </div>

              {/* Then → Now shift */}
              <div className="mt-5 flex items-center gap-3 text-sm">
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-0.5">Then</div>
                  <div className="text-ink-800 line-through decoration-ink-300/60 decoration-1 truncate">
                    {dim.then}
                  </div>
                </div>

                <ArrowRight className={cn('w-4 h-4 shrink-0', tone.accent)} strokeWidth={2} />

                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-0.5">Now</div>
                  <div className={cn('font-display italic font-medium truncate', tone.accent)}>
                    {dim.now}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
