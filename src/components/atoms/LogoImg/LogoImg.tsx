'use client';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import Logodark from '@/public/logo/Logodark.png';
import Logolight from '@/public/logo/Logolight.png';
import vector from '@/public/Vector.png';
import Image from 'next/image';
import React from 'react';
import official from '@/public/Frame 235.png';
import officiallight from '@/public/Frame 236.png';

interface LogoImgProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoImg: React.FC<LogoImgProps> = ({ className, height, width }) => {
  const { theme } = useTheme();
  // const logo = theme === 'dark' ? Logolight : Logodark;
  const logo = theme === 'dark' ? officiallight : official;

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
          'sm:w-20',
          'md:w-24',
          'lg:w-32',
          'xl:w-40',
          '2xl:w-48',
          className
        )}
        onClick={handleClick}
      />
    </>
  );
};

export default LogoImg;
