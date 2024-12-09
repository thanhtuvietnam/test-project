'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React, { useMemo } from 'react';

interface TextEffectProps {
  children: string;
  as?: React.ElementType;
  duration?: number;
  spread?: number;
  className?: string;
}

const TextEffect: React.FC<TextEffectProps> = ({
  as: Component = 'span',
  children,
  className,
  duration = 2,
  spread = 3,
}) => {
  const MotionComponent = motion(Component);

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <MotionComponent
      animate={{ backgroundPosition: '1% center' }}
      initial={{ backgroundPosition: '101% center' }}
      style={
        {
          '--spread': `${dynamicSpread}px`,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color),var(--base-color))`,
        } as React.CSSProperties
      }
      className={cn(
        // Đặt nền và cắt văn bản để hiển thị hiệu ứng shimmer
        'relative inline-block bg-[length:250%_100%,auto] bg-clip-text',
        // Đặt màu nền và màu gradient cơ bản
        'text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]',
        // Đặt gradient nền cho hiệu ứng shimmer
        '[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]',
        //Đặt màu nền và gradient cho chế độ tối
        'dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
        className,
      )}
      transition={{
        duration,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      {children}
    </MotionComponent>
  );
};

export default TextEffect;
