'use client';

import { useCountUp } from '@/hooks/useCountUp';
import { cn } from '@/lib/utils';

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration,
  className,
}: Props) {
  const { ref, value: current } = useCountUp(value, { duration });

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}
