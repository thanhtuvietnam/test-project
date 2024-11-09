'use client';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface LogoImgProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoImg: React.FC<LogoImgProps> = ({ className, height, width }) => {
  const { theme } = useTheme();
  const logo = theme === 'dark' ? '/logo/Logolight.png' : '/logo/Logodark.png';

  const handleClick = () => {
    // console.log('click');
  };

  return (
    <>
      <Image
        src={logo}
        quality={100}
        width={width}
        height={height}
        alt="logoCuongPhim"
        className={cn(
          'not-prose',
          'sm:w-12',
          'md:w-14',
          // 'lg:w-16',
          // 'xl:w-[4.5rem]',
          className
        )}
        onClick={handleClick}
      />
    </>
  );
};

export default LogoImg;
