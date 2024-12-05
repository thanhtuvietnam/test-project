'use client';
import { SidebarBtn, ThemeToggleButton } from '@/components/atoms';
import { Sidebar, TabLists } from '@/components/molecules';
// import { TabLists } from '@/components/molecules';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import React from 'react';
import { useScroll, useToggle } from 'react-use';

// const TabLists = dynamic(
//   () => import('@/components/molecules/TabLists/TabLists'),
//   { ssr: true }
// );

const Navbar: React.FC = () => {
  const scrollRef = React.useRef<HTMLElement>(
    null
  ) as React.RefObject<HTMLElement>;

  const { y } = useScroll(scrollRef);

  // const [openSidebar, { setFalse, setTrue }] = useToggle(false);

  const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);
  // Định nghĩa hàm setOpenSidebar để thay thế setState
  // const setOpenSidebarFn = (value: boolean) => {
  //   if (value) {
  //     setTrue(); // Mở sidebar
  //   } else {
  //     setFalse(); // Đóng sidebar
  //   }
  // };

  return (
    <>
      <nav
        ref={scrollRef}
        aria-label="Main Navigation"
        className={cn(
          'sticky z-40',
          'center-flex wrapper my-1 select-none',
          'shadow-custom rounded-full border',
          'border-themes-2 border',
          'bg-white dark:bg-gray-900',
          y > 60 ? 'top-[60px]' : 'top-0'
        )}
      >
        {/* desktop */}
        <TabLists className="hidden lg:block" />

        {/* mobile */}
        <SidebarBtn
          openSidebar={openSidebar}
          aria-label="Sidebar Button"
          className={'block lg:hidden'}
          setOpenSidebar={setOpenSidebar}
          // setOpenSidebar={setOpenSidebarFn}
        />

        <Sidebar
          isOpen={openSidebar}
          setOpenSidebar={setOpenSidebar}
          // setOpenSidebar={setOpenSidebarFn}
        />

        <div aria-label="Right Navbar" className="mr-2 flex gap-5">
          <span>navbar right</span>
          <ThemeToggleButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
