'use client';

import { cn } from '@/libs/utils/classnames';
import { MotionValue, motion, useTransform } from 'motion/react';
import { ReactNode } from 'react';

export type DockIconProps = {
  className?: string;
  children: ReactNode;
};

export function DockIcon({ children, className, ...rest }: DockIconProps) {
  const restProps = rest as Record<string, unknown>;
  const width = restProps['width'] as MotionValue<number>;
  const widthTransform = useTransform(width, (val) => val / 2);

  return (
    <motion.div style={{ width: widthTransform }} className={cn('flex items-center justify-center', className)}>
      {children}
    </motion.div>
  );
}
