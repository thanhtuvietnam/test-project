'use client';
import { SidebarContent } from '@/components/atoms';
import { tabs } from '@/lib/declarations/constant';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { Logo } from '../Logo';

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1.2 },
};

const sidebarVariants = {
  closed: { x: '-100%' },
  open: { x: 0 },
};

const transition = {
  damping: 20,
  stiffness: 100,
  type: 'spring',
};
const Sidebar = ({ isOpen, setOpenSidebar }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            exit="closed"
            animate="open"
            initial="closed"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
            aria-label="Close Sidebar Overlay"
            className={cn('fixed inset-0 z-40', 'bg-black/30 backdrop-blur-md')}
            onClick={() => setOpenSidebar(false)}
            // onClick={() => toggleSidebar(false)}
          />

          {/* Sidebar */}
          <motion.aside
            exit="closed"
            animate="open"
            initial="closed"
            transition={transition}
            variants={sidebarVariants}
            aria-label="Sidebar Navigation"
            className={cn(
              'h-screen w-2/3',
              'backdrop-blur-lg',
              'fixed inset-0 left-0 z-[9999]',
              'border-themes-2 border-r-2',
              'bg-white/80 dark:bg-gray-900/80',
              'fifth-themes shadow-custom shadow-lg'
            )}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="center-flex border-themes h-16 border-b px-4">
                <Logo />
                <button onClick={() => setOpenSidebar(false)}>tat</button>
              </div>

              {/* Navigation */}
              <SidebarContent />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
