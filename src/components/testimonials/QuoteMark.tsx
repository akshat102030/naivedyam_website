'use client';

import { cn } from '@/lib/utils';

/**
 * A hand-drawn quotation mark.
 *
 * Why not just the Lucide `Quote` icon: the default ` " ` glyph and most icon-set
 * quote marks are too symmetrical, too perfect — they belong on a Yelp review,
 * not on a parent's open-hearted letter.
 *
 * This one is asymmetric, has uneven stroke weight, and slightly varying curls.
 * Used at large sizes (40-80px) on featured testimonial cards.
 */

type Props = {
  /** Tailwind size classes, e.g. "w-10 h-10" */
  className?: string;
  /** Visual treatment */
  variant?: 'solid' | 'outline';
};

export function QuoteMark({ className, variant = 'solid' }: Props) {
  if (variant === 'outline') {
    return (
      <svg
        viewBox="0 0 64 48"
        className={cn('shrink-0', className)}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {/* Left curl */}
        <path d="M 8 32 C 8 22, 14 14, 22 12 M 8 32 Q 8 42, 18 42 Q 26 42, 26 33 Q 26 24, 16 24 Q 8 24, 8 32 Z" />
        {/* Right curl */}
        <path d="M 36 32 C 36 22, 42 14, 50 12 M 36 32 Q 36 42, 46 42 Q 54 42, 54 33 Q 54 24, 44 24 Q 36 24, 36 32 Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 48"
      className={cn('shrink-0', className)}
      fill="currentColor"
      aria-hidden
    >
      {/*
        Two curls, each an asymmetric tear-drop with a small accent stroke.
        The drawing is intentionally slightly irregular — the left curl is a
        touch taller than the right, the tails curve at different angles.
      */}

      {/* Left curl */}
      <path
        d="M 6 32
           C 6 21, 12 13, 22 10
           L 24 14
           C 17 17, 13 22, 13 28
           C 16 25, 22 25, 26 30
           C 30 36, 28 44, 21 45
           C 13 46, 6 41, 6 32 Z"
        opacity="0.92"
      />

      {/* Right curl — slightly smaller, slightly different angle */}
      <path
        d="M 36 32
           C 36 21, 42 14, 51 11
           L 53 15
           C 47 18, 43 23, 43 28
           C 46 25, 51 25, 55 30
           C 58 35, 56 43, 50 44
           C 42 45, 36 40, 36 32 Z"
        opacity="0.88"
      />

      {/* Two small accent dots — like ink-pen splatter, adds humanity */}
      <circle cx="30" cy="14" r="1.2" opacity="0.5" />
      <circle cx="60" cy="16" r="1" opacity="0.4" />
    </svg>
  );
}
