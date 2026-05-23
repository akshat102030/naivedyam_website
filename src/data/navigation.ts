export type NavLink = {
  label: string;
  href: string;
  /** If true, link scrolls within the landing page (hash). If false, it's a route. */
  isAnchor?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About',         href: '#about',        isAnchor: true },
  { label: 'Services',      href: '#services',     isAnchor: true },
  { label: 'Conditions',    href: '#conditions',   isAnchor: true },
  { label: 'Progress',      href: '#progress',     isAnchor: true },
  { label: 'Gallery',       href: '#gallery',      isAnchor: true },
  { label: 'Testimonials',  href: '#testimonials', isAnchor: true },
];

export const PRIMARY_CTA = {
  label: 'Book Free Assessment',
  href: '#assessment',
};
