'use client';
import { Position } from '@/types/type';
import { motion } from 'framer-motion';

const Cursor = ({ position }: { position: Position }) => {
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
