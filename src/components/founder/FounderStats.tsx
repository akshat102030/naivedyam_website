'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { FOUNDER } from '@/data/founder';

export function FounderStats() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
      }}
      className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8"
    >
      {FOUNDER.stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="relative"
        >
          {/* Vertical divider between stats (not on the first) */}
          {i > 0 && (
            <div
              aria-hidden
              className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-ink-300/40 to-transparent"
            />
          )}

          <div className="md:pl-6">
            <div className="font-display text-4xl md:text-5xl text-ink-900 leading-none">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                duration={1500 + i * 200}
              />
            </div>
            <div className="mt-2 text-sm text-ink-700">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
