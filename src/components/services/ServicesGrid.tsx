'use client';

import { ServiceCard } from './ServiceCard';
import { SERVICES } from '@/data/services';

/**
 * Bento grid layout:
 *   mobile     → 1 column stack, all cards equal
 *   tablet     → 2 columns, wide card spans both
 *   desktop    → 3 columns with ABA as a 2×2 anchor and Special Ed as 3-wide foundation
 *
 * `grid-flow-dense` lets smaller cards fill gaps the large anchor creates.
 */
export function ServicesGrid() {
  return (
    <div
      className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-4 md:gap-5
        grid-flow-row-dense
        auto-rows-fr
      "
    >
      {SERVICES.map((service, i) => (
        <ServiceCard key={service.slug} service={service} index={i} />
      ))}
    </div>
  );
}
