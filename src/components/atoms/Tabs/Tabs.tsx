'use client';
import { SubmenuLists, ChevronDown } from '@/components/atoms';
import { subMenus } from '@/lib/declarations/constant';
import { cn } from '@/lib/utils';
import { transformText } from '@/lib/utils/transformtext';
import { Position } from '@/types/type';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState, useRef } from 'react';

interface TabsProps {
  tab: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}

const Tabs: React.FC<TabsProps> = ({ setPosition, tab }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const ref = useRef<null | HTMLLIElement>(null);

  const handleMouseEnter = () => {
    if (!ref?.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft,
      opacity: 1,
      width,
    });

    setOpenSubmenu(tab);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(null);
  };

  return (
    <li
      ref={ref}
      className={cn(
        'relative z-10 h-full',
        'h-full text-nowrap rounded-full duration-200',
        'text-bglight',
        'mix-blend-difference'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {['THỂ LOẠI', 'QUỐC GIA'].includes(tab) ? (
        <>
          <div className="relative">
            <ChevronDown tab={tab} openSubmenu={openSubmenu} />

            {/* submenu */}
            <SubmenuLists
              tab={tab}
              subMenus={subMenus}
              openSubmenu={openSubmenu}
            />
          </div>
        </>
      ) : (
        <Link className="px-2 py-1.5" href={`/${transformText(tab)}`}>
          {tab}
        </Link>
      )}
    </li>
  );
};

export default Tabs;
