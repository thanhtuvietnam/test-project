import { cn } from '@/lib/utils';
import { BorderEffectProps } from '@/types/type';
import { JSX } from 'react';

import { Bridge } from '../../Bridge';

const BorderEffect = ({
  bottomClassName,
  className,
  isActive,
  topClassName,
}: BorderEffectProps): JSX.Element => {
  return (
    <>
      {/* Top Border */}
      <Bridge
        className={cn(
          'absolute left-1/2 top-2 z-0',
          'h-1 bg-main-aliceBlue-800 dark:bg-[#891daf]',
          'transition-all duration-300 ease-out',
          // 'origin-right',
          '-translate-x-1/2 transform',
          isActive ? 'w-1/2 scale-x-100' : 'w-0 scale-x-0',
          className,
          topClassName
        )}
      />
      {/* Bottom Border */}
      <Bridge
        className={cn(
          'absolute bottom-2 left-1/2 -z-10',
          'h-1 bg-main-aliceBlue-800 dark:bg-[#891daf]',
          '-transition-all duration-300 ease-out',
          // 'origin-left',
          '-translate-x-1/2 transform',
          isActive ? 'w-1/2 scale-x-100' : 'w-0 scale-x-0',
          className,
          bottomClassName
        )}
      />
      {/* boundaries */}
      <Bridge className="-top-1 -z-10 h-4 w-full" />
      <Bridge className="-bottom-1 -z-10 h-1.5 w-full" />
    </>
  );
};

export default BorderEffect;
