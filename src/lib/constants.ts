/**
 * NAIVEDYAM — single source of truth.
 * If any of these change, update here only.
 */

export const BRAND = {
  name: 'Naivedyam',
  logoSrc: '/logos/naiv_logo.png',
  fullName: 'Naivedyam Child Development & Rehabilitation Center',
  tagline: 'Every Child Deserves a Chance to Shine',
  subtagline: '13+ Years of Specialised Child Rehabilitation & Development Care in Gwalior',
  shortDescription:
    'A child development and rehabilitation center in Gwalior offering Physiotherapy, Occupational Therapy, Speech Therapy, Special Education, and Sensory Integration for children aged 0–15.',
} as const;

export const CONTACT = {
  phone: '+91 0000000000', // TODO: replace with real number
  email: 'hello@naivedyam.in', // TODO: replace with real email
  whatsapp: '+910000000000', // TODO: replace
  address: {
    line1: 'City Centre',
    city: 'Gwalior',
    state: 'Madhya Pradesh',
    country: 'India',
    full: 'City Centre, Gwalior, Madhya Pradesh, India',
  },
  hours: 'Mon–Sat, 9:00 AM – 6:00 PM',
} as const;

export const SOCIAL = {
  instagram: 'https://instagram.com/naivedyam', // TODO
  facebook: 'https://facebook.com/naivedyam', // TODO
  youtube: 'https://youtube.com/@naivedyam', // TODO
} as const;

export const STATS = [
  { value: 13, suffix: '+', label: 'Years of Experience' },
  { value: 200, suffix: '+', label: 'Children Guided' },
  { value: 20, suffix: '+', label: 'Active Students' },
  { value: 6, suffix: '', label: 'Therapy Disciplines' },
] as const;

// Replace with real Google Form embed URL when ready
export const ASSESSMENT_FORM_URL =
  'https://docs.google.com/forms/d/e/REPLACE_ME/viewform?embedded=true';
