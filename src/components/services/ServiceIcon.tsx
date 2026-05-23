'use client';

import { motion } from 'framer-motion';

/**
 * Custom hand-drawn SVG illustrations — one per service.
 *
 * Design principles:
 *  - Use `currentColor` so the card's tone tints the illustration naturally
 *  - Soft, organic strokes (1.5-2 stroke-width, rounded caps)
 *  - Each one suggests the THING the therapy works on, not the medical concept
 *  - Subtle internal motion so they feel alive without being distracting
 */

type Props = { slug: string; className?: string };

export function ServiceIcon({ slug, className }: Props) {
  switch (slug) {
    case 'aba':      return <AbaIcon className={className} />;
    case 'speech':   return <SpeechIcon className={className} />;
    case 'sensory':  return <SensoryIcon className={className} />;
    case 'physio':   return <PhysioIcon className={className} />;
    case 'ot':       return <OtIcon className={className} />;
    case 'special-ed': return <SpecialEdIcon className={className} />;
    default:         return null;
  }
}

/* ---------------------------------------------------------------------------
   ABA — Connected branching nodes: behaviour chains, decision trees,
   the way small things build into bigger ones.
--------------------------------------------------------------------------- */
function AbaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
      {/* Connection lines — drawn first so nodes sit on top */}
      <motion.g
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity={0.55}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M 30 30 Q 40 50, 50 50" />
        <path d="M 50 50 Q 60 50, 70 30" />
        <path d="M 50 50 Q 60 60, 70 75" />
        <path d="M 50 50 Q 40 60, 30 75" />
      </motion.g>

      {/* Central node — the parent/anchor */}
      <motion.circle
        cx="50" cy="50" r="6"
        fill="currentColor" fillOpacity={0.18}
        strokeWidth="2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '50px 50px' }}
      />

      {/* Outer nodes — child behaviours */}
      <circle cx="30" cy="30" r="4" fill="currentColor" fillOpacity={0.4} strokeWidth="1.5" />
      <circle cx="70" cy="30" r="4" fill="currentColor" fillOpacity={0.4} strokeWidth="1.5" />
      <circle cx="70" cy="75" r="4" fill="currentColor" fillOpacity={0.4} strokeWidth="1.5" />
      <circle cx="30" cy="75" r="4" fill="currentColor" fillOpacity={0.4} strokeWidth="1.5" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Speech — A soft speech bubble emitting gentle sound waves.
   The waves animate outward continuously.
--------------------------------------------------------------------------- */
function SpeechIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
      {/* Bubble */}
      <path
        d="M 25 35 Q 25 20, 40 20 L 60 20 Q 75 20, 75 35 L 75 50 Q 75 65, 60 65 L 50 65 L 40 75 L 40 65 Q 25 65, 25 50 Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity={0.12}
      />
      {/* Three dots inside — speech */}
      <circle cx="42" cy="43" r="2" fill="currentColor" />
      <circle cx="50" cy="43" r="2" fill="currentColor" />
      <circle cx="58" cy="43" r="2" fill="currentColor" />

      {/* Sound waves emanating */}
      <motion.path
        d="M 80 30 Q 88 42, 80 55"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M 86 25 Q 96 42, 86 60"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ opacity: [0.6, 0.1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Sensory — Concentric ripples, like a drop settling in water.
   Suggests calm, regulation, the body finding its center.
