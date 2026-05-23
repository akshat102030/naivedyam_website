'use client';

import { ShieldCheck, ShieldAlert, AlertCircle } from 'lucide-react';
import type { ConsentStatus } from '@/data/testimonials';
import { cn } from '@/lib/utils';

type Props = {
  status: ConsentStatus;
  className?: string;
};

/**
 * A tiny visible signal showing what level of consent backs each testimonial.
 *
 * - 'written-signed' shows a quiet checkmark (the goal state for production)
 * - 'verbal' shows an amber state (acceptable but should be upgraded)
 * - 'pending' shows a clear "placeholder" label — explicitly NOT to be shipped to production
 *
 * This deliberately appears on placeholder cards in dev so reviewers can never
 * confuse fake testimonials for real ones.
 */
export function ConsentBadge({ status, className }: Props) {
  if (status === 'written-signed') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full',
          'text-[10px] uppercase tracking-[0.15em]',
          'bg-sage-100 text-sage-700 border border-sage-200/80',
          className,
        )}
        title="This family has signed a written consent form."
      >
        <ShieldCheck className="w-3 h-3" strokeWidth={2} />
        Shared with consent
      </span>
    );
  }

  if (status === 'verbal') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full',
          'text-[10px] uppercase tracking-[0.15em]',
          'bg-peach-100 text-coral-700 border border-peach-200/80',
          className,
        )}
        title="This family gave verbal consent. Written consent is being collected."
      >
        <ShieldAlert className="w-3 h-3" strokeWidth={2} />
        Verbal consent
      </span>
    );
  }

  // 'pending' — only visible in dev/preview, never in production
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full',
        'text-[10px] uppercase tracking-[0.15em]',
        'bg-lavender-100 text-lavender-700 border border-lavender-200/80',
        className,
      )}
      title="Placeholder content — not for production. Awaiting real testimonial + written consent."
    >
      <AlertCircle className="w-3 h-3" strokeWidth={2} />
      Placeholder
    </span>
  );
}
