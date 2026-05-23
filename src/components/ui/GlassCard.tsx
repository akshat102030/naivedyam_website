'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Warm peach-tinted glass (default) vs cool sky-tinted glass */
  tint?: 'warm' | 'cool';
  /** Adds a soft hover lift */
  interactive?: boolean;
  /** Adds a gradient border accent */
  bordered?: boolean;
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, tint = 'warm', interactive = false, bordered = false, children, ...props }, ref) => {
    const base = tint === 'warm' ? 'glass-warm' : 'glass-cool';

    return (
      <div
        ref={ref}
        className={cn(
          base,
          'rounded-3xl p-6 md:p-8',
          'transition-all duration-500 ease-out',
          interactive && 'hover:-translate-y-1 hover:shadow-lift cursor-pointer',
          bordered && 'relative',
          className,
        )}
        {...props}
      >
        {bordered && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl p-px"
            style={{
              background:
                'linear-gradient(135deg, rgba(232, 146, 124, 0.5), rgba(168, 197, 226, 0.3) 50%, rgba(212, 197, 226, 0.4))',
              WebkitMask:
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
        )}
        {children}
      </div>
    );
  },
);

GlassCard.displayName = 'GlassCard';
