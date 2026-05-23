'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TRUTH_COPY } from '@/data/progress';

/**
 * Two paths drawn on the same SVG canvas:
 *  1. The IMAGINED line — straight, faded, dashed. The way people think progress goes.
 *  2. The REAL line — wavy, with dips, plateaus, restarts. Ends at the same height.
 *
 * Both lines reveal themselves on scroll using strokeDashoffset animation.
 * The visual contrast IS the argument.
 */

export function NonLinearTruth() {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 20%'],
  });

  // Map scroll progress to the dasharray reveal (0 = hidden, 1 = fully drawn)
  // Path lengths approximated below; the visual works even if not exact since
  // dasharray is generous.
  const imaginedDraw = useTransform(scrollYProgress, [0.1, 0.5], [600, 0]);
  const realDraw = useTransform(scrollYProgress, [0.2, 0.85], [1000, 0]);

  // The "today" dot appears once the line completes
  const dotOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  // Annotations fade in once the line has drawn past the plateau/restart points
  const annotationOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 0.8]);

  return (
    <div ref={ref} className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-block text-xs uppercase tracking-[0.25em] text-coral-700 font-medium">
          The honest part
        </span>
        <h3 className="mt-4 font-display text-display-2 text-ink-900 text-balance">
          {TRUTH_COPY.heading}
        </h3>
        <p className="mt-5 text-lg text-ink-700 leading-relaxed text-pretty">
          {TRUTH_COPY.body}
        </p>
      </motion.div>

      {/* The visual — two paths on one canvas */}
      <div className="relative w-full aspect-[5/3]">
        <svg
          viewBox="0 0 500 300"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="realLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#E89E72" />
              <stop offset="50%"  stopColor="#E8927C" />
              <stop offset="100%" stopColor="#B19BC9" />
            </linearGradient>
            <radialGradient id="todayDotGlow">
              <stop offset="0%"  stopColor="#E8927C" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#E8927C" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Axis ground line — very faint */}
          <line
            x1="40" y1="260" x2="480" y2="260"
            stroke="#B7ABC4" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.4"
          />

          {/* "Start" label */}
          <text x="40" y="285" fontSize="11" fill="#857399" fontFamily="Plus Jakarta Sans" letterSpacing="0.15em">
            BEGIN
          </text>
          <text x="425" y="285" fontSize="11" fill="#857399" fontFamily="Plus Jakarta Sans" letterSpacing="0.15em">
            TODAY
          </text>

          {/* The IMAGINED straight line — what people expect */}
          <motion.path
            d="M 50 240 L 460 50"
            fill="none"
            stroke="#B7ABC4"
            strokeWidth="1.5"
            strokeDasharray="600"
            style={{ strokeDashoffset: imaginedDraw }}
            opacity="0.45"
          />
          <text x="270" y="135" fontSize="11" fill="#857399" fontFamily="Plus Jakarta Sans" fontStyle="italic" opacity="0.7" textAnchor="middle">
            what we imagine
          </text>

          {/*
            The REAL line — hand-drawn quality, full of life.
            Notable features:
              - Starts low at week 0
              - Quick early gains (steep climb in first third)
              - A PLATEAU mid-journey (flat segment around x=200-260)
              - A small DIP (a regression — week 12)
              - Then a recovery and steady climb
              - Lands at the SAME HEIGHT as the imagined line
            This drawing makes a hard truth gentle.
          */}
          <motion.path
            d="M 50 240
               Q 80 235, 100 215
               C 120 195, 140 175, 165 185
               Q 200 195, 230 190
               L 260 192
               C 280 195, 290 215, 305 205
               Q 325 180, 350 155
               C 380 115, 420 80, 460 50"
            fill="none"
            stroke="url(#realLineGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1000"
            style={{ strokeDashoffset: realDraw }}
          />

          {/* "Today" dot at the end */}
          <motion.g style={{ opacity: dotOpacity }}>
            <circle cx="460" cy="50" r="18" fill="url(#todayDotGlow)" />
            <circle cx="460" cy="50" r="5" fill="#E8927C" />
            <circle cx="460" cy="50" r="2" fill="#FDFAF5" />
          </motion.g>

          {/* Small annotations along the real line — fade in mid-draw */}
          <motion.g style={{ opacity: annotationOpacity }}>
            {/* Plateau marker */}
            <line x1="245" y1="200" x2="245" y2="215" stroke="#857399" strokeWidth="0.8" opacity="0.4" />
            <text x="245" y="232" fontSize="10" fill="#857399" fontFamily="Plus Jakarta Sans" fontStyle="italic" textAnchor="middle" opacity="0.7">
              plateau
            </text>

            {/* Restart marker */}
            <line x1="305" y1="215" x2="305" y2="230" stroke="#857399" strokeWidth="0.8" opacity="0.4" />
            <text x="305" y="247" fontSize="10" fill="#857399" fontFamily="Plus Jakarta Sans" fontStyle="italic" textAnchor="middle" opacity="0.7">
              restart
            </text>
          </motion.g>
        </svg>

        {/* Caption */}
        <p className="mt-4 text-sm text-center text-ink-500 italic">
          A line that's been honest about its own journey.
        </p>
      </div>
    </div>
  );
}
