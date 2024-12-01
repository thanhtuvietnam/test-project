'use client';
import { Cursor, SidebarBtn, Tab } from '@/components/atoms';
import { tabs } from '@/lib/declarations/constant';
import { cn } from '@/lib/utils';
import { Position } from '@/types/type';
import React, { useState } from 'react';
import { useMedia } from 'react-use';

import { Sidebar } from '../Sidebar';

const TabLists: React.FC = () => {
  const isComputer = useMedia('(min-width: 1024px)', false);
  const [position, setPosition] = useState<Position>({
    left: 0,
    opacity: 0,
    width: 0,
  });
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [dir, setDir] = useState<'r' | 'l' | null>(null);

  const handleSetSelected = (val: string | null) => {
    if (val === null) {
      setDir(null);
    } else if (selected === 'THỂ LOẠI' && val === 'QUỐC GIA') {
      setDir('r');
    } else if (selected === 'QUỐC GIA' && val === 'THỂ LOẠI') {
      setDir('l');
    }
    setSelected(val);
  };

  const handleMouseLeave = () => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
    handleSetSelected(null);
  };

  return (
    <ul
      className={cn(
        'rounded-l-full',
        'relative z-50 items-center justify-center lg:flex',
        'w-fit cursor-pointer gap-0 p-1',
        'bg-white dark:bg-gray-900'
      )}
      onMouseLeave={handleMouseLeave}
    >
      {isComputer ? (
        <>
          {tabs.map((tab, i) => (
            <Tab
              dir={dir}
              key={tab}
              index={i}
              tab={tab}
              selected={selected}
              setPosition={setPosition}
              handleSetSelected={handleSetSelected}
            />
          ))}
          <Cursor position={position} />
        </>
      ) : (
        <>
          <SidebarBtn
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
          {openSidebar && <Sidebar />}
        </>
      )}
    </ul>
  );
};

export default TabLists;
