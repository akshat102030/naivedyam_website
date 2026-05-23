/**
 * Progress Journey content.
 *
 * Written principles:
 *  - Composite milestones (no specific child's data). Privacy first.
 *  - Small, specific moments — not vague claims.
 *  - Honest about pace. "Around Week 4-6" not "After just 4 weeks!"
 *  - The shifts (Then → Now) describe DIRECTION, not destination.
 *  - No percentages, no transformation language.
 */

export type MilestoneSide = 'left' | 'right';

export type Milestone = {
  /** When in the journey this typically emerges. Phrased as a range, not a deadline. */
  when: string;
  /** The moment itself. Short, vivid, sacred. */
  title: string;
  /** Honest context — what therapy work led here. */
  context: string;
  /** Icon slug — maps to ProgressIcon component */
  icon: string;
};

export const MILESTONES: Milestone[] = [
  {
    when: 'Week 1-2',
    title: 'Settling into the room',
    context: 'Trust-building sessions help the child feel safe — beginning to respond to their therapist by name.',
    icon: 'home',
  },
  {
    when: 'Week 4-6',
    title: 'First sustained eye contact',
    context: 'Joint-attention play and turn-taking exercises open the door to connection.',
    icon: 'eye',
  },
  {
    when: 'Month 2-3',
    title: 'A first clear word',
    context: 'Following structured speech sessions and gentle repetition at home — "mama," "papa," or a favourite name said deliberately.',
    icon: 'speech',
  },
  {
    when: 'Month 3-4',
    title: 'Staying with the group',
    context: 'After sensory regulation work, the child sits through a 20-minute group activity, engaged and calm.',
    icon: 'group',
  },
  {
    when: 'Month 4-5',
    title: 'Self-initiated play',
    context: 'They walk over to another child and invite them — not prompted, not coached. Their own choice.',
    icon: 'friends',
  },
  {
    when: 'Month 6+',
    title: 'Quiet independence',
    context: 'Buttoning a shirt. Asking for water without being asked first. Writing their name. Daily living, made their own.',
    icon: 'star',
  },
];

/* ---------------------------------------------------------------------------
   Six dimensions of growth — the qualitative shifts we track.
   No numbers, no percentages. Honest directional language.
--------------------------------------------------------------------------- */

export type GrowthDimension = {
  name: string;
  then: string;
  now: string;
  icon: string;
  tone: 'sky' | 'peach' | 'coral' | 'lavender' | 'sage' | 'cream';
};

export const GROWTH_DIMENSIONS: GrowthDimension[] = [
  {
    name: 'Eye contact',
    then: 'Avoiding',
    now: 'Connecting',
    icon: 'eye',
    tone: 'coral',
  },
  {
    name: 'Communication',
    then: 'Overwhelmed silence',
    now: 'Finding words',
    icon: 'speech',
    tone: 'sky',
  },
  {
    name: 'Motor skills',
    then: 'Hesitant steps',
    now: 'Confident movement',
    icon: 'walk',
    tone: 'sage',
  },
  {
    name: 'Self-regulation',
    then: 'Long meltdowns',
    now: '5-minute reset',
    icon: 'wave',
    tone: 'lavender',
  },
  {
    name: 'Daily living',
    then: 'Full assistance',
    now: 'Small independence',
    icon: 'hand',
    tone: 'peach',
  },
  {
    name: 'Social engagement',
    then: 'Parallel play',
    now: 'Joining in',
    icon: 'nodes',
    tone: 'cream',
  },
];

/* ---------------------------------------------------------------------------
   The honest framing — copy for the "non-linear truth" opener.
--------------------------------------------------------------------------- */

export const TRUTH_COPY = {
  heading: "Progress doesn't move in a straight line.",
  body:
    "Real growth looks like leaps and plateaus, restarts and slow turns. Some weeks bring a breakthrough; others ask only that we stay. We honour every part of that journey — and we measure it the way it actually unfolds, not the way it ought to look on a chart.",
} as const;
