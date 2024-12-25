import { LogoImg, TextEffect } from '@/components/atoms';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { JSX } from 'react';

const Logo = (): JSX.Element => {
  return (
    <Link href="/" className="center-flex relative cursor-pointer gap-1">
      <LogoImg width={40} height={30} />
      <TextEffect
        className={cn(
          'h-full select-none truncate font-bold capitalize',
          'text-2xl',
          'sm:text-3xl',
          'md:text-4xl',
          // 'lg:text-5xl'
          // 'xl:text-5xl'
          '[--base-color:theme(colors.main.summerSky.800)] [--base-gradient-color:theme(colors.main.summerSky.100)] dark:[--base-color:theme(colors.main.deepCerise.400)] dark:[--base-gradient-color:theme(colors.main.deepCerise.100)]',
        )}
      >
        cuồng phim
      </TextEffect>
    </Link>
  );
};

export default Logo;
