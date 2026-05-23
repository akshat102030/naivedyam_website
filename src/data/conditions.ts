/**
 * Conditions we support.
 *
 * Writing principles ("What we see in them"):
 *
 *  1. STRENGTHS FIRST. Each condition opens with what we genuinely observe in
 *     these children's strengths — not toxic positivity, just honest, specific
 *     traits. Diagnosis ≠ deficit.
 *
 *  2. LIVED EXPERIENCE next. Phrased from the child's perspective. NOT a
 *     clinical symptom list. "The world's sounds can feel too loud" is honest;
 *     "exhibits auditory hypersensitivity" reduces the child to jargon.
 *
 *  3. HOW WE HELP. Concrete therapy paths, linked back to the Services
 *     section's slugs so cross-referencing works.
 *
 *  4. SIGNS TO LOOK FOR (in the modal only, never on the card). For parents
 *     who came here unsure whether to seek assessment — but framed gently,
 *     without alarm.
 *
 *  5. STATS only in the modal, never on the card. A child is not a statistic.
 *
 * Editing notes:
 *  - `slug` is used for icon mapping (don't rename without updating ConditionIcon.tsx)
 *  - `tone` matches the same vocabulary as Services / Progress
 *  - `therapies` are slugs from `src/data/services.ts` — used to render cross-links
 */

export type ConditionTone = 'sky' | 'peach' | 'coral' | 'lavender' | 'sage' | 'cream';

export type Condition = {
  slug: string;
  name: string;
  /** Short subtitle shown beside the name. NOT clinical. Honest, human, brief. */
  subtitle: string;
  /** Brief shown on the card at rest. 1-2 sentences. */
  brief: string;
  /** Specific strengths we genuinely see in these children. 3-5 items. */
  strengths: string[];
  /** Lived-experience description. From the child's perspective. */
  livedExperience: string;
  /** Therapy slugs (matching SERVICES) that we use to support this condition. */
  therapies: string[];
  /** Gentle, parent-facing things to notice — appears in the modal. */
  signsToNotice: string[];
  /**
   * Optional clinical reference. Kept in the modal, low-key. Editable as
   * understanding evolves; treat current values as drafts.
   */
  clinicalNote?: string;
  tone: ConditionTone;
};

