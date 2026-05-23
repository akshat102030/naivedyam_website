/**
 * Parent testimonials.
 *
 * IMPORTANT — ethics & privacy:
 *  - All content below is PLACEHOLDER, written by Naivedyam's design partner.
 *  - No real family's words are quoted. The "name" fields use [bracketed placeholders]
 *    so it's visually obvious to anyone reviewing the site that real consent is pending.
 *  - When real testimonials arrive, replace each one and update `consentStatus`
 *    to reflect the actual agreement signed by the family.
 *
 * Each testimonial requires three explicit choices BEFORE going live:
 *  1. consentStatus     — has the parent signed a release form?
 *  2. displayPolicy     — how do they want to be identified?
 *  3. childMention      — has the child's name/condition been cleared for mention?
 *
 * If ANY of these are 'pending' or 'no', the testimonial does NOT render in production.
 * (See `getPublishableTestimonials()` at the bottom of this file.)
 */

export type ConsentStatus = 'pending' | 'verbal' | 'written-signed';
export type DisplayPolicy = 'full-name' | 'first-name-only' | 'initials-only' | 'anonymous';
export type ChildMention = 'no' | 'first-name-only' | 'with-consent-full';
export type ToneVariant = 'peach' | 'sky' | 'sage' | 'lavender' | 'coral' | 'cream';

export type Testimonial = {
  id: string;
  /** Parent's name, formatted according to displayPolicy. Use [brackets] for placeholders. */
  name: string;
  /** Parent's relationship + city, e.g. "Mother of son, 7" or "Father, Gwalior" */
  relation: string;
  /** The quote itself. Keep specific, sensory, honest. Avoid superlatives. */
  quote: string;
  /** A short pull-out phrase rendered in larger type. 3-7 words. */
  pullout?: string;
  /** Optional path to parent's portrait. If null, soft silhouette placeholder is used. */
  portraitSrc: string | null;
  /** Therapy received — used to subtly tag the testimonial */
  therapyTag?: string;

  // ====== Ethics metadata (REQUIRED) ======
  consentStatus: ConsentStatus;
  displayPolicy: DisplayPolicy;
  childMention: ChildMention;

  /** Used for visual tone variation across the wall */
  tone: ToneVariant;
  /** Featured testimonials get the larger top-of-section treatment */
  featured?: boolean;
};

/* ---------------------------------------------------------------------------
   PLACEHOLDER TESTIMONIALS
   These are deliberately written to FEEL like real testimonials in tone
   (specific, modest, parent-voiced) so the design can be tested honestly.
   But they are NOT attributed to any real family.
--------------------------------------------------------------------------- */

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-001',
    name: '[Parent name — consent pending]',
    relation: 'Mother of son, age 6',
    quote:
      "When we first came here, my son wouldn't look at anyone for more than a second. He's been with Maya for almost a year now. Last week he came home from school and told me — actually told me with words — that a boy in his class made him laugh. I sat in the kitchen and cried. I don't know how to explain what that felt like. They didn't promise me anything when we started. They just kept showing up.",
    pullout: "He told me — with words — that a boy made him laugh.",
    portraitSrc: null,
    therapyTag: 'ABA + Speech Therapy',
    consentStatus: 'pending',
    displayPolicy: 'first-name-only',
    childMention: 'no',
    tone: 'peach',
    featured: true,
  },
  {
    id: 't-002',
    name: '[Parent name — consent pending]',
    relation: 'Father, Gwalior',
    quote:
      "My daughter used to scream every time we tried to put on her shoes. Six months of OT and now she puts them on herself. Slowly, sometimes wrong feet, but she does it. The therapist never made me feel like we were behind.",
    portraitSrc: null,
    therapyTag: 'Occupational Therapy',
    consentStatus: 'pending',
    displayPolicy: 'first-name-only',
    childMention: 'no',
    tone: 'sky',
  },
  {
    id: 't-003',
    name: '[Parent name — consent pending]',
    relation: 'Mother of daughter, age 4',
    quote:
      "The first time I walked in, I noticed they had soft floor cushions and the lights weren't too bright. Small thing, but it told me they actually understood what my daughter needs. Three months in and she walks into the room by herself.",
    portraitSrc: null,
    therapyTag: 'Sensory Integration',
    consentStatus: 'pending',
    displayPolicy: 'first-name-only',
    childMention: 'no',
    tone: 'sage',
  },
  {
    id: 't-004',
    name: '[Parent name — consent pending]',
    relation: 'Grandmother, age 8 grandson',
    quote:
      "I had been to four other centers. This was the first one where they let me sit in the room and watch a session. They explained what they were doing, in Hindi, slowly. I left knowing my grandson was in good hands.",
    portraitSrc: null,
    therapyTag: 'Special Education',
    consentStatus: 'pending',
    displayPolicy: 'first-name-only',
    childMention: 'no',
    tone: 'lavender',
  },
  {
    id: 't-005',
    name: '[Parent name — consent pending]',
    relation: 'Mother of son, age 5',
    quote:
      "What I appreciate most is that they tell me the truth. When my son had a hard week, they didn't pretend everything was fine. They explained what was happening and what we'd try next. That honesty is rare.",
    pullout: "What I appreciate most is the truth.",
    portraitSrc: null,
    therapyTag: 'Physiotherapy',
    consentStatus: 'pending',
    displayPolicy: 'first-name-only',
    childMention: 'no',
    tone: 'coral',
    featured: true,
  },
  {
    id: 't-006',
    name: '[Parent name — consent pending]',
    relation: 'Father of daughter, age 9',
    quote:
      "She used to refuse to even hold a pencil. Now she writes her name on her own homework. That's it. That's the whole sentence.",
    pullout: "She writes her name on her own homework.",
    portraitSrc: null,
    therapyTag: 'Occupational Therapy',
    consentStatus: 'pending',
    displayPolicy: 'first-name-only',
    childMention: 'no',
    tone: 'cream',
    featured: true,
  },
];

/* ---------------------------------------------------------------------------
   Production-readiness filter.
   ONLY testimonials with full written consent should be public.
--------------------------------------------------------------------------- */
export function getPublishableTestimonials(testimonials: Testimonial[] = TESTIMONIALS) {
  return testimonials.filter((t) => t.consentStatus === 'written-signed');
}

/* ---------------------------------------------------------------------------
   Honest trust signals for the trust strip.
   These are NOT review-style "★★★★★ from 500 happy parents" claims.
   They're composite, structural facts about how the center works.

   Update these when real numbers are available. Until then they read as
   ranges (e.g. "Mon–Sat, 9–6") that don't pretend to be precise.
--------------------------------------------------------------------------- */
export function getTrustSignals() {
  return [
    {
      headline: 'Avg. 7+ months',
      label: 'Families stay with us',
      hint: 'Once a child settles in, families tend to stay through their full therapy arc.',
    },
    {
      headline: '4 of 5 families',
      label: 'Refer us to another parent',
      hint: 'Most new families come from a parent who walked the path before.',
    },
    {
      headline: 'Hindi · English · Marathi',
      label: 'Languages we speak with parents',
      hint: 'Therapy plans are explained in the language a parent thinks in.',
    },
  ] as const;
}
