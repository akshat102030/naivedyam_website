'use client';

/**
 * Custom SVG illustrations for the Progress Journey.
 *
 * Same design language as ServiceIcon (currentColor, soft strokes, organic shapes)
 * but optimised for SMALLER sizes — these often appear at 24-32px.
 */

type Props = { slug: string; className?: string };

export function ProgressIcon({ slug, className }: Props) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.6',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };

  switch (slug) {
    /* Milestones */
    case 'home':
      return (
        <svg {...common}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );

    case 'eye':
      return (
        <svg {...common}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      );

    case 'speech':
      return (
        <svg {...common}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="9" cy="12" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="15" cy="12" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );

    case 'group':
      return (
        <svg {...common}>
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <path d="M15 21v-1a3 3 0 0 1 2.5-3" />
        </svg>
      );

    case 'friends':
      return (
        <svg {...common}>
          <circle cx="8" cy="9" r="2.5" />
          <circle cx="16" cy="9" r="2.5" />
          <path d="M3 20v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1" />
          <path d="M14 20v-1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1" />
          {/* Connecting heart between */}
          <path d="M10.5 14c.5-.6 1-1 1.5-1s1 .4 1.5 1c.5-.6 1-1 1.5-1s1 .4 1 1c0 1-1 1.7-2.5 2.5C12 15.7 11 15 11 14z" fill="currentColor" fillOpacity="0.2" stroke="none" />
        </svg>
      );

    case 'star':
      return (
        <svg {...common}>
          <polygon
            points="12 2 14.5 8.5 21 9.3 16 14 17.5 21 12 17.5 6.5 21 8 14 3 9.3 9.5 8.5"
            fill="currentColor"
            fillOpacity="0.18"
          />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );

    /* Growth dimensions */
    case 'walk':
      return (
        <svg {...common}>
          {/* Three footstep-like ovals tracking forward and slightly up */}
          <ellipse cx="5" cy="18" rx="2" ry="1.4" fill="currentColor" fillOpacity="0.25" />
          <ellipse cx="11" cy="14" rx="2" ry="1.4" fill="currentColor" fillOpacity="0.45" />
          <ellipse cx="17" cy="9" rx="2" ry="1.4" fill="currentColor" fillOpacity="0.7" />
          <path d="M5 18 L 11 14 L 17 9" strokeDasharray="2 3" opacity="0.5" />
        </svg>
      );

    case 'wave':
      return (
        <svg {...common}>
          {/* Chaotic wave on left calming to steady on right */}
          <path d="M2 12c1-3 2 3 3 0s1.5-4 2-2 1 4 2 1 1.5-3 2-1 1.5 2 2 1 1-1 2-1 1.5 0.5 2 0.5 1.5 0 2-0.5 1-0.5 1-0.5" opacity="0.85" />
        </svg>
      );

    case 'hand':
      return (
        <svg {...common}>
          {/* A simple open palm */}
          <path d="M6 11V6a1.5 1.5 0 0 1 3 0v5" />
          <path d="M9 11V4.5a1.5 1.5 0 0 1 3 0V11" />
          <path d="M12 11V5a1.5 1.5 0 0 1 3 0v6" />
          <path d="M15 11V7a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6V9a1.5 1.5 0 0 1 3 0v4" />
        </svg>
      );

    case 'nodes':
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2" fill="currentColor" fillOpacity="0.3" />
          <circle cx="18" cy="6" r="2" fill="currentColor" fillOpacity="0.3" />
          <circle cx="12" cy="18" r="2" fill="currentColor" fillOpacity="0.5" />
          <line x1="7" y1="7" x2="11" y2="17" opacity="0.6" />
          <line x1="17" y1="7" x2="13" y2="17" opacity="0.6" />
          <line x1="8" y1="6" x2="16" y2="6" opacity="0.4" strokeDasharray="2 2" />
        </svg>
      );

    default:
      return null;
  }
}
