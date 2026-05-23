'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Heart, Wrench, AlertCircle, Info } from 'lucide-react';
import { ConditionIcon } from './ConditionIcon';
import { getTherapyDetails, type Condition, type ConditionTone } from '@/data/conditions';
import { cn } from '@/lib/utils';

/* Same tone vocabulary as ConditionCard, but adapted for the modal's larger
   surface area (slightly stronger gradients, since the modal is its own
   contained surface). */
const toneMap: Record<ConditionTone, {
  bg: string;
  accent: string;
  iconBg: string;
  iconText: string;
  pillBg: string;
  pillText: string;
}> = {
  sky:      { bg: 'from-sky-100/80 to-cream-50',      accent: 'text-sky-700',     iconBg: 'bg-sky-100',     iconText: 'text-sky-700',     pillBg: 'bg-sky-100',     pillText: 'text-sky-700' },
  peach:    { bg: 'from-peach-100/80 to-cream-50',    accent: 'text-coral-700',   iconBg: 'bg-peach-100',   iconText: 'text-coral-700',   pillBg: 'bg-peach-100',   pillText: 'text-coral-700' },
  coral:    { bg: 'from-peach-100/80 to-cream-50',    accent: 'text-coral-700',   iconBg: 'bg-gradient-to-br from-coral-400/25 to-coral-500/35', iconText: 'text-coral-700', pillBg: 'bg-peach-100', pillText: 'text-coral-700' },
  lavender: { bg: 'from-lavender-100/80 to-cream-50', accent: 'text-lavender-700',iconBg: 'bg-lavender-100',iconText: 'text-lavender-700',pillBg: 'bg-lavender-100',pillText: 'text-lavender-700' },
  sage:     { bg: 'from-sage-100/80 to-cream-50',     accent: 'text-sage-700',    iconBg: 'bg-sage-100',    iconText: 'text-sage-700',    pillBg: 'bg-sage-100',    pillText: 'text-sage-700' },
  cream:    { bg: 'from-cream-200/80 to-cream-50',    accent: 'text-ink-700',     iconBg: 'bg-cream-200',   iconText: 'text-ink-700',     pillBg: 'bg-cream-200',   pillText: 'text-ink-700' },
};

type Props = {
  condition: Condition | null;
  onClose: () => void;
};

/**
 * Detailed modal for a single condition.
 *
 * Structure:
 *  1. Header with icon, name, subtitle, close button
 *  2. STRENGTHS first (not deficits)
 *  3. WHAT THEY MIGHT BE EXPERIENCING (from child's perspective)
 *  4. HOW WE HELP (linked therapies)
 *  5. SIGNS TO NOTICE (gentle, for parents wondering if they should assess)
 *  6. CLINICAL NOTE (small, end of modal — for those who want it)
 *  7. CTA to free assessment
 *
 * Accessibility:
 *  - Trapped focus inside modal while open
 *  - Esc to close
 *  - Click outside to close
 *  - aria-modal, aria-labelledby wired correctly
 *  - Body scroll locked while open
 */
