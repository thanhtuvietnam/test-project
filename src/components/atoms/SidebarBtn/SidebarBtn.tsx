'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const SidebarBtn: React.FC = () => {
  const [crossed, setCrossedState] = useState<boolean>(false);

  return (
    <button
      aria-expanded={crossed}
      className={
        'flex aspect-square h-fit flex-col items-center justify-center rounded-full bg-transparent px-2 py-1.5'
      }
      onClick={() => setCrossedState((e) => !e)}
    >
      <motion.div
        initial={{ translateY: '-3px' }}
        transition={{ bounce: 0, duration: 0.1 }}
        className="border-t-2 border-t-bgdark dark:border-t-bglight"
        style={{
          transformOrigin: 'center',
          width: '20px',
        }}
        animate={
          crossed
            ? { rotate: '45deg', translateY: '1px' }
            : { rotate: '0deg', translateY: '-3px' }
        }
      />
      <motion.div
        initial={{ translateY: '3px' }}
        transition={{ bounce: 0, duration: 0.1 }}
        className="border-t-2 border-t-bgdark dark:border-t-bglight"
        style={{
          transformOrigin: 'center',
          width: '20px',
        }}
        animate={
          crossed
            ? { rotate: '-45deg', translateY: '-1px' }
            : { rotate: '0deg', scaleX: 1, translateY: '3px' }
        }
      />
    </button>
  );
};

export default SidebarBtn;
