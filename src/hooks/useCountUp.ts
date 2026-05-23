'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Smoothly counts a number from 0 to `target` once the ref's element
 * scrolls into view. Uses requestAnimationFrame with an eased curve.
 *
 * @param target  The final number to land on
 * @param options.duration  Total animation time in ms (default 1800)
 * @param options.once      If true, only animates the first time (default true)
 */
export function useCountUp(
  target: number,
  options: { duration?: number; once?: boolean } = {},
) {
  const { duration = 1800, once = true } = options;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: '-80px' });
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || (once && hasRun.current)) return;
    hasRun.current = true;

    // Respect reduced-motion: snap straight to the value.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setValue(target);
      return;
    }

    let raf = 0;
    const start = performance.now();

    // Ease-out cubic — feels like a number settling into place, not racing.
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(target * ease(progress)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, once]);

  return { ref, value };
}
