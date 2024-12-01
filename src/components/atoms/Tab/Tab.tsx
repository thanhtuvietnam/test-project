'use client';
import { SubmenuLists, ChevronDown, Bridge } from '@/components/atoms';
import { cn } from '@/lib/utils';
import { transformText } from '@/lib/utils/transformtext';
import { TabProps } from '@/types/type';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const Tab: React.FC<TabProps> = ({
  dir,
  handleSetSelected,
  index,
  selected,
  setPosition,
  tab,
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  const handleMouseEnter = () => {
    if (!ref?.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft,
      opacity: 1,
      width,
    });

    handleSetSelected(tab);
  };

  return (
    <li
      ref={ref}
      className={cn(
        'hover-text',
        'text-custom py-3',
        'relative z-10 h-full',
        'h-full text-nowrap rounded-full duration-200'
      )}
      onMouseEnter={handleMouseEnter}
      onClick={() => handleSetSelected(tab)}
    >
      <Bridge className="-top-1 h-1.5 w-full" />
      <Bridge className="-bottom-1 h-1.5 w-full" />

      {index >= 5 ? (
        <div className="relative">
          <ChevronDown tab={tab} rotate={selected} />

          {selected === tab && (
            <AnimatePresence>
              <SubmenuLists tab={tab} dir={dir} />
            </AnimatePresence>
          )}
        </div>
      ) : (
        <Link className="px-2 py-3" href={`/${transformText(tab)}`}>
          {tab}
        </Link>
      )}
    </li>
  );
};

export default Tab;
