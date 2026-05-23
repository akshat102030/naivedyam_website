'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ToneVariant } from '@/data/testimonials';

type Props = {
  src: string | null;
  alt: string;
  /** Determines silhouette gradient when no photo is provided */
  tone?: ToneVariant;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
} as const;

/* ---------------------------------------------------------------------------
   Each tone gets a different gentle gradient. The silhouette inside is the
   same — only the wash changes. This way the wall of portraits feels varied
   without ever looking like clip-art.
--------------------------------------------------------------------------- */
const toneGradients: Record<ToneVariant, string> = {
  peach:    'linear-gradient(165deg, #FDF1E8 0%, #F4C2A1 60%, #E89E72 100%)',
  sky:      'linear-gradient(165deg, #EAF2FA 0%, #A8C5E2 60%, #7AA5CC 100%)',
  sage:     'linear-gradient(165deg, #EEF5F0 0%, #B8D8C8 60%, #8EBBA5 100%)',
  lavender: 'linear-gradient(165deg, #F3EFF7 0%, #D4C5E2 60%, #B19BC9 100%)',
  coral:    'linear-gradient(165deg, #FDF1E8 0%, #EFA68F 60%, #E8927C 100%)',
  cream:    'linear-gradient(165deg, #FBF7F1 0%, #F6EEE2 60%, #EFE2CD 100%)',
};

export function ParentPortrait({
  src,
  alt,
  tone = 'peach',
  size = 'md',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden shrink-0',
        'ring-2 ring-cream-50 shadow-soft',
        sizeClasses[size],
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="96px" className="object-cover" />
      ) : (
        <SilhouettePlaceholder gradient={toneGradients[tone]} />
      )}
    </div>
  );
}

/* ---------------------------------------------------------------------------
   The placeholder: a soft head-and-shoulders silhouette on a coloured wash.
   Same family of imagery as the Founder portrait placeholder, but smaller
   and more abstract.
--------------------------------------------------------------------------- */
function SilhouettePlaceholder({ gradient }: { gradient: string }) {
  return (
    <div className="absolute inset-0" style={{ background: gradient }}>
      {/* Backlight halo behind the head */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/4 -translate-x-1/2 w-3/5 aspect-square rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(253, 250, 245, 0.6) 0%, rgba(253, 241, 232, 0.2) 50%, transparent 75%)',
          filter: 'blur(8px)',
        }}
      />
      {/* Silhouette */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="parentSil" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A2438" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#56486A" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        {/* Head */}
        <circle cx="50" cy="40" r="14" fill="url(#parentSil)" />
        {/* Shoulders / body */}
        <path
          d="M 22 100 Q 22 70, 50 60 Q 78 70, 78 100 Z"
          fill="url(#parentSil)"
        />
      </svg>
    </div>
  );
}
