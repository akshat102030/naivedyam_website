'use client';

import { motion } from 'framer-motion';

/**
 * The atmospheric background for the hero.
 *
 * Composed of:
 *  1. Dawn gradient base (warm bottom-to-top wash)
 *  2. Three breathing blobs of colour (peach, sky, lavender)
 *  3. A faint dotted constellation grid
 *  4. A soft top-down vignette to anchor the navbar
 *
 * No images required — entirely CSS / SVG. The user can later add a
 * video at `/public/videos/hero-background.mp4` and replace this if desired.
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-dawn">
      {/* Breathing colour blobs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
        className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(244, 194, 161, 0.7), transparent 70%)',
        }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute top-1/4 -right-32 w-[55vw] h-[55vw] rounded-full blur-3xl animate-breathe"
        style={{
          background:
            'radial-gradient(circle, rgba(168, 197, 226, 0.65), transparent 70%)',
          animationDelay: '-3s',
        }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute bottom-0 left-1/3 w-[50vw] h-[50vw] rounded-full blur-3xl animate-breathe"
        style={{
          background:
            'radial-gradient(circle, rgba(212, 197, 226, 0.6), transparent 70%)',
          animationDelay: '-6s',
        }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2, delay: 0.6 }}
        className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] rounded-full blur-3xl animate-breathe"
        style={{
          background:
            'radial-gradient(circle, rgba(184, 216, 200, 0.5), transparent 70%)',
          animationDelay: '-9s',
        }}
      />

      {/* Constellation grid — subtle dotted pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(42, 36, 56, 0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)',
        }}
      />

      {/* Top vignette — anchors the navbar visually */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background:
            'linear-gradient(180deg, rgba(251, 247, 241, 0.6) 0%, transparent 100%)',
        }}
      />

      {/* Bottom fade — smooths the transition into the next section */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(251, 247, 241, 1) 100%)',
        }}
      />
    </div>
  );
}
