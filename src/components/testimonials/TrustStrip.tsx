'use client';

import { motion } from 'framer-motion';
import { getTrustSignals } from '@/data/testimonials';

/**
 * The trust strip.
 *
 * NOT a 5-star widget. NOT "trusted by 10,000 parents."
 *
 * Instead: three structural facts about how the center works. The presence of
 * these specific (not generic) signals is the trust earn — they describe
 * something nobody would put on a fake testimonial section.
 *
 * Each signal has a `hint` tooltip-style line that explains what it actually
 * means, so visitors can verify the claim's honesty for themselves.
 */
export function TrustStrip() {
  const signals = getTrustSignals();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {signals.map((signal, i) => (
          <motion.div
            key={signal.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.7,
              delay: 0.12 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative rounded-2xl p-5 md:p-6 glass-warm"
          >
            <div className="font-display text-2xl md:text-3xl text-ink-900 leading-tight">
              {signal.headline}
            </div>
            <div className="mt-1 text-sm font-medium text-ink-800">
              {signal.label}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-ink-700 italic">
              {signal.hint}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
