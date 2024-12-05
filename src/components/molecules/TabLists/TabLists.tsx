'use client';
import { Cursor, SidebarBtn } from '@/components/atoms';
import { tabs } from '@/lib/declarations/constant';
import { cn } from '@/lib/utils';
import { Base } from '@/types/type';
import { Position, TabState } from '@/types/typenavbar';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useMedia } from 'react-use';

import { Sidebar } from '../Sidebar';

const Tab = dynamic(() => import('@/components/atoms/Tab/Tab'), { ssr: true });

const TabLists = ({ className }: Base) => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    opacity: 0,
    width: 0,
  });

  const [tabState, setTabState] = useState<TabState>({
    clickEffect: 'TRANG CHỦ',
    dir: null,
    selected: null,
    subMenuActiveId: null,
  });

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
      aria-label="Left Navbar"
      className={cn(
        className,
        'rounded-l-full',
        'bg-white dark:bg-gray-900',
        'w-fit cursor-pointer gap-0 px-0.5 py-0.5',
        'relative z-50 items-center justify-center lg:flex'
      )}
      onMouseLeave={handleMouseLeave}
    >
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
    </ul>
  );
};

export default TabLists;
