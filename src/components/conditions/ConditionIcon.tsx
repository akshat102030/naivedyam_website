'use client';

/**
 * Custom SVG illustrations for each condition.
 *
 * Design principles:
 *  - Use currentColor so the card's tone tints the illustration
 *  - Soft, organic strokes (1.5-2 stroke-width, rounded caps)
 *  - Each illustration captures the SPIRIT of the condition, not a medical symbol.
 *    No puzzle pieces (a contested autism symbol). No "red ribbon" iconography.
 *
 * The illustrations:
 *  - Autism: an infinity-style loop (community-chosen alternative to puzzle pieces)
 *    cradling small focused points — pattern-loving, deeply attending
 *  - ADHD: many spinning thoughts radiating from a small center — energy that
 *    moves in all directions at once
 *  - Cerebral Palsy: a growing tree — strength built one branch at a time
 *  - Down Syndrome: three concentric arcs like a warm embrace — the extra
 *    chromosome reframed as the extra warmth families describe
 *  - Learning Disabilities: a key with an unusual shape — different fit, same
 *    door
 *  - Developmental Delays: a sprouting seed — early growth, full of promise
 */

type Props = { slug: string; className?: string };

export function ConditionIcon({ slug, className }: Props) {
  const common = {
    viewBox: '0 0 100 100',
    fill: 'none',
    stroke: 'currentColor' as const,
    strokeWidth: '1.8',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };

  switch (slug) {
    case 'autism':
      // Infinity / lemniscate — community-preferred symbol — with three focused dots.
      return (
        <svg {...common}>
          {/* Outer infinity loop */}
          <path
            d="M 25 50
               C 25 35, 35 25, 45 35
               C 50 41, 55 41, 60 35
               C 70 25, 80 35, 80 50
               C 80 65, 70 75, 60 65
               C 55 59, 50 59, 45 65
               C 35 75, 25 65, 25 50 Z"
            fill="currentColor"
            fillOpacity="0.1"
          />
          {/* Three concentrated dots — at the center and the two loop apexes */}
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <circle cx="33" cy="50" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="67" cy="50" r="2" fill="currentColor" opacity="0.7" />
        </svg>
      );

    case 'adhd':
      // A small bright center surrounded by many short radiating lines (energy,
      // thoughts moving outward in all directions). Slightly asymmetric — that's the point.
      return (
        <svg {...common}>
          {/* Center dot */}
          <circle cx="50" cy="50" r="6" fill="currentColor" fillOpacity="0.2" strokeWidth="1.8" />
          <circle cx="50" cy="50" r="2.5" fill="currentColor" />

          {/* Radiating energy lines — different lengths and angles */}
          <line x1="50" y1="20" x2="50" y2="28" />
          <line x1="50" y1="72" x2="50" y2="80" />
          <line x1="20" y1="50" x2="28" y2="50" />
          <line x1="72" y1="50" x2="80" y2="50" />
          <line x1="29" y1="29" x2="35" y2="35" opacity="0.85" />
          <line x1="71" y1="29" x2="65" y2="35" opacity="0.85" />
          <line x1="29" y1="71" x2="35" y2="65" opacity="0.85" />
          <line x1="71" y1="71" x2="65" y2="65" opacity="0.85" />

          {/* Mid-distance squiggles — for ADHD's specific energetic quality */}
          <path d="M 15 35 Q 18 33, 20 36" opacity="0.55" />
          <path d="M 80 35 Q 82 32, 85 35" opacity="0.55" />
          <path d="M 15 65 Q 18 67, 20 64" opacity="0.55" />
          <path d="M 80 65 Q 82 68, 85 65" opacity="0.55" />
        </svg>
      );

    case 'cerebral-palsy':
      // A growing tree — trunk and branches reaching gently outward.
      return (
        <svg {...common}>
          {/* Trunk */}
          <path d="M 50 82 L 50 50" />

          {/* Main branches */}
          <path d="M 50 50 Q 38 40, 30 32" />
          <path d="M 50 50 Q 62 40, 70 32" />
          <path d="M 50 58 Q 38 56, 28 52" opacity="0.85" />
          <path d="M 50 58 Q 62 56, 72 52" opacity="0.85" />

          {/* Leafy crown — soft blob with internal stipple */}
          <ellipse
            cx="50" cy="32" rx="22" ry="16"
            fill="currentColor" fillOpacity="0.15"
          />
          <circle cx="38" cy="28" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="50" cy="22" r="2" fill="currentColor" opacity="0.7" />
          <circle cx="60" cy="30" r="2" fill="currentColor" opacity="0.5" />

          {/* Ground line */}
          <line x1="30" y1="84" x2="70" y2="84" opacity="0.4" />
        </svg>
      );

    case 'down-syndrome':
      // Three concentric arcs — like a warm embrace from three sides.
      // (Reframes the "extra chromosome" as "extra warmth.")
      return (
        <svg {...common}>
          {/* Three nested heart-shaped curves */}
          <path
            d="M 50 30
               Q 40 22, 32 26
               Q 22 32, 30 44
               Q 38 56, 50 64
               Q 62 56, 70 44
               Q 78 32, 68 26
               Q 60 22, 50 30 Z"
            fill="currentColor"
            fillOpacity="0.18"
          />
          <path
            d="M 50 38
               Q 44 33, 39 35
               Q 33 38, 38 46
               Q 43 53, 50 58
               Q 57 53, 62 46
               Q 67 38, 61 35
               Q 56 33, 50 38 Z"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <circle cx="50" cy="46" r="2.5" fill="currentColor" />
        </svg>
      );

    case 'learning-disabilities':
      // A key — but the teeth/bit shape is unusual. Different fit, same door.
      return (
        <svg {...common}>
          {/* Key bow (the ring at top) */}
          <circle cx="50" cy="30" r="11" />
          <circle cx="50" cy="30" r="4" fill="currentColor" fillOpacity="0.3" />

          {/* Key shaft */}
          <line x1="50" y1="41" x2="50" y2="78" />

          {/* Teeth — irregular, deliberately not symmetric */}
          <path d="M 50 58 L 56 58 L 56 63" />
          <path d="M 50 66 L 60 66 L 60 70" />
          <path d="M 50 72 L 55 72 L 55 76" />
        </svg>
      );

    case 'developmental-delays':
      // A sprouting seed — early growth, full of promise.
      return (
        <svg {...common}>
          {/* Ground */}
          <line x1="20" y1="78" x2="80" y2="78" opacity="0.4" />

          {/* Underground seed */}
          <ellipse
            cx="50" cy="80" rx="6" ry="4"
            fill="currentColor"
            fillOpacity="0.3"
            strokeWidth="1.5"
          />

          {/* Stem */}
          <path d="M 50 76 Q 50 60, 48 45 Q 50 32, 50 26" strokeWidth="2" />

          {/* Two opening leaves */}
          <path
            d="M 48 45 Q 32 40, 30 52 Q 38 50, 48 48 Z"
            fill="currentColor"
            fillOpacity="0.18"
          />
          <path
            d="M 50 38 Q 68 33, 70 45 Q 60 44, 50 40 Z"
            fill="currentColor"
            fillOpacity="0.18"
          />

          {/* Tiny bud at the very top */}
          <circle cx="50" cy="24" r="3" fill="currentColor" fillOpacity="0.4" />
        </svg>
      );

    default:
      return null;
  }
}
