'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Initialises Lenis smooth scroll once on mount.
 * Call this in the root layout's client wrapper.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Honour OS-level reduce-motion preference
      autoRaf: true,
    });

    // Handle reduced motion gracefully
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      lenis.destroy();
      return;
    }

    return () => {
      lenis.destroy();
    };
  }, []);
}
