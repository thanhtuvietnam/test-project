'use client';
import { SubmenuLists } from '@/components/atoms';
import { subMenus, tabs } from '@/lib/declarations/constant';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';

const TabLists: React.FC = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const handleSubmenuToggle = (tab: string) => {
    setOpenSubmenu(openSubmenu === tab ? null : tab);
  };

  return (
    <div className="navClient ml-3">
      <ul className={cn('not-prose hidden gap-5 lg:flex')}>
        {tabs.map((tab, index) => (
          <li key={index} className={cn('relative py-3')}>
            {['THỂ LOẠI', 'QUỐC GIA'].includes(tab) ? (
              <span
                className={cn('cursor-pointer select-none')}
                onClick={() => handleSubmenuToggle(tab)}
              >
                {tab}
              </span>
            ) : (
              <Link href="/" className="py-5">
                {tab}
              </Link>
            )}
            <SubmenuLists
              tab={tab}
              subMenus={subMenus}
              openSubmenu={openSubmenu}
            />
          </li>
        ))}
      </ul>
      <button className={cn('hidden py-3 max-lg:flex')}>Sidebar</button>
    </div>
  );
};

export default TabLists;
