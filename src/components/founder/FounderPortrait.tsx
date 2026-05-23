'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  /** Path to the real portrait. If null, the warm illustration placeholder is used. */
  src?: string | null;
  alt: string;
};

/**
 * The arched portrait frame.
 *
 * Composition:
 *  - An elongated arch (top-rounded rectangle) clips the portrait
 *  - A soft gradient halo blooms behind it, breathing
 *  - The arch has a subtle gradient border (peach → lavender)
 *  - Gentle scroll-linked parallax: portrait drifts up 40px as you scroll past
 *  - Decorative arc inscription floats above ("Founder" curved text)
 */
export function FounderPortrait({ src, alt }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Subtle parallax — the portrait drifts up slightly as you scroll past it.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-md aspect-[3/4]">
      {/* Breathing halo */}
      <motion.div
        aria-hidden
        className="absolute -inset-12 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(244, 194, 161, 0.55) 0%, rgba(212, 197, 226, 0.3) 50%, transparent 75%)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* The arch — top-rounded full at the top, soft rounded corners at the bottom */}
      <motion.div
        style={{ y }}
        className="relative w-full h-full overflow-hidden"
      >
        {/* Gradient border, masked to outline only */}
        <div
          aria-hidden
          className="absolute inset-0 p-[2px]"
          style={{
            borderRadius: '50% 50% 24px 24px / 30% 30% 24px 24px',
            background:
              'linear-gradient(160deg, rgba(232, 146, 124, 0.7) 0%, rgba(244, 194, 161, 0.4) 30%, rgba(212, 197, 226, 0.5) 70%, rgba(168, 197, 226, 0.6) 100%)',
          }}
        >
          <div
            className="w-full h-full bg-cream-100"
            style={{ borderRadius: '50% 50% 22px 22px / 30% 30% 22px 22px' }}
          />
        </div>

        {/* The portrait itself (or placeholder) */}
        <div
          className="absolute inset-[6px] overflow-hidden shadow-lift"
          style={{ borderRadius: '50% 50% 18px 18px / 30% 30% 18px 18px' }}
        >
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 80vw, 400px"
              className="object-cover"
              priority={false}
            />
          ) : (
            <PortraitPlaceholder />
          )}

          {/* Subtle inner glow vignette */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(42, 36, 56, 0.25) 0%, transparent 60%)',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   Warm illustrated placeholder — abstract head-and-shoulders silhouette in
   brand colours. Replaced automatically when `portraitSrc` is provided.
---------------------------------------------------------------------------- */

function PortraitPlaceholder() {
  return (
    <div className="absolute inset-0">
      {/* Soft gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(165deg, #FDF1E8 0%, #F4C2A1 45%, #E89E72 80%, #C97A4F 100%)',
        }}
      />

      {/* Sun / halo behind the silhouette */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[60%] aspect-square rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(253, 250, 245, 0.7) 0%, rgba(253, 241, 232, 0.3) 50%, transparent 75%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Stylised silhouette */}
      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 w-full h-full"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="silGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A2438" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#56486A" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="cheekGlow" cx="50%" cy="35%" r="40%">
            <stop offset="0%" stopColor="#F4C2A1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F4C2A1" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Hair / head silhouette - soft, warm, drawn with care */}
        <path
          d="M 60 240 Q 50 140 100 95 Q 130 65 150 65 Q 170 65 200 95 Q 250 140 240 240 L 240 280 Q 220 250 200 250 L 100 250 Q 80 250 60 280 Z"
          fill="url(#silGrad)"
        />

        {/* Neck */}
        <path
          d="M 125 235 Q 125 270 110 285 L 190 285 Q 175 270 175 235 Z"
          fill="url(#silGrad)"
          opacity="0.95"
        />

        {/* Shoulders / shawl — suggests a dupatta */}
        <path
          d="M 30 400 Q 30 320 100 290 L 200 290 Q 270 320 270 400 Z"
          fill="url(#silGrad)"
        />

        {/* Soft cheek glow */}
        <circle cx="150" cy="160" r="80" fill="url(#cheekGlow)" />
      </svg>

      {/* "Portrait awaiting" tag — only visible in dev, very subtle */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cream-50/70 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase text-ink-700 border border-cream-200/60">
        Portrait pending
      </div>
    </div>
  );
}
