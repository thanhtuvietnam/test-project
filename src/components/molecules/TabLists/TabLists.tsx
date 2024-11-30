'use client';
import { Cursor, SidebarBtn, Tabs } from '@/components/atoms';
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

  return (
    <ul
      className={cn(
        'rounded-l-full',
        'relative z-50 items-center justify-center lg:flex',
        'w-fit cursor-pointer gap-0 px-0.5 py-2',
        'bg-white dark:bg-gray-900'
        // 'bg-main-summerSky-200/50 dark:bg-main-aliceBlue-100/15'
      )}
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
    >
      <>
        {isComputer ? (
          <>
            {/* maintab */}
            {tabs.map((tab, i) => (
              <Tabs key={i} tab={tab} setPosition={setPosition} />
            ))}
            <Cursor position={position} />
          </>
        ) : (
          <>
            {/* sidebar */}
            <SidebarBtn
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
            {openSidebar && <Sidebar />}
          </>
        )}
      </>
    </ul>
  );
};

export default TabLists;