--------------------------------------------------------------------------- */
function SensoryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
      {/* Central dot */}
      <circle cx="50" cy="50" r="3" fill="currentColor" />

      {/* Three expanding rings — staggered animation */}
      <motion.circle
        cx="50" cy="50" r="12"
        strokeWidth="1.8"
        animate={{ r: [12, 18, 12], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="50" cy="50" r="22"
        strokeWidth="1.5"
        animate={{ r: [22, 30, 22], opacity: [0.4, 0.15, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />
      <motion.circle
        cx="50" cy="50" r="32"
        strokeWidth="1.2"
        animate={{ r: [32, 40, 32], opacity: [0.25, 0.08, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Physio — A walking figure with motion arc above (suggesting movement,
   balance, gait). Small, abstract — not literal "person walking" clip-art.
--------------------------------------------------------------------------- */
function PhysioIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
      {/* Motion arc above figure */}
      <motion.path
        d="M 20 30 Q 50 15, 80 30"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 4"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Figure — head */}
      <circle cx="50" cy="38" r="6" strokeWidth="1.8" fill="currentColor" fillOpacity={0.15} />

      {/* Torso */}
      <line x1="50" y1="44" x2="50" y2="65" strokeWidth="2" strokeLinecap="round" />

      {/* Arms — one forward, one back, suggesting mid-stride */}
      <motion.line
        x1="50" y1="50" x2="40" y2="58"
        strokeWidth="2" strokeLinecap="round"
        animate={{ x2: [40, 44, 40], y2: [58, 54, 58] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.line
        x1="50" y1="50" x2="60" y2="55"
        strokeWidth="2" strokeLinecap="round"
        animate={{ x2: [60, 58, 60], y2: [55, 60, 55] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Legs */}
      <motion.line
        x1="50" y1="65" x2="44" y2="80"
        strokeWidth="2" strokeLinecap="round"
        animate={{ x2: [44, 48, 44] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.line
        x1="50" y1="65" x2="56" y2="80"
        strokeWidth="2" strokeLinecap="round"
        animate={{ x2: [56, 52, 56] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Ground line */}
      <line x1="30" y1="82" x2="70" y2="82" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   OT — A hand holding/manipulating a small object (suggests fine motor,
   daily living). Stylised, soft, palm-up gesture.
--------------------------------------------------------------------------- */
function OtIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
      {/* Small floating object above the hand */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect
          x="44" y="20" width="12" height="12" rx="2"
          strokeWidth="1.8"
          fill="currentColor" fillOpacity={0.18}
        />
      </motion.g>

      {/* Palm — open hand cup */}
      <path
        d="M 30 50 Q 30 42, 36 42 L 36 35 Q 36 30, 40 30 Q 44 30, 44 35 L 44 42 L 48 42 L 48 33 Q 48 28, 52 28 Q 56 28, 56 33 L 56 42 L 60 42 L 60 36 Q 60 31, 64 31 Q 68 31, 68 36 L 68 50 Q 68 70, 50 70 Q 32 70, 30 50 Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity={0.1}
      />

      {/* Wrist line */}
      <path
        d="M 40 70 Q 40 78, 50 80 Q 60 78, 60 70"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Special Ed — An open book with a soft sun/glow rising from its pages.
   Suggests learning, discovery, illumination.
--------------------------------------------------------------------------- */
function SpecialEdIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
      {/* Glow/sun rising from pages */}
      <motion.circle
        cx="50" cy="40" r="10"
        fill="currentColor" fillOpacity={0.18}
        strokeWidth="0"
        animate={{ r: [10, 12, 10], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Sun rays */}
      <motion.g
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <line x1="50" y1="22" x2="50" y2="26" />
        <line x1="35" y1="30" x2="38" y2="33" />
        <line x1="65" y1="30" x2="62" y2="33" />
        <line x1="28" y1="42" x2="32" y2="42" />
        <line x1="68" y1="42" x2="72" y2="42" />
      </motion.g>

      {/* Book — open, V-shape */}
      <path
        d="M 20 60 L 50 56 L 50 78 L 22 80 Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity={0.08}
      />
      <path
        d="M 80 60 L 50 56 L 50 78 L 78 80 Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity={0.08}
      />

      {/* Page lines */}
      <line x1="28" y1="65" x2="44" y2="63" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="28" y1="70" x2="44" y2="68" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="56" y1="63" x2="72" y2="65" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="56" y1="68" x2="72" y2="70" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Spine */}
      <line x1="50" y1="56" x2="50" y2="78" strokeWidth="1.5" opacity="0.7" />
    </svg>
  );
}
