/**
 * The 6 therapy paths Naivedyam offers.
 *
 * Editing notes:
 *  - `slug` is used internally for icon mapping (don't rename without updating ServiceIcon.tsx)
 *  - `tone` controls the card's color theme — must match a key in the toneMap inside ServiceCard.tsx
 *  - `featured: 'large'` makes a card span 2 cols on desktop bento (used for ABA)
 *  - `featured: 'wide'`  makes a card span 2 cols, 1 row (used for Special Ed)
 *  - `helps` are short pill tags shown inside the card — keep them 1-3 words each
 */

export type ServiceTone = 'sky' | 'peach' | 'coral' | 'lavender' | 'sage' | 'cream';
export type ServiceFeature = 'large' | 'wide' | null;

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  helps: string[];
  tone: ServiceTone;
  featured: ServiceFeature;
};

export const SERVICES: Service[] = [
  {
    slug: 'aba',
    name: 'ABA Therapy',
    tagline: 'Behaviour, broken into kindness.',
    description:
      'Applied Behaviour Analysis builds new skills through patient, evidence-based repetition — celebrating each small win until it becomes part of who your child is.',
    helps: ['Autism', 'Behaviour shaping', 'Skill building', 'Communication'],
    tone: 'lavender',
    featured: 'large',
  },
  {
    slug: 'speech',
    name: 'Speech Therapy',
    tagline: 'For the words still finding their way.',
    description:
      'Working with sounds, words, and the courage to be heard — from first syllables to confident conversation.',
    helps: ['Articulation', 'Language delay', 'Stammering'],
    tone: 'coral',
    featured: null,
  },
  {
    slug: 'sensory',
    name: 'Sensory Integration',
    tagline: 'Helping the world feel less loud.',
    description:
      'For children whose nervous systems are working overtime — gentle, structured play that teaches the body how to settle.',
    helps: ['Self-regulation', 'Tactile defensiveness'],
    tone: 'sage',
    featured: null,
  },
  {
    slug: 'physio',
    name: 'Physiotherapy',
    tagline: 'For every step worth celebrating.',
    description:
      'Movement, strength, balance — built up through play and exercises designed around what each child loves to do.',
    helps: ['Cerebral palsy', 'Motor delays', 'Gait training'],
    tone: 'sky',
    featured: null,
  },
  {
    slug: 'ot',
    name: 'Occupational Therapy',
    tagline: 'Daily life as a quiet superpower.',
    description:
      'Buttoning a shirt. Holding a pencil. Tying a shoelace. Independence built one ordinary moment at a time.',
    helps: ['Fine motor', 'Daily living', 'Handwriting'],
    tone: 'peach',
    featured: null,
  },
  {
    slug: 'special-ed',
    name: 'Special Education',
    tagline: 'Learning, but paced for them.',
    description:
      'A curriculum that adapts to your child — not the other way around. Reading, numeracy, social learning, designed for how they actually think.',
    helps: ['Learning disabilities', 'IEPs', 'Pre-academics', 'Reading'],
    tone: 'cream',
    featured: 'wide',
  },
];
