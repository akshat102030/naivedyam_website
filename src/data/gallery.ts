export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export const CENTER_GALLERY: GalleryImage[] = [
  {
    id: 'center1',
    src: '/images/center/center1.jpeg',
    alt: 'Sensory gym at Naivedyam with colorful foam mats, ceiling swings, and climbing equipment',
    caption: 'Sensory gym — swings, climbing, and cushioned floor play',
  },
  {
    id: 'center2',
    src: '/images/center/center2.jpeg',
    alt: 'Therapy room with ball pit, crawl tunnel, exercise balls, and ceiling-mounted swings',
    caption: 'Therapy room — ball pit, tunnel, and movement equipment',
  },
  {
    id: 'center3',
    src: '/images/center/center3.jpeg',
    alt: 'Reception and waiting area with seating at Naivedyam Rehabilitation Center',
    caption: 'Reception & waiting area — a calm place for families',
  },
  {
    id: 'center4',
    src: '/images/center/center4.jpeg',
    alt: 'Main therapy hall at Naivedyam with mats, swings, and the center signage on the wall',
    caption: 'Main therapy hall — where sessions come alive',
  },
];
