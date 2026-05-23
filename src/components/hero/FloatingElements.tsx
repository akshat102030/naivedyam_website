'use client';

import { motion } from 'framer-motion';
import { Star, Heart, Sparkle } from 'lucide-react';

/**
 * Decorative floating SVG elements that drift gently around the hero.
 * Each has a different float duration/offset so they never sync up
 * — keeps the motion feeling organic, not mechanical.
 */

type FloatItem = {
  Icon: React.ElementType;
  className: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
  x: number; // px x-amplitude
  y: number; // px y-amplitude
};

const items: FloatItem[] = [
  { Icon: Star,     className: 'top-[18%] left-[8%]',   size: 22, color: 'text-peach-500',    duration: 8,  delay: 0,   x: 8,  y: 12 },
  { Icon: Sparkle,  className: 'top-[28%] right-[10%]', size: 28, color: 'text-sky-500',      duration: 10, delay: 1.2, x: -10, y: 16 },
  { Icon: Heart,    className: 'top-[60%] left-[6%]',   size: 20, color: 'text-coral-500',    duration: 9,  delay: 0.6, x: 6,   y: 10 },
  { Icon: Star,     className: 'top-[72%] right-[14%]', size: 18, color: 'text-lavender-500',duration: 11, delay: 2,   x: -7,  y: 14 },
  { Icon: Sparkle,  className: 'top-[42%] right-[6%]',  size: 16, color: 'text-sage-500',     duration: 7,  delay: 1.5, x: 5,   y: 8 },
  { Icon: Heart,    className: 'top-[12%] right-[22%]', size: 14, color: 'text-peach-500',    duration: 12, delay: 0.8, x: 4,   y: 6 },
];

export function FloatingElements() {
  return (
    <div className="absolute inset-0 -z-[1] pointer-events-none">
      {items.map(({ Icon, className, size, color, duration, delay, x, y }, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 0.7, 0.5, 0.7],
            scale: 1,
            x: [0, x, -x, 0],
            y: [0, -y, y, 0],
          }}
          transition={{
            opacity: { duration: 2, delay, times: [0, 0.3, 0.7, 1] },
            scale: { duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] },
            x: { duration, delay, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: duration * 0.8, delay, repeat: Infinity, ease: 'easeInOut' },
          }}
          className={`absolute ${className} ${color}`}
          style={{ filter: 'drop-shadow(0 4px 12px rgba(232, 146, 124, 0.25))' }}
        >
          <Icon size={size} strokeWidth={1.5} fill="currentColor" fillOpacity={0.3} />
        </motion.span>
      ))}
    </div>
  );
}
