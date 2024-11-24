'use client';
import { SidebarBtn, SubmenuLists } from '@/components/atoms';
import { subMenus, tabs, titleLists } from '@/lib/declarations/constant';
import { cn } from '@/lib/utils';
import { transformText } from '@/lib/utils/transformtext';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useMedia } from 'react-use';

import { Sidebar } from '../Sidebar';

const TabLists: React.FC = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const fired = useRef(false);
  const defaultSelectedTabIndex = 0;
  const [currentLink, setCurrentLink] = useState<{
    index: number;
    left: number | undefined;
    width: number | undefined;
  }>({
    index: defaultSelectedTabIndex,
    left: undefined,
    width: undefined,
  });
  const isComputer = useMedia('(min-width: 1024px)', false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  // const defaultSelectedTabStyles = [
  //   '[&:nth-child(1)]:dark:bg-blue [&:nth-child(1)]:bg-neutral-950',
  //   '[&:nth-child(2)]:dark:bg-blue [&:nth-child(2)]:bg-neutral-950',
  //   '[&:nth-child(3)]:dark:bg-blue [&:nth-child(3)]:bg-neutral-950',
  //   '[&:nth-child(4)]:dark:bg-blue [&:nth-child(4)]:bg-neutral-950',
  // ];
  useEffect(() => {
    if (isComputer) {
      fired.current = true;
      setCurrentLink(() => ({
        index: defaultSelectedTabIndex,
        left: document.getElementById('uuu-btn-' + defaultSelectedTabIndex)
          ?.offsetLeft,
        width: document
          .getElementById('uuu-btn-' + defaultSelectedTabIndex)
          ?.getBoundingClientRect().width,
      }));
    }
  }, [isComputer]);

  const handleSubmenuToggle = (tab: string) => {
    setOpenSubmenu(openSubmenu === tab ? null : tab);
  };
  const handleEffectTabLists = (index: number) => {
    fired.current = true;
    const element = document.getElementById('uuu-btn-' + index);
    if (element) {
      setCurrentLink({
        index: index,
        left: element.offsetLeft,
        width: element.getBoundingClientRect().width,
      });
    }
  };

  return (
    <>
      <ul
        className={
          'not-prose relative z-50 w-fit cursor-pointer items-center justify-center gap-0 rounded-l-full p-2 backdrop-blur-3xl lg:flex'
        }
      >
        <>
          {isComputer ? (
            <>
              {tabs.map((tab, i) => (
                <li
                  key={i}
                  id={'uuu-btn-' + i}
                  className={cn(
                    'hidden h-full items-center justify-center text-nowrap rounded-full transition-colors duration-200 lg:flex',
                    currentLink.index === i && 'text-bglight dark:text-bgdark'
                    // fired.current
                    //   ? ''
                    //   : defaultSelectedTabStyles[defaultSelectedTabIndex]
                  )}
                  onClick={() => {
                    handleEffectTabLists(i);
                    handleSubmenuToggle(tab);
                  }}
                >
                  {['THỂ LOẠI', 'QUỐC GIA'].includes(tab) ? (
                    <>
                      <div className="relative">
                        <span className="center-flex px-2 py-1.5">
                          {tab}
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            strokeWidth="2"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </span>

                        <SubmenuLists
                          tab={tab}
                          subMenus={subMenus}
                          openSubmenu={openSubmenu}
                        />
                      </div>
                    </>
                  ) : (
                    <Link className="px-2 py-1.5" href={transformText(tab)}>
                      {tab}
                    </Link>
                  )}
                </li>
              ))}
              <div
                className={
                  'absolute inset-0 -z-[1] h-full overflow-hidden px-1 py-1'
                }
              >
                <div
                  className={
                    'relative h-full w-full overflow-hidden rounded-full'
                  }
                >
                  <div
                    style={{
                      left: `calc(${
                        currentLink.left || 0
                      }px - 0.75rem + 0.25rem)`,
                      width: `${currentLink.width || 0}px`,
                    }}
                    className={cn(
                      `absolute top-1/2 -z-[1] h-full -translate-y-1/2 rounded-full transition-[color,left,width] duration-300`,
                      fired.current
                        ? 'bg-bgdark dark:bg-bglight'
                        : 'bg-transparent'
                    )}
                  />
                </div>
              </div>
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
        </>
      </ul>
    </>
  );
};

export default TabLists;
