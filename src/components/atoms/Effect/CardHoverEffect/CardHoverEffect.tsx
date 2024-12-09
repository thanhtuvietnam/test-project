'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

interface CardHoverEffectProps {
  idx: number;
  className?: string;
  children: React.ReactNode;
}

const CardHoverEffect: React.FC<CardHoverEffectProps> = ({
  children,
  className,
  idx,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Link
      href="/film-info"
      className="group relative block h-full w-full p-2"
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            initial={{ opacity: 0 }}
            layoutId="hoverBackground"
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { delay: 0.2, duration: 0.15 },
            }}
            className={cn(
              'absolute inset-0 block h-full w-full rounded-3xl bg-main-deepCerise-500/[0.2] dark:bg-main-aliceBlue-700/[0.2]'
            )}
          />
        )}
      </AnimatePresence>
      {children}
    </Link>
  );
};

export default CardHoverEffect;
