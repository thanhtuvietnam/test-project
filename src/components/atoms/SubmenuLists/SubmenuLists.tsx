'use client';
import { subMenus } from '@/lib/declarations/constant';
import { cn } from '@/lib/utils';
import { transformText } from '@/lib/utils/transformtext';
import { SubmenuListsProps } from '@/types/type';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import { Bridge } from '../Bridge';

const subMenuVariants = {
  exit: { opacity: 0, y: 20 },
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.25,
  ease: 'easeInOut',
};

const Nub = ({ dir }) => (
  <motion.span
    transition={transition}
    animate={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0 }}
    className="absolute -top-[1rem] left-11 -translate-x-1/2 border-b-8 border-l-8 border-r-8 border-transparent border-b-semantic-alizarin dark:border-b-semantic-springGreen"
  />
);

const SubmenuLists: React.FC<SubmenuListsProps> = ({ dir, tab }) => (
  <motion.ul
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

    {subMenus[tab]?.map((subMenu, subIndex) => (
      <motion.li
        exit="exit"
        key={subIndex}
        initial="hidden"
        animate="visible"
        transition={transition}
        variants={subMenuVariants}
        className={cn(
          'select-none rounded-lg py-3',
          'text-bgdark/70 dark:text-bglight/70',
          'hover:border-r-2 hover:border-r-semantic-alizarin hover:text-bgdark dark:hover:border-r-semantic-goldenFizz dark:hover:text-bglight'
        )}
      >
        <Link
          className="bounce-effect py-5"
          href={`/${transformText(tab)}/${transformText(subMenu)}`}
        >
          {subMenu}
        </Link>
      </motion.li>
    ))}
  </motion.ul>
);

export default SubmenuLists;
