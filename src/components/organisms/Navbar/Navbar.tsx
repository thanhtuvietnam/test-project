'use client';
import { SidebarBtn, ThemeToggleButton } from '@/components/atoms';
import { Sidebar, TabLists } from '@/components/molecules';
import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';
import { useScroll } from 'react-use';

const Navbar: React.FC = () => {
  const scrollRef = useRef<HTMLElement>(null!);
  const { y } = useScroll(scrollRef);

  const [openSidebar, setOpenSidebar] = useState(false);
  const [crossed, setCrossed] = useState(false);
  const [clickEffectSidebar, setClickEffectSidebar] = useState<string | null>(
    null
  );
  const [clickSubMenuEffectSidebar, setClickSubMenuEffectSidebar] = useState<
    string | null
  >(null);

  return (
    <nav
      ref={scrollRef}
      aria-label="Main Navigation"
      className={cn(
        'center-flex wrapper shadow-custom border-themes-2 sticky z-40 my-1 select-none rounded-full border bg-white p-2 lg:p-0 dark:bg-gray-900',
        y > 60 ? 'top-[60px]' : 'top-0'
      )}
    >
      <TabLists className="hidden lg:block" />
      <Sidebar
        isOpen={openSidebar}
        setCrossedState={setCrossed}
        setOpenSidebar={setOpenSidebar}
        clickEffect={clickEffectSidebar}
        setClickEffect={setClickEffectSidebar}
        clickSubMenuEffect={clickSubMenuEffectSidebar}
        setClickSubMenuEffect={setClickSubMenuEffectSidebar}
      />
      <div aria-label="Right Navbar" className="ml-1 flex gap-2 lg:mr-2">
        <ThemeToggleButton />
        <span className="block lg:hidden">navbar right</span>
      </div>
      <SidebarBtn
        crossed={crossed}
        className="lg:hidden"
        openSidebar={openSidebar}
        aria-label="Sidebar Button"
        setCrossedState={setCrossed}
        setOpenSidebar={setOpenSidebar}
      />
    </nav>
  );
};

export default Navbar;
