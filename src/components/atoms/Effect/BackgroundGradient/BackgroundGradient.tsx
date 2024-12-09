'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React from 'react';

const BackgroundGradient = ({
  animate = true,
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
    initial: {
      backgroundPosition: '0 50%',
    },
  };

  return (
    <div className={cn('group/bgGradient relative p-0.5', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        className={cn(
          'absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition duration-500 will-change-transform group-hover/bgGradient:opacity-100',
          'dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#d0187d,transparent),radial-gradient(circle_farthest-side_at_100%_0,#315cc7,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#030a1b,transparent),radial-gradient(circle_farthest-side_at_0_0,#010101,#141316)]'
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        className={cn(
          'absolute inset-0 z-[1] rounded-3xl will-change-transform',
          'dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#d0187d,transparent),radial-gradient(circle_farthest-side_at_100%_0,#315cc7,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#010101,#141316)]'
        )}
      />

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
};

export default BackgroundGradient;
