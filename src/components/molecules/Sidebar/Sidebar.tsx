'use client';

import { Avatar, ProfileSubmenu, SidebarContent } from '@/components/atoms';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import { useClickAway, useToggle } from 'react-use';

import { Logo } from '../Logo';

// Định nghĩa các biến animation
const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
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

// Định nghĩa kiểu cho props
interface SidebarProps {
  isOpen: boolean;
  setOpenSidebar: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setOpenSidebar }) => {
  const [isDropdownOpen, toggleDropdown] = useToggle(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Hàm để đóng dropdown khi click ra ngoài
  useClickAway(dropdownRef, () => {
    toggleDropdown(false);
  });

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
            className={cn(
              'fixed inset-0 z-40',
              'block lg:hidden',
              'bg-black/30 backdrop-blur-md'
            )}
            onClick={() => setOpenSidebar(false)}
          />

          {/* Sidebar */}
          <motion.aside
            exit="closed"
            animate="open"
            initial="closed"
            ref={dropdownRef}
            transition={transition}
            variants={sidebarVariants}
            aria-label="Sidebar Navigation"
            className={cn(
              'h-screen w-2/3',
              'block backdrop-blur-lg lg:hidden',
              'fixed inset-0 left-0 z-[9999]',
              'border-themes-2 border-r-2',
              'bg-white/80 dark:bg-gray-900/80',
              'fifth-themes shadow-custom shadow-lg'
            )}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex h-16 items-center justify-between border-b px-4">
                <div className="flex items-center gap-3">
                  <Logo />
                </div>

                {/* Nút Đóng Sidebar */}
                <button
                  aria-label="Đóng Sidebar"
                  className="ml-2 text-gray-700 hover:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-white"
                  onClick={() => setOpenSidebar(false)}
                >
                  ✕
                </button>
              </div>

              {/* Avatar và Lời Chào (Dành cho màn hình nhỏ) */}
              <div
                className="center-flex w-full cursor-pointer gap-2 px-4 pt-4"
                onClick={toggleDropdown}
              >
                <div className="center-flex gap-2">
                  <Avatar />
                  <span className="truncate text-gray-700 dark:text-gray-300">
                    Xin chào, Tú Lưu!
                  </span>
                </div>
                <button>
                  <icons.IoSettingsSharp
                    className={cn(
                      isDropdownOpen
                        ? 'rotate-180 transition-all duration-300'
                        : 'rotate-0 transition-all duration-300'
                    )}
                  />
                </button>
              </div>

              {/* Dropdown */}
              <ProfileSubmenu isDropdownOpen={isDropdownOpen} />

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
