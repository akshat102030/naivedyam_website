'use client';

import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Heart,
  Users,
  Sparkles,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';
import { FOUNDER } from '@/data/founder';

// Icon name (string in data) → actual Lucide component.
// Keeps the data file plain JSON-shaped without React imports.
const iconMap: Record<string, LucideIcon> = {
  Award,
  BookOpen,
  Heart,
  Users,
  Sparkles,
  GraduationCap,
};

/**
 * Desktop: pills are positioned absolutely around the portrait (top-left, mid-right,
 * bottom-left, top-right), each with its own float duration so they desync naturally.
 * Mobile: same pills collapse into a clean vertical stack below the portrait.
 *
 * Pass `mobile` to render the stacked version; the default renders the floating one.
 */

export function AchievementCards({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div className="lg:hidden mt-8 space-y-2 px-2">
        {FOUNDER.achievements.map((a, i) => {
          const Icon = iconMap[a.icon] ?? Sparkles;
          return (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
              className="glass-warm rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <span className="grid place-items-center w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-peach-200 to-peach-300 text-coral-700">
                <Icon className="w-4 h-4" strokeWidth={2} />
              </span>
              <span className="text-sm text-ink-800">{a.label}</span>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // Desktop floating arrangement
  const positions = [
    'top-[8%] -left-[18%]',
    'top-[35%] -right-[24%]',
    'bottom-[28%] -left-[22%]',
    'bottom-[6%] -right-[18%]',
  ];
  const floatDurations = [7, 9, 8, 10];

  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none">
      {FOUNDER.achievements.map((a, i) => {
        const Icon = iconMap[a.icon] ?? Sparkles;
        return (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 + 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute ${positions[i]} pointer-events-auto`}
          >
            <motion.div
              animate={{ y: [0, -8, 0, 6, 0] }}
              transition={{
                duration: floatDurations[i],
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
              className="glass-warm rounded-full pl-2 pr-4 py-2 flex items-center gap-2.5 shadow-glass whitespace-nowrap"
            >
              <span className="grid place-items-center w-8 h-8 rounded-full bg-gradient-to-br from-peach-200 to-peach-300 text-coral-700">
                <Icon className="w-4 h-4" strokeWidth={2} />
              </span>
              <span className="text-sm font-medium text-ink-800">{a.label}</span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
