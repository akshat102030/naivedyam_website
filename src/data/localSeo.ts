import { BRAND, CONTACT, SOCIAL } from '@/lib/constants';

export const SITE_URL = 'https://naivedyamcdc.com';

export const SERVICE_SLUGS = [
  'speech-therapy-gwalior',
  'occupational-therapy-gwalior',
  'special-education-gwalior',
  'child-rehabilitation-gwalior',
  'child-development-center-gwalior',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

type Faq = { question: string; answer: string };

export type ServiceLandingContent = {
  slug: ServiceSlug;
  serviceName: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whenToSeekHelp: string[];
  treatmentApproach: string[];
  faqs: Faq[];
  relatedServices: ServiceSlug[];
};

export const SERVICE_PAGE_CONTENT: Record<ServiceSlug, ServiceLandingContent> = {
  'speech-therapy-gwalior': {
    slug: 'speech-therapy-gwalior',
    serviceName: 'Speech Therapy',
    title: 'Speech Therapy for Kids in Gwalior',
    metaDescription:
      'Speech therapy for kids in Gwalior at Naivedyam Child Development Center for language delay, articulation, stammering, and communication confidence.',
    h1: 'Speech Therapy for Kids in Gwalior',
    intro:
      'Our speech therapy sessions focus on helping children communicate with clarity, confidence, and comfort in daily life, school, and social settings.',
    whenToSeekHelp: [
      'Delayed first words or limited vocabulary compared to age expectations.',
      'Difficulty pronouncing sounds clearly or being understood by others.',
      'Stammering, frequent pauses, or frustration while speaking.',
      'Challenges in following instructions or expressing needs in sentences.',
    ],
    treatmentApproach: [
      'Individual assessment of speech sounds, language comprehension, and expressive communication.',
      'Age-appropriate therapy plans using play, repetition, and parent-guided home practice.',
      'Progress tracking with regular feedback to families and coordinated goals with other therapies.',
    ],
    faqs: [
      {
        question: 'At what age can speech therapy start?',
        answer:
          'Speech therapy can begin as early as toddler years when communication delays are noticed. Early intervention typically leads to faster progress.',
      },
      {
        question: 'How often should my child attend speech therapy?',
        answer:
          'Most children benefit from 1-3 sessions per week based on severity, age, and therapy goals identified during assessment.',
      },
      {
        question: 'Do parents get home activities?',
        answer:
          'Yes. Parent carryover activities are shared after sessions so communication practice continues in everyday routines.',
      },
    ],
    relatedServices: [
      'occupational-therapy-gwalior',
      'special-education-gwalior',
      'child-rehabilitation-gwalior',
    ],
  },
  'occupational-therapy-gwalior': {
    slug: 'occupational-therapy-gwalior',
    serviceName: 'Occupational Therapy',
    title: 'Occupational Therapy for Kids in Gwalior',
    metaDescription:
      'Occupational therapy for children in Gwalior to improve fine motor skills, sensory processing, focus, handwriting, and daily living independence.',
    h1: 'Occupational Therapy for Kids in Gwalior',
    intro:
      'Our occupational therapy programs help children build independence in daily tasks, sensory regulation, classroom readiness, and functional play.',
    whenToSeekHelp: [
      'Difficulty with handwriting, pencil grip, or classroom table tasks.',
      'Poor attention, sensory overwhelm, or frequent meltdowns in routine settings.',
      'Challenges with dressing, feeding, grooming, or toilet routine independence.',
      'Weak hand strength, bilateral coordination, or planning movements.',
    ],
    treatmentApproach: [
      'Comprehensive occupational and sensory profile assessment with family goals.',
      'Therapy for fine motor, sensory integration, self-regulation, and ADL skills.',
      'Structured home strategies so improvements transfer from clinic to real life.',
    ],
    faqs: [
      {
        question: 'Is occupational therapy only for autism?',
        answer:
          'No. Children with ADHD, developmental delays, sensory processing issues, and motor coordination needs also benefit from occupational therapy.',
      },
      {
        question: 'Can occupational therapy improve school performance?',
        answer:
          'Yes. It supports attention, sitting tolerance, writing readiness, and classroom participation skills.',
      },
      {
        question: 'How long before results are visible?',
        answer:
          'Progress timelines vary by child, but with consistent therapy and home carryover, families usually notice functional changes within weeks to months.',
      },
    ],
    relatedServices: [
      'speech-therapy-gwalior',
      'special-education-gwalior',
      'child-development-center-gwalior',
    ],
  },
  'special-education-gwalior': {
    slug: 'special-education-gwalior',
    serviceName: 'Special Education',
    title: 'Special Education for Kids in Gwalior',
    metaDescription:
      'Special education support in Gwalior with individualized learning plans for children needing adaptive teaching, early academics, and school readiness.',
    h1: 'Special Education for Kids in Gwalior',
    intro:
      'Our special education sessions are individualized for learning style, pace, and strengths so each child can build academic and life skills with confidence.',
    whenToSeekHelp: [
      'Slow progress in reading, writing, number understanding, or classroom participation.',
      'Difficulty following school routines despite adequate effort and support.',
      'Need for structured, personalized teaching beyond regular classroom methods.',
      'Learning challenges linked with speech, developmental, or attention differences.',
    ],
    treatmentApproach: [
      'Individualized learning plans with realistic short-term milestones.',
      'Remedial teaching for pre-academics, literacy, numeracy, and concept building.',
      'Collaboration with parents and schools to support carryover and consistency.',
    ],
    faqs: [
      {
        question: 'How is special education different from tuition?',
        answer:
          'Special education adapts teaching methods to the child, not just repeating school content. It addresses learning barriers and foundational skills.',
      },
      {
        question: 'Do you support children with learning disabilities?',
        answer:
          'Yes. We support children with learning differences through structured, individualized educational intervention.',
      },
      {
        question: 'Can special education be combined with therapies?',
        answer:
          'Yes. Combined plans with speech and occupational therapy often improve both academic and functional outcomes.',
      },
    ],
    relatedServices: [
      'speech-therapy-gwalior',
      'occupational-therapy-gwalior',
      'child-development-center-gwalior',
    ],
  },
  'child-rehabilitation-gwalior': {
    slug: 'child-rehabilitation-gwalior',
    serviceName: 'Child Rehabilitation',
    title: 'Child Rehabilitation Center in Gwalior',
    metaDescription:
      'Child rehabilitation in Gwalior for developmental, motor, communication, and sensory needs through integrated multidisciplinary therapy plans.',
    h1: 'Child Rehabilitation in Gwalior',
    intro:
      'Naivedyam Child Development Center provides integrated child rehabilitation through speech, occupational, physiotherapy, sensory, and special education support.',
    whenToSeekHelp: [
      'Delayed developmental milestones in movement, communication, or social interaction.',
      'Existing diagnosis needing coordinated multidisciplinary intervention.',
      'Regression in previously achieved developmental skills.',
      'Complex needs requiring one center for integrated care planning.',
    ],
    treatmentApproach: [
      'Comprehensive multidisciplinary assessment with a unified therapy roadmap.',
      'Combination of speech, occupational, physiotherapy, sensory, and education goals.',
      'Periodic review meetings with family-centered progress planning.',
    ],
    faqs: [
      {
        question: 'What does child rehabilitation include at Naivedyam?',
        answer:
          'It includes coordinated therapy services based on your child\'s needs: speech, occupational therapy, physiotherapy, sensory work, and special education.',
      },
      {
        question: 'Do I need separate centers for each therapy?',
        answer:
          'Not necessarily. Integrated rehabilitation in one center improves continuity and communication across therapists.',
      },
      {
        question: 'How do we start rehabilitation planning?',
        answer:
          'Book an assessment so the team can evaluate current strengths and challenges, then create a personalized intervention plan.',
      },
    ],
    relatedServices: [
      'speech-therapy-gwalior',
      'occupational-therapy-gwalior',
      'special-education-gwalior',
    ],
  },
  'child-development-center-gwalior': {
    slug: 'child-development-center-gwalior',
    serviceName: 'Child Development Center',
    title: 'Best Child Development Center in Gwalior',
    metaDescription:
      'Naivedyam Child Development Center in Gwalior offering speech therapy, occupational therapy, special education, and child rehabilitation in one center.',
    h1: 'Naivedyam Child Development Center in Gwalior',
    intro:
      'Naivedyam is a child development center in Gwalior focused on early intervention, therapy-led growth, and practical parent guidance for long-term progress.',
    whenToSeekHelp: [
      'You are unsure which therapy your child needs and want a clear assessment roadmap.',
      'There are concerns in speech, behavior, sensory response, or learning readiness.',
      'Your child has mixed needs and requires structured multidisciplinary support.',
      'You want a trusted center in Gwalior for long-term developmental guidance.',
    ],
    treatmentApproach: [
      'Detailed developmental assessment with parent counseling and priority mapping.',
      'Integrated intervention plans across therapy disciplines under one roof.',
      'Regular milestone reviews with practical home routines for families.',
    ],
    faqs: [
      {
        question: 'Which services are available at your child development center?',
        answer:
          'We provide speech therapy, occupational therapy, physiotherapy, sensory integration, ABA-informed support, and special education.',
      },
      {
        question: 'Do you offer early intervention programs?',
        answer:
          'Yes. Early intervention is central to our model for infants, toddlers, and preschool children with developmental concerns.',
      },
      {
        question: 'Can parents observe or receive progress updates?',
        answer:
          'Yes. Families receive regular progress updates and guided home plans to support consistent outcomes.',
      },
    ],
    relatedServices: [
      'speech-therapy-gwalior',
      'occupational-therapy-gwalior',
      'child-rehabilitation-gwalior',
    ],
  },
};

export function getServiceContent(slug: string) {
  if (!SERVICE_SLUGS.includes(slug as ServiceSlug)) {
    return null;
  }

  return SERVICE_PAGE_CONTENT[slug as ServiceSlug];
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'Organization'],
    name: BRAND.fullName,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND.logoSrc}`,
    image: `${SITE_URL}${BRAND.logoSrc}`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.line1,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      addressCountry: CONTACT.address.country,
    },
    areaServed: 'Gwalior',
    openingHours: CONTACT.hours,
    sameAs: [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.youtube],
    keywords: [
      'child development center gwalior',
      'speech therapy for kids',
      'occupational therapy for kids',
      'special education',
      'child rehabilitation',
    ],
  };
}
