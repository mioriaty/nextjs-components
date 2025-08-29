'use client';

import { useDock } from '@/libs/components/dock/context';
import { cn } from '@/libs/utils/classnames';
import { useMotionValue, useSpring, useTransform } from 'motion/react';
import { motion } from 'motion/react';
import { Children, cloneElement, useRef } from 'react';

export type DockItemProps = {
  className?: string;
  children: React.ReactNode;
};

export function DockItem({ children, className }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { distance, magnification, mouseX, spring } = useDock();
  const isHovered = useMotionValue(0);
  const mouseDistance = useTransform(mouseX, (val) => {
    const domRect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - domRect.x - domRect.width / 2;
  });
  const widthTransform = useTransform(mouseDistance, [-distance, 0, distance], [40, magnification, 40]);
  const width = useSpring(widthTransform, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={cn('relative inline-flex items-center justify-center', className)}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) => cloneElement(child as React.ReactElement<any>, { width, isHovered }))}
    </motion.div>
  );
}