export const CONDITIONS: Condition[] = [
  {
    slug: 'autism',
    name: 'Autism Spectrum',
    subtitle: 'A different way of meeting the world',
    brief:
      "Children on the spectrum often experience the world more intensely — sounds, light, social signals — and many do their finest thinking when given space and structure.",
    strengths: [
      'Often: deeply focused, sometimes for hours, on what they love',
      'Pattern-loving, memory-rich, sharp with detail',
      'Honest. They mean what they say.',
      'Loyal to the few they trust',
    ],
    livedExperience:
      "Sounds can feel too loud. Eye contact takes work. Routines feel safer than surprises. Their bodies may have ways of self-soothing — rocking, hand-flapping, lining things up — that bring real comfort. Connection is wanted, but the bridge to it is built differently.",
    therapies: ['aba', 'speech', 'sensory', 'special-ed'],
    signsToNotice: [
      'Limited eye contact or response to their name by 12-18 months',
      'Strong preference for sameness; distress when routines change',
      'Repetitive movements or interests that feel intensely soothing',
      'Speech that arrives later, or doesn\'t arrive yet',
      'Difficulty in unstructured play with other children',
    ],
    clinicalNote:
      'Autism Spectrum Disorder (ASD) is a neurodevelopmental difference present from early childhood. Early structured support — typically Applied Behaviour Analysis, speech therapy, and sensory integration — significantly improves outcomes when paired with family involvement.',
    tone: 'lavender',
  },

  {
    slug: 'adhd',
    name: 'ADHD',
    subtitle: 'Attention that moves differently',
    brief:
      "Children with ADHD don't lack attention — they have a different relationship with it. When something captures them, their focus is fierce; the challenge is choosing what gets the spotlight.",
    strengths: [
      'High energy that fuels creativity when channelled',
      'Intuitive, fast-thinking, often funny',
      'Empathetic — they feel things deeply',
      'Curious about everything; questions are constant',
    ],
    livedExperience:
      "Sitting still feels like being underwater. Boring tasks can feel impossible; interesting ones consume them entirely. Thoughts move faster than words. Time feels strange — minutes can be hours, hours can be minutes. They aren't ignoring you; their brain is somewhere fascinating.",
    therapies: ['ot', 'sensory', 'special-ed'],
    signsToNotice: [
      'Persistent restlessness or difficulty sustaining quiet activities',
      'Easily distracted; loses items often',
      'Impulsivity in conversation, decisions, or movement',
      'Forgetting daily routines despite intelligence and effort',
      'Significant differences between strong-interest and low-interest tasks',
    ],
    clinicalNote:
      'Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental difference involving attention regulation, impulse control, and executive function. Therapy supports skill-building and self-regulation; some families also work with paediatricians on medical support.',
    tone: 'coral',
  },

  {
    slug: 'cerebral-palsy',
    name: 'Cerebral Palsy',
    subtitle: 'Strength built one movement at a time',
    brief:
      "Cerebral palsy affects how the brain communicates with muscles — but it doesn't define what a child can become. With consistent therapy, children build strength, coordination, and independence step by step.",
    strengths: [
      'Determined. The work to do small things builds quiet resilience.',
      'Often deeply observant — having watched the world from where they sit',
      'Joyful in achievement; every milestone is earned',
      'Adaptive thinkers — they find creative ways through challenges',
    ],
    livedExperience:
      "Their muscles may not always do what they ask. Movement might be slower, less steady, or take more effort. Some days are stronger than others. The mind is sharp and present — the body is still learning to follow.",
    therapies: ['physio', 'ot', 'speech'],
    signsToNotice: [
      'Delayed motor milestones (sitting, crawling, walking)',
      'Stiffness or floppiness in muscle tone',
      'Asymmetrical movement — favouring one side',
      'Difficulty with fine motor tasks (grasping, feeding)',
      'Speech that\'s harder to produce despite clear comprehension',
    ],
    clinicalNote:
      'Cerebral Palsy (CP) is a group of disorders affecting movement and posture, usually arising before or shortly after birth. Severity varies widely. Physiotherapy and occupational therapy are foundational; speech therapy supports children whose oral motor control is also affected.',
    tone: 'sky',
  },

  {
    slug: 'down-syndrome',
    name: 'Down Syndrome',
    subtitle: 'Their own pace, their own joy',
    brief:
      "Children with Down syndrome learn, grow, and connect — they simply do it on their own timeline. With early support, they build full lives: school, friendships, work, independence.",
    strengths: [
      'Warmth. A natural way of putting others at ease',
      'Emotional intelligence — they read a room',
      'Persistent. They keep practising until something clicks',
      'Joyful presence; they remind a room what matters',
    ],
    livedExperience:
      "Some skills take longer to arrive. Speech may be slower to develop. Muscles work a bit harder. But the curiosity is there. The will to connect is there. What's needed isn't to be hurried — it's to be met where they are, with the right support beside them.",
    therapies: ['speech', 'ot', 'physio', 'special-ed'],
    signsToNotice: [
      'Down syndrome is usually diagnosed at or shortly after birth',
      'Early intervention from infancy makes the biggest difference',
      'Speech and language often need ongoing support through childhood',
      'Some children benefit from physiotherapy for low muscle tone',
      'Most children attend mainstream school with appropriate accommodations',
    ],
    clinicalNote:
      'Down Syndrome is a genetic condition caused by an extra copy of chromosome 21. It affects physical development and cognitive learning pace. Outcomes improve substantially with early, family-centred intervention starting in infancy.',
    tone: 'peach',
  },

  {
    slug: 'learning-disabilities',
    name: 'Learning Disabilities',
    subtitle: 'Minds wired for a different path',
    brief:
      "Dyslexia, dyscalculia, dysgraphia — these aren't reflections of intelligence. They're differences in how a child's brain processes letters, numbers, or written expression. With the right teaching, they thrive.",
    strengths: [
      'Often: rich verbal reasoning, creative thinkers, big-picture seers',
      'Strong visual or spatial intelligence',
      'Resourceful. They\'ve learned to work around obstacles',
      'Empathetic — they know what it\'s like to struggle',
    ],
    livedExperience:
      "Letters might flip. Numbers might dance. Writing the answer feels harder than knowing it. They might be the smartest voice in the conversation, then dread the homework that comes after. The frustration is real. So is what they can do when taught their way.",
    therapies: ['special-ed', 'ot'],
    signsToNotice: [
      'Reading slower or more effortful than peers despite practice',
      'Persistent difficulty with spelling or letter reversals',
      'Numbers and arithmetic feel disproportionately hard',
      'Writing — physical or organisational — is a struggle',
      'Bright in conversation, but academic performance lags',
    ],
    clinicalNote:
      'Specific Learning Disabilities (SLDs) include dyslexia (reading), dyscalculia (mathematics), and dysgraphia (writing). They are not related to intelligence. Targeted special education with multi-sensory teaching methods supports robust progress.',
    tone: 'sage',
  },

  {
    slug: 'developmental-delays',
    name: 'Developmental Delays',
    subtitle: 'Catching up, with the right support',
    brief:
      "Sometimes a child is taking longer to reach milestones — walking, talking, playing — and we're not yet sure why. Early intervention, even before a specific diagnosis, helps the brain do what it does best: grow.",
    strengths: [
      'Every child has their own arrival time — and their own gifts',
      'Children in early therapy often catch up fully',
      'Parents who notice early are giving their child a real advantage',
      'The brain is at its most plastic in these years — change is possible',
    ],
    livedExperience:
      "They may not be doing what other children their age are doing — not yet. Maybe they aren't walking. Maybe they aren't saying words. Maybe they don't play the way their cousin does. Often there's no clear reason. Sometimes a diagnosis comes later; sometimes it doesn't. What matters is helping the child today.",
    therapies: ['physio', 'ot', 'speech', 'sensory'],
    signsToNotice: [
      'Not meeting age-typical milestones (sitting, walking, first words)',
      'Loss of skills previously gained (regression)',
      'Limited response to people, or limited interest in surroundings',
      'Persistent difficulty with feeding, sleeping, or self-soothing',
      'Trust your instincts — parents are the first to notice when something is different',
    ],
    clinicalNote:
      'Developmental Delay describes a child whose progress is significantly behind expected milestones, in one or more domains, without (yet) a specific underlying diagnosis. Early intervention before age 5 has the largest impact; many children fully reach their peers with support.',
    tone: 'cream',
  },
];

/* ---------------------------------------------------------------------------
   Cross-reference helper — given therapy slugs, returns the matching service
   definitions for the "How we help" section of the modal.
--------------------------------------------------------------------------- */

import { SERVICES } from './services';

export type TherapyReference = { slug: string; name: string };

export function getTherapyDetails(slugs: string[]): TherapyReference[] {
  return slugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({ slug: s.slug, name: s.name }));
}
