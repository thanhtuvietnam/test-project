'use client';
import { tabs } from '@/lib/declarations/constant';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

// Variants cho danh sách chính
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Variants cho từng mục trong danh sách chính
const itemVariants = {
  exit: { opacity: 0, x: -50 },
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

// Variants cho danh sách con (submenu)
const sublistVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const SidebarContent: React.FC = () => {
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);

  const toggleSubMenu = (id: string) => {
    setOpenSubMenus((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <nav
      aria-label="Sidebar Navigation"
      className="flex-1 overflow-y-auto py-4 font-sans"
    >
      <ul className="px-3">
        {tabs.map((tab) => (
          <li key={tab.id} className="text-custom-blur hover:text-custom">
            {tab.subMenus ? (
              <div>
                <button
                  className={cn(
                    'center-flex w-full gap-3 rounded-lg px-4 py-3 hover:font-semibold',
                    'hover:bg-gray-100 dark:hover:bg-gray-800',
                    'transition-colors duration-200'
                  )}
                  onClick={() => toggleSubMenu(tab.id)}
                >
                  <div className="custom-flex-1 gap-3">
                    {tab.icon && <tab.icon />}
                    {tab.label}
                  </div>
                  <span>{openSubMenus.includes(tab.id) ? '-' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openSubMenus.includes(tab.id) && (
                    <motion.ul
                      exit="hidden"
                      initial="hidden"
                      animate="visible"
                      variants={sublistVariants}
                      className="mt-2 space-y-1 pl-6"
                    >
                      {tab.subMenus.map((sub) => (
                        <motion.li key={sub.id} variants={itemVariants}>
                          <Link
                            href={sub.path}
                            className={cn(
                              'flex items-center gap-3 rounded-lg px-4 py-2',
                              'hover:bg-gray-200 dark:hover:bg-gray-700',
                              'transition-colors duration-200'
                            )}
                          >
                            {sub.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div variants={itemVariants}>
                <Link
                  href={tab.path}
                  className={cn(
                    'custom-flex-1 gap-3 rounded-lg px-4 py-3',
                    'hover:bg-gray-100 dark:hover:bg-gray-800',
                    'transition-colors duration-200 hover:font-semibold'
                  )}
                >
                  {tab.icon && <tab.icon />}
                  {tab.label}
                </Link>
              </motion.div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarContent;
