'use client';
import Logodark from '@/public/logo/Logodark.png';
import Logolight from '@/public/logo/Logolight.png';
import Image from 'next/image';
import React from 'react';

import { useTheme } from '@/components/providers/ThemeProvider';

interface LogoImgProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoImg: React.FC<LogoImgProps> = ({ width, height, className }) => {
  const { theme } = useTheme();
  const logo = theme === 'dark' ? Logolight : Logodark;

  return (
    <>
      <Image
        src={logo}
        alt="logoCuongPhim"
        width={width}
        height={height}
        quality={100}
        className={className}
      />
    </>
  );
};

export default LogoImg;
