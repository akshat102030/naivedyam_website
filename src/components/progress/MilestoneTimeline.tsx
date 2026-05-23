'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MilestoneCard } from './MilestoneCard';
import { MILESTONES } from '@/data/progress';

/**
 * The vertical milestone timeline.
 *
 * Composition:
 *  - A center spine (left-anchored on mobile, centred on desktop)
 *  - Milestone cards alternating left/right (desktop) or all right (mobile)
 *  - The spine "draws itself" using a scroll-progress-driven gradient mask
 *  - Each card animates in from its own side as it enters view
 */

export function MilestoneTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress tied to the timeline container — drives the spine fill
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 30%'],
  });

  // The spine fills from 0% to 100% as you scroll through.
  // Implemented as a clipping mask that grows downward.
  const spineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative">

      {/* The spine — vertical line down the middle */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-3 md:left-1/2 md:-translate-x-1/2 w-px"
      >
        {/* Background spine — full length, very faint */}
        <div
          className="absolute inset-0 w-px"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(183, 171, 196, 0.5) 8%, rgba(183, 171, 196, 0.5) 92%, transparent 100%)',
          }}
        />

        {/* Filled spine — scroll-driven, warm gradient */}
        <motion.div
          className="absolute top-0 left-0 w-px origin-top"
          style={{
            height: spineHeight,
            background:
              'linear-gradient(180deg, #E8927C 0%, #F4C2A1 30%, #B19BC9 70%, #A8C5E2 100%)',
            boxShadow: '0 0 8px rgba(232, 146, 124, 0.4)',
          }}
        />
      </div>

      {/* The milestone cards */}
      <div className="space-y-20 md:space-y-28">
        {MILESTONES.map((milestone, i) => (
          <MilestoneCard
            key={milestone.title}
            milestone={milestone}
            side={i % 2 === 0 ? 'left' : 'right'}
            index={i}
          />
        ))}
      </div>

      {/* The "and counting" closer at the bottom of the spine */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-20 md:mt-24 flex justify-center md:justify-center"
      >
        <div className="ml-7 md:ml-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-peach-200 via-cream-100 to-lavender-200 border border-cream-300/60 text-sm text-ink-800">
          <span className="font-display italic text-ink-900">…and the journey continues</span>
        </div>
      </motion.div>
    </div>
  );
}
