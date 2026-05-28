/**
 * NAIVEDYAM — single source of truth.
 * If any of these change, update here only.
 */

export const BRAND = {
  name: 'Naivedyam',
  logoSrc: '/logos/naiv_logo.png',
  fullName: 'Naivedyam Child Development Centre And Rehabilitation Center',
  tagline: 'Every Child Deserves a Chance to Shine',
  subtagline: '13+ Years of Specialised Child Rehabilitation & Development Care in Gwalior',
  shortDescription:
    'Naivedyam Child Development Center in Gwalior offering child rehabilitation, speech therapy for kids, occupational therapy for kids, special education, physiotherapy, and sensory integration for children aged 0-15.',
} as const;

export const CONTACT = {
  phone: '+91 73892 96699',
  email: 'hello@naivedyam.in', // TODO: replace with real email
  whatsapp: '+917389296699',
  address: {
    line1: '103, Kailash Vihar Main Rd, City Center, Tulsi Vihar Colony',
    city: 'Gwalior',
    state: 'Madhya Pradesh',
    country: 'India',
    full: '103, Kailash Vihar Main Rd, City Center, Tulsi Vihar Colony, Gwalior, Madhya Pradesh 474002',
  },
  hours: 'Mon–Sat, 9:00 AM – 6:00 PM',
} as const;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/naivedyamrehab/',
  facebook: 'https://www.facebook.com/naivedyamchildcareandrehabilitationcenter',
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
