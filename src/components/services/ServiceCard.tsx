'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import type { Service, ServiceTone } from '@/data/services';
import { cn } from '@/lib/utils';

/* ---------------------------------------------------------------------------
   Tone map — each service has a colour soul that tints its card.
   These are intentionally subtle: the cards should still feel cohesive
   as a family. Tone differentiates them without shouting.
--------------------------------------------------------------------------- */
const toneMap: Record<ServiceTone, {
  gradient: string;        // The card's background gradient
  gradientHover: string;   // Brighter on hover
  iconBg: string;          // Background behind the icon
  iconColor: string;       // Stroke color for the SVG illustration
  border: string;          // Top accent border
  glow: string;            // Hover shadow color
}> = {
  sky: {
    gradient: 'from-sky-100/80 via-cream-100 to-sky-200/40',
    gradientHover: 'from-sky-200/90 via-cream-50 to-sky-100/60',
    iconBg: 'bg-gradient-to-br from-sky-100 to-sky-200',
    iconColor: 'text-sky-700',
    border: 'from-sky-300/0 via-sky-500/60 to-sky-300/0',
    glow: 'rgba(122, 165, 204, 0.25)',
  },
  peach: {
    gradient: 'from-peach-100/80 via-cream-100 to-peach-200/40',
    gradientHover: 'from-peach-200/90 via-cream-50 to-peach-100/60',
    iconBg: 'bg-gradient-to-br from-peach-100 to-peach-200',
    iconColor: 'text-coral-700',
    border: 'from-peach-300/0 via-peach-500/60 to-peach-300/0',
    glow: 'rgba(232, 158, 114, 0.3)',
  },
  coral: {
    gradient: 'from-peach-100/80 via-cream-100 to-coral-400/20',
    gradientHover: 'from-peach-200/90 via-cream-50 to-coral-400/30',
    iconBg: 'bg-gradient-to-br from-coral-400/30 to-coral-500/40',
    iconColor: 'text-coral-700',
    border: 'from-coral-400/0 via-coral-500/60 to-coral-400/0',
    glow: 'rgba(232, 146, 124, 0.3)',
  },
  lavender: {
    gradient: 'from-lavender-100/80 via-cream-100 to-lavender-200/40',
    gradientHover: 'from-lavender-200/90 via-cream-50 to-lavender-100/60',
    iconBg: 'bg-gradient-to-br from-lavender-100 to-lavender-200',
    iconColor: 'text-lavender-700',
    border: 'from-lavender-300/0 via-lavender-500/60 to-lavender-300/0',
    glow: 'rgba(177, 155, 201, 0.28)',
  },
  sage: {
    gradient: 'from-sage-100/80 via-cream-100 to-sage-200/40',
    gradientHover: 'from-sage-200/90 via-cream-50 to-sage-100/60',
    iconBg: 'bg-gradient-to-br from-sage-100 to-sage-200',
    iconColor: 'text-sage-700',
    border: 'from-sage-300/0 via-sage-500/60 to-sage-300/0',
    glow: 'rgba(142, 187, 165, 0.28)',
  },
  cream: {
    gradient: 'from-cream-200/80 via-cream-100 to-peach-100/40',
    gradientHover: 'from-cream-300/80 via-cream-50 to-peach-100/60',
    iconBg: 'bg-gradient-to-br from-cream-200 to-cream-300',
    iconColor: 'text-ink-700',
    border: 'from-cream-300/0 via-peach-300/60 to-cream-300/0',
    glow: 'rgba(232, 146, 124, 0.2)',
  },
};

/* ---------------------------------------------------------------------------
   Bento grid sizing — controlled by `featured`:
     - mobile: all cards 1 col
     - md (tablet): all cards 1 col in a 2-col grid; `wide` spans both
     - lg (desktop): bento — `large` is a 2×2 anchor, `wide` spans full width
--------------------------------------------------------------------------- */
const featureClasses = {
  large: 'lg:col-span-2 lg:row-span-2', // ABA — the visual anchor
  wide:  'md:col-span-2 lg:col-span-3', // Special Ed — full-width foundation
  null:  '',
} as const;

