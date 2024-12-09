'use client';
import { Position } from '@/types/typenavbar';
import { motion } from 'motion/react';
import { JSX } from 'react';

const Cursor = ({ position }: { position: Position }): JSX.Element => {
  return (
    <motion.li
      className="main-themes absolute z-0 h-12 rounded-full backdrop-blur-3xl"
      animate={{
        ...position,
      }}
    />
  );
};
export default Cursor;
