'use client';
import { Cursor, SidebarBtn, Tab } from '@/components/atoms';
import { tabs } from '@/lib/declarations/constant';
import { cn } from '@/lib/utils';
import { Position, TabState } from '@/types/typenavbar';
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

  const [tabState, setTabState] = useState<TabState>({
    clickEffect: null,
    dir: null,
    selected: null,
    subMenuActiveId: null,
  });

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleSetTabState = (val: string | null) => {
    setTabState((prev: TabState) => ({
      ...prev,
      dir:
        val === null
          ? null
          : prev.selected === 'THỂ LOẠI' && val === 'QUỐC GIA'
            ? 'r'
            : prev.selected === 'QUỐC GIA' && val === 'THỂ LOẠI'
              ? 'l'
              : prev.dir,
      selected: val,
    }));
  };

  const handleMouseLeave = () => {
    setPosition((prev: Position) => ({ ...prev, opacity: 0 }));
    handleSetTabState(null);
  };

  return (
    <ul
      className={cn(
        'rounded-l-full',
        'relative z-50 items-center justify-center lg:flex',
        'w-fit cursor-pointer gap-0 px-0.5 py-0.5',
        'bg-white dark:bg-gray-900'
      )}
      onMouseLeave={handleMouseLeave}
    >
      {isComputer ? (
        <>
          {tabs.map((tab) => (
            <Tab
              tab={tab}
              key={tab.label}
              tabState={tabState}
              setTabState={setTabState}
              setPosition={setPosition}
              handleSetTabState={handleSetTabState}
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