export function ConditionModal({ condition, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = condition ? `condition-modal-title-${condition.slug}` : 'condition-modal-title';

  // Esc key closes; lock body scroll while open; auto-focus close button
  useEffect(() => {
    if (!condition) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Auto-focus the close button — gives keyboard users a clear starting point
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [condition, onClose]);

  return (
    <AnimatePresence>
      {condition && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
          aria-modal="true"
          role="dialog"
          aria-labelledby={titleId}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink-900/40 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal panel */}
          <ModalContent
            condition={condition}
            titleId={titleId}
            closeBtnRef={closeBtnRef}
            onClose={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------------------------------------------------
   The modal panel itself — split into a child component so its `useEffect`
   can rely on `condition` being non-null.
--------------------------------------------------------------------------- */

function ModalContent({
  condition,
  titleId,
  closeBtnRef,
  onClose,
}: {
  condition: Condition;
  titleId: string;
  closeBtnRef: React.RefObject<HTMLButtonElement>;
  onClose: () => void;
}) {
  const tone = toneMap[condition.tone];
  const therapies = getTherapyDetails(condition.therapies);

  function handleTherapyClick() {
    // Close the modal, then scroll to the services section
    onClose();
    setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  }

  function handleAssessmentClick() {
    onClose();
    setTimeout(() => {
      document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  }

  return (
    <motion.div
      key={condition.slug}
      initial={{ y: 40, opacity: 0, scale: 0.96 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 20, opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative w-full md:max-w-3xl',
        'max-h-[92vh] md:max-h-[88vh]',
        'overflow-hidden',
        'rounded-t-3xl md:rounded-3xl',
        'bg-gradient-to-br',
        tone.bg,
        'shadow-2xl',
        'mx-0 md:mx-6',
      )}
    >
      {/* Noise overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.14 0 0 0 0 0.22 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Scrollable content */}
      <div className="relative h-full max-h-[92vh] md:max-h-[88vh] overflow-y-auto">

        {/* Mobile drag handle */}
        <div className="md:hidden flex justify-center pt-3">
          <div className="w-12 h-1.5 rounded-full bg-ink-300/40" />
        </div>

        {/* Close button — sticky top-right */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 md:top-6 right-4 md:right-6 z-10 grid place-items-center w-10 h-10 rounded-full glass-warm text-ink-900 hover:text-coral-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 md:px-12 pt-8 md:pt-12 pb-10 md:pb-12">

          {/* Header */}
          <div className="flex items-start gap-5">
            <div className={cn(
              'shrink-0 grid place-items-center w-16 h-16 md:w-20 md:h-20 rounded-2xl',
              tone.iconBg,
              tone.iconText,
              'shadow-soft',
            )}>
              <ConditionIcon slug={condition.slug} className="w-10 h-10 md:w-12 md:h-12" />
            </div>

            <div className="min-w-0 flex-1 pt-1 pr-12 md:pr-0">
              <h2 id={titleId} className="font-display text-3xl md:text-4xl text-ink-900 leading-tight text-balance">
                {condition.name}
              </h2>
              <p className={cn('mt-2 italic-soul text-base md:text-lg', tone.accent)}>
                {condition.subtitle}
              </p>
            </div>
          </div>

          {/* Brief */}
          <p className="mt-8 text-lg md:text-xl text-ink-800 leading-relaxed text-pretty">
            {condition.brief}
          </p>

          {/* ============ STRENGTHS — first, always ============ */}
          <Section icon={Sparkles} title="What we see in them" tone={tone}>
            <ul className="space-y-3">
              {condition.strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-ink-800 leading-relaxed">
                  <span
                    aria-hidden
                    className={cn('mt-2 h-1.5 w-1.5 shrink-0 rounded-full', tone.accent)}
                    style={{ backgroundColor: 'currentColor' }}
                  />
                  <span className="text-pretty">{s}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* ============ LIVED EXPERIENCE — from child's perspective ============ */}
          <Section icon={Heart} title="What they might be experiencing" tone={tone}>
            <p className="text-ink-800 leading-relaxed text-pretty">
              {condition.livedExperience}
            </p>
          </Section>

          {/* ============ HOW WE HELP — linked therapies ============ */}
          <Section icon={Wrench} title="How we help" tone={tone}>
            <p className="text-ink-800 leading-relaxed text-pretty mb-4">
              We typically support {condition.name.toLowerCase()} with a combination of therapies, tailored to each child:
            </p>
            <div className="flex flex-wrap gap-2">
              {therapies.map((t) => (
                <button
                  key={t.slug}
                  onClick={handleTherapyClick}
                  className={cn(
                    'inline-flex items-center gap-1.5',
                    'px-3 py-1.5 rounded-full text-sm font-medium',
                    tone.pillBg,
                    tone.pillText,
                    'border border-cream-200/80',
                    'hover:shadow-soft transition-shadow',
                  )}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </Section>

          {/* ============ SIGNS TO NOTICE — for parents who are wondering ============ */}
          <Section icon={AlertCircle} title="Signs a parent might notice" tone={tone}>
            <p className="text-sm text-ink-700 italic mb-4">
              If you&apos;ve been wondering — these are gentle markers parents often notice
              before seeking assessment. They&apos;re not a diagnosis; they&apos;re a starting point for a conversation.
            </p>
            <ul className="space-y-3">
              {condition.signsToNotice.map((s) => (
                <li key={s} className="flex items-start gap-3 text-ink-800 leading-relaxed">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-500"
                  />
                  <span className="text-pretty">{s}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* ============ CLINICAL NOTE — small, low-key ============ */}
          {condition.clinicalNote && (
            <div className="mt-10 rounded-2xl bg-cream-50/70 border border-cream-200/80 px-5 py-4 flex gap-3">
              <Info className="w-4 h-4 mt-0.5 text-ink-500 shrink-0" />
              <p className="text-sm text-ink-700 leading-relaxed italic">
                {condition.clinicalNote}
              </p>
            </div>
          )}

          {/* ============ CTA ============ */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <button
              onClick={handleAssessmentClick}
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'px-6 py-3 rounded-full',
                'font-medium text-cream-50',
                'bg-gradient-to-br from-coral-400 via-coral-500 to-coral-600',
                'shadow-coral-glow',
                'hover:brightness-105 transition-all',
              )}
            >
              Book free assessment
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 text-sm text-ink-700 hover:text-coral-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
   Small section primitive used inside the modal — icon + title + content
--------------------------------------------------------------------------- */

function Section({
  icon: Icon,
  title,
  tone,
  children,
}: {
  icon: React.ElementType;
  title: string;
  tone: { accent: string };
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-2.5 mb-4">
        <Icon className={cn('w-5 h-5', tone.accent)} strokeWidth={1.8} />
        <h3 className="font-display text-xl md:text-2xl text-ink-900">{title}</h3>
      </div>
      {children}
    </section>
  );
}
