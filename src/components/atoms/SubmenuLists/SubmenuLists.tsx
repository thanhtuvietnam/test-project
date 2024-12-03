'use client';
import { useClickOutSide } from '@/hooks/index';
import { cn } from '@/lib/utils';
import { SubmenuListsProps } from '@/types/typenavbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { JSX, useRef } from 'react';

import { Bridge } from '../Bridge';

const transition = {
  duration: 0.25,
  ease: 'easeInOut',
};

const subMenuVariants = {
  exit: { opacity: 0, y: 20 },
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Nub = ({ dir }) => (
  <motion.span
    transition={transition}
    animate={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0 }}
    className="absolute -top-[1rem] left-11 -translate-x-1/2 border-b-8 border-l-8 border-r-8 border-transparent border-b-semantic-alizarin dark:border-b-semantic-springGreen"
  />
);

const SubmenuLists = ({
  dir,
  handleSetTabState,
  refLi,
  setSubMenuActiveId,
  subMenuActiveId,
  tab,
}: SubmenuListsProps): JSX.Element => {
  const ref = useRef(null);

  const handleClick = (id: string | null) => {
    if (subMenuActiveId === id) {
      setSubMenuActiveId(null);
    } else {
      setSubMenuActiveId(id);
    }
  };

  useClickOutSide([ref, refLi], () => {
    handleSetTabState(null);
  });

  return (
    <motion.ul
      ref={ref}
      transition={transition}
      animate={{ opacity: 1, x: 0 }}
      initial={{ x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0 }}
      className={cn(
        'backdrop-blur-3xl',
        'bg-bglight/30 dark:bg-bgdark/30',
        'absolute top-14 z-50 grid w-[25rem] grid-cols-3 rounded-2xl border p-1 text-center shadow-md',
        'border-main-deepCerise-350 shadow-main-deepCerise-500/40 dark:border-main-summerSky-400 dark:shadow-cyan-600/50'
      )}
    >
      <Bridge className={'-top-[2rem] z-10 h-10 w-[25rem]'} />

      <Nub dir={dir} />

      {tab?.subMenus?.map((subMenu) => (
        <motion.li
          exit="exit"
          key={subMenu.id}
          initial="hidden"
          animate="visible"
          transition={transition}
          variants={subMenuVariants}
          className="select-none rounded-lg"
        >
          <Link
            href={subMenu.path}
            className={cn(
              'block w-full rounded-lg py-3',
              'text-bgdark/70 dark:text-bglight/70',
              'transition-all duration-200',
              subMenuActiveId === subMenu.id
                ? 'border-r-4 border-r-green-800 font-semibold text-bgdark dark:border-r-semantic-springGreen dark:text-bglight'
                : 'border-r-4 border-transparent',
              'hover:border-r-4 hover:border-r-semantic-alizarin hover:font-semibold hover:text-bgdark dark:hover:border-r-main-deepCerise-500 dark:hover:text-bglight'
            )}
            onClick={() => handleClick(subMenu.id)}
          >
            {subMenu.label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SubmenuLists;
