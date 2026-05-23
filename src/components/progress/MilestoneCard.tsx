'use client';

import { motion } from 'framer-motion';
import { ProgressIcon } from './ProgressIcon';
import type { Milestone } from '@/data/progress';
import { cn } from '@/lib/utils';

type Props = {
  milestone: Milestone;
  side: 'left' | 'right';
  index: number;
};

export function MilestoneCard({ milestone, side, index }: Props) {
  const isLeft = side === 'left';

  return (
    <div className="relative">
      {/* The dot on the spine — the milestone "marker" */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center justify-center"
      >
        <span className="relative grid place-items-center w-10 h-10 rounded-full bg-cream-50 border-2 border-coral-500 shadow-coral-glow">
          {/* Inner pulsing core */}
          <motion.span
            className="absolute inset-1 rounded-full bg-gradient-to-br from-peach-300 to-coral-500"
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
          />
          <span className="relative z-10 text-coral-700">
            <ProgressIcon slug={milestone.icon} className="w-4 h-4" />
          </span>
        </span>
      </motion.div>

      {/* Mobile dot — sits on the left spine */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="md:hidden absolute left-3 top-6 z-10 grid place-items-center w-7 h-7 rounded-full bg-cream-50 border-2 border-coral-500"
      >
        <span className="text-coral-700">
          <ProgressIcon slug={milestone.icon} className="w-3.5 h-3.5" />
        </span>
      </motion.div>

      {/* The card itself */}
      <div className={cn(
        // Mobile: card sits to the right of the spine
        'pl-14 md:pl-0',
        // Desktop: card sits on left or right of the centre spine
        'md:grid md:grid-cols-2 md:gap-12 items-start',
      )}>
        {/* Left side: empty on right-aligned cards, populated on left-aligned */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'md:col-start-1',
            !isLeft && 'md:col-start-2',
            isLeft ? 'md:text-right md:pr-4' : 'md:text-left md:pl-4',
          )}
        >
          {/* Week label */}
          <span className={cn(
            'inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-[0.15em]',
            'bg-peach-100 text-coral-700',
          )}>
            {milestone.when}
          </span>

          {/* The milestone */}
          <h4 className="mt-3 font-display text-2xl md:text-3xl text-ink-900 text-balance">
            {milestone.title}
          </h4>

          {/* Context */}
          <p className="mt-3 text-ink-700 leading-relaxed text-pretty max-w-md md:max-w-none">
            {milestone.context}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
