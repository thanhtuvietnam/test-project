'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const subMenuVariants = {
  exit: { opacity: 0, y: -20 },
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.3,
  ease: 'easeInOut',
};

interface SubmenuListsProps {
  subMenus: {
    [key: string]: string[];
  };
  tab: string;
  openSubmenu: string | null;
}
const SubmenuLists: React.FC<SubmenuListsProps> = ({
  openSubmenu,
  subMenus,
  tab,
}) => {
  return (
    <>
      <AnimatePresence>
        {subMenus[tab] && openSubmenu === tab && (
          <motion.ul
            exit="exit"
            initial="hidden"
            animate="visible"
            transition={transition}
            variants={subMenuVariants}
            className={cn(
              'absolute top-14 z-50 grid w-[25rem] grid-cols-3 rounded-2xl border p-1 text-center shadow-md',
              'bg-main-summerSky-200/50 dark:bg-bglight/15',
              'border-main-deepCerise-350 shadow-main-deepCerise-400/40 dark:border-main-summerSky-400 dark:shadow-cyan-600/50',
              openSubmenu === tab ? 'grid' : 'hidden'
            )}
          >
            <motion.div
              exit="exit"
              initial="hidden"
              animate="visible"
              transition={transition}
              variants={subMenuVariants}
              className="absolute -top-[1.1rem] left-9 h-0 w-0 -translate-x-1/2 border-b-8 border-l-8 border-r-8 border-transparent border-b-main-deepCerise-500 dark:border-b-semantic-springGreen"
              onClick={(e) => e.stopPropagation()}
            />
            {subMenus[tab].map((subMenu, subIndex) => (
              <motion.li
                key={subIndex}
                transition={transition}
                exit={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 80 }}
                className={cn(
                  'select-none rounded-lg py-3',
                  'text-bgdark/70 dark:text-bglight/70',
                  'hover:border-r-2 hover:border-r-semantic-alizarin hover:text-bgdark dark:hover:border-r-semantic-goldenFizz dark:hover:text-bglight'
                )}
              >
                <Link className="py-5" href="/register">
                  {subMenu}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default SubmenuLists;
