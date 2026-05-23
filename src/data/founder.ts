/**
 * Maya Dubey — Founder, Naivedyam.
 *
 * Edit this file when the final bio / credentials are approved.
 * The Founder section reads everything from here.
 */

export const FOUNDER = {
  name: 'Mrs. Maya Dubey',
  title: 'Founder & Lead Therapist',
  honorific: 'Autism & ABA Specialist',

  // The story. Keep it warm, first-person feel from the center — not a CV.
  bio: [
    "For over fifteen years, Maya has walked beside families through the quiet, hard, hopeful work of raising children with different abilities.",
    "Her path took her through Roshni, RKVM, and Ehsaas — three of central India's most respected centers — before she founded Naivedyam to bring that same depth of care home to Gwalior.",
    "She specialises in Autism Spectrum support and Applied Behaviour Analysis (ABA), but what parents remember is something simpler: she sees their child. Fully. Without rush.",
  ],

  // Short, scannable credentials. These appear as floating pills around the portrait.
  achievements: [
    { icon: 'Award',     label: 'Autism & ABA Specialist' },
    { icon: 'BookOpen',  label: 'Special Education Expert' },
    { icon: 'Heart',     label: 'Trained at Roshni · RKVM · Ehsaas' },
    { icon: 'Users',     label: 'Mentored 200+ families' },
  ],

  // Stats that count up when scrolled into view.
  stats: [
    { value: 15, suffix: '+', label: 'Years of practice' },
    { value: 200, suffix: '+', label: 'Children guided' },
    { value: 20, suffix: '+', label: 'Active students' },
    { value: 3,  suffix: '',  label: 'Renowned centers' },
  ],

  portraitSrc: '/images/founder/founder.png',

  // A short pull-quote that floats next to the portrait — Maya in her own voice.
  quote: "Every child has their own pace. Our work is to walk with them — never ahead, never behind.",
} as const;
