'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
};

const variantClasses: Record<Variant, string> = {
  // The hero CTA — coral with soft glow, breathing on hover
  primary: [
    'bg-gradient-to-br from-coral-400 via-coral-500 to-coral-600',
    'text-cream-50',
    'shadow-coral-glow',
    'hover:shadow-[0_12px_40px_-8px_rgba(232,146,124,0.55)]',
    'hover:brightness-105',
  ].join(' '),

  // Warm glass — secondary CTA, sits beside primary
  secondary: [
    'glass-warm',
    'text-ink-900',
    'hover:shadow-lift',
  ].join(' '),

  // Bare link-like button for nav and inline use
  ghost: [
    'bg-transparent',
    'text-ink-800',
    'hover:text-coral-600',
    'hover:bg-cream-200/50',
  ].join(' '),
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-full',
  md: 'px-6 py-3 text-base rounded-full',
  lg: 'px-8 py-4 text-base md:text-lg rounded-full',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'font-medium tracking-wide',
          'transition-[box-shadow,filter,background] duration-300',
          'focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100',
          'disabled:opacity-50 disabled:pointer-events-none',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';
