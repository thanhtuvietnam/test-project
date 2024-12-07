'use client';

import { ProfileItems } from '@/lib/declarations/constant';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

// Variants for Dropdown Container
const dropdownVariants = {
  exit: { opacity: 0, scale: 0.95, y: -10 },
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

// Variants for list
const listVariants = {
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
    x: -20,
  },
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1 },
};

// Variants for each item in the list
const itemVariants = {
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
    x: -20,
  },
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

interface ProfileSubmenuProps {
  isDropdownOpen: boolean;
}

const ProfileSubmenu = ({ isDropdownOpen }: ProfileSubmenuProps) => {
  return (
    <AnimatePresence>
      {isDropdownOpen && (
        <motion.div
          exit="exit"
          key="dropdown"
          initial="hidden"
          animate="visible"
          variants={dropdownVariants}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="flex flex-col gap-2 px-4 pt-1 font-sans"
        >
          <motion.ul
            exit="exit"
            initial="hidden"
            animate="visible"
            key="profile-submenu"
            variants={listVariants}
            className="mt-1 space-y-1 pl-4"
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {ProfileItems &&
              ProfileItems.map((item, index) => (
                <motion.li
                  exit="exit"
                  key={item.id}
                  initial="hidden"
                  animate="visible"
                  className="rounded-2xl"
                  variants={itemVariants}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.2,
                    ease: 'easeInOut',
                  }}
                >
                  {item.path ? (
                    <Link
                      href={item.path}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      {item.icon && <item.icon />}
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className="flex w-full items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                      onClick={() => {
                        console.log('Logout...');
                      }}
                    >
                      {item.icon && <item.icon />}
                      {item.label}
                    </button>
                  )}
                </motion.li>
              ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileSubmenu;
