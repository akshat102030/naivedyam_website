'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  /** The italic word(s) within the title that get the warm gradient */
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  className,
}: Props) {
  // Split title around the highlight so we can style it differently
  const parts = highlight && title.includes(highlight)
    ? title.split(highlight)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-block mb-4 text-xs uppercase tracking-[0.2em] text-coral-700 font-medium">
          {eyebrow}
        </span>
      )}

      <h2 className="text-display-1 text-balance">
        {parts ? (
          <>
            {parts[0]}
            <span className="italic-soul text-gradient-warm">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="mt-5 text-lg md:text-xl text-ink-700 leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  );
}
