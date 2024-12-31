'use client';
import { BorderEffect, ChevronDown, SubmenuLists } from '@/components/atoms';
import { cn } from '@/lib/utils';
import { TabProps } from '@/types/typenavbar';
// import dynamic from 'next/dynamic';
import Link from 'next/link';
import { JSX, useRef } from 'react';

// const SubmenuLists = dynamic(() => import('@/components/atoms/SubmenuLists/SubmenuLists'), {
//   ssr: true,
// });

const Tab = ({ handleSetTabState, setPosition, setTabState, tab, tabState }: TabProps): JSX.Element => {
  const ref = useRef<HTMLLIElement>(null);

  const handleMouseEnter = (): void => {
    if (!ref?.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      width,
      left: ref.current.offsetLeft,
      opacity: 1,
    });
    handleSetTabState(tab.label);
  };

  const handleClick = (): void => {
    setTabState((prev) => ({
      ...prev,
      clickEffect: tab.label,
    }));
    handleSetTabState(tab.label);
  };

  const handleSetActiveId: React.Dispatch<React.SetStateAction<string | null>> = (id) => {
    setTabState((prev) => ({
      ...prev,
      subMenuActiveId: id as string | null,
    }));
  };

  return (
    <li
      ref={ref}
      className={cn('relative z-10 font-sans', 'transition-all duration-300', 'hover-text py-3 text-bgdark/60 dark:text-bglight/60', 'h-full text-nowrap rounded-full duration-200', tabState.clickEffect === tab.label && 'text-bgdark dark:text-bglight')}
      role="tab"
      tabIndex={0}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick();
        }
      }}
    >
      <BorderEffect isActive={tabState.clickEffect === tab.label} />

      {tab.subMenus && tab.subMenus.length > 0 ? (
        <div className="relative">
          <ChevronDown tab={tab.label} rotate={tabState.selected} />

          {tabState.selected === tab.label && (
            <>
              {tab.subMenus && (
                <SubmenuLists
                  refLi={ref}
                  tab={{
                    subMenus: tab.subMenus,
                  }}
                  handleSetTabState={handleSetTabState}
                  dir={tabState.dir as 'r' | 'l' | null}
                  setSubMenuActiveId={handleSetActiveId}
                  subMenuActiveId={tabState.subMenuActiveId}
                />
              )}
            </>
          )}
        </div>
      ) : (
        <Link href={`${tab.path}`} className={cn('px-2 py-4')} onClick={() => handleSetActiveId(null)}>
          {tab.label}
        </Link>
      )}
    </li>
  );
};

export default Tab;