type Props = {
  service: Service;
  index: number; // For staggered entrance animation
};

export function ServiceCard({ service, index }: Props) {
  const tone = toneMap[service.tone];
  const sizeClass = featureClasses[service.featured ?? 'null'];
  const isLarge = service.featured === 'large';

  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse-tracked tilt — subtle, capped at 6 degrees
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the values so the tilt doesn't jitter
  const smoothX = useSpring(mouseX, { stiffness: 220, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 220, damping: 22 });

  // Convert mouse position (-1 → 1) into rotation degrees
  const rotateY = useTransform(smoothX, [-1, 1], [-6, 6]);
  const rotateX = useTransform(smoothY, [-1, 1], [4, -4]);

  // The icon parallax — moves opposite to the tilt for depth
  const iconX = useTransform(smoothX, [-1, 1], [-6, 6]);
  const iconY = useTransform(smoothY, [-1, 1], [-4, 4]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 2);
    mouseY.set(y * 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.8,
        delay: 0.08 * index,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'relative group',
        'rounded-3xl p-6 md:p-7',
        'border border-cream-200/80',
        'bg-gradient-to-br',
        tone.gradient,
        'transition-shadow duration-500',
        'cursor-default',
        sizeClass,
        // Hover lift via box-shadow only — preserves tilt transform
      )}
    >
      {/* Hover shadow — applied via inline style so we can use the tone color */}
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 rounded-3xl pointer-events-none',
          'transition-opacity duration-500',
          isHovered ? 'opacity-100' : 'opacity-0',
        )}
        style={{
          boxShadow: `0 30px 60px -20px ${tone.glow}, 0 1px 0 rgba(255,255,255,0.6) inset`,
        }}
      />

      {/* Top gradient accent border */}
      <div
        aria-hidden
        className={cn(
          'absolute top-0 left-6 right-6 h-px',
          'bg-gradient-to-r',
          tone.border,
        )}
      />

      {/* Inner noise overlay for warmth */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.14 0 0 0 0 0.22 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content — translateZ for that subtle 3D-layered feel */}
      <div
        className="relative flex flex-col h-full"
        style={{ transform: 'translateZ(20px)' }}
      >
        {/* Icon */}
        <motion.div
          style={{ x: iconX, y: iconY }}
          className={cn(
            'inline-flex items-center justify-center',
            isLarge ? 'w-20 h-20' : 'w-14 h-14',
            'rounded-2xl mb-5',
            tone.iconBg,
            'shadow-soft',
          )}
        >
          <ServiceIcon
            slug={service.slug}
            className={cn(
              isLarge ? 'w-12 h-12' : 'w-8 h-8',
              tone.iconColor,
            )}
          />
        </motion.div>

        {/* Service name + tagline */}
        <h3 className={cn(
          'font-display text-ink-900 text-balance',
          isLarge ? 'text-3xl md:text-4xl' : 'text-2xl',
        )}>
          {service.name}
        </h3>

        <p className={cn(
          'mt-2 italic-soul text-ink-700',
          isLarge ? 'text-lg' : 'text-base',
        )}>
          {service.tagline}
        </p>

        {/* Description — only shown on the larger cards by default */}
        {(isLarge || service.featured === 'wide') && (
          <p className="mt-4 text-ink-700 leading-relaxed max-w-md text-pretty">
            {service.description}
          </p>
        )}

        {/* "Helps with" pills */}
        <div className="mt-5 flex flex-wrap gap-2 max-w-md">
          {service.helps.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-ink-800 bg-cream-50/70 border border-cream-200/80 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Spacer to push CTA to bottom */}
        <div className="flex-1" />

        {/* Learn more — only visible on hover. Slides in from the left. */}
        <motion.div
          aria-hidden
          initial={false}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'mt-6 inline-flex items-center gap-1.5 text-sm font-medium',
            tone.iconColor,
          )}
        >
          Learn more
          <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
        </motion.div>
      </div>
    </motion.div>
  );
}
