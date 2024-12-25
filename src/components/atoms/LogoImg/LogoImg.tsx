'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

interface LogoImgProps {
  className?: string;
  width?: number;
  height?: number;
}

const LogoImg: React.FC<LogoImgProps> = ({ width, className, height }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // const logo = theme === 'dark' ? '/logo/Logolight.png' : '/logo/Logodark.png';

  let src;

  switch (theme) {
    case 'light':
      src = '/logo/Logodark.png';
      break;
    case 'dark':
      src = '/logo/Logolight.png';
      break;
    default:
      src = '/logo/Logolight.png';
      break;
  }

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // const handleClick = (): void => {
  //   // console.log('click');
  // };

  return (
    <>
      <Image
        src={src}
        quality={100}
        width={width ?? 0}
        alt="logoCuongPhim"
        height={height ?? 0}
        className={cn(
          'sm:w-12',
          'md:w-14',
          // 'lg:w-16',
          // 'xl:w-[4.5rem]',
          className,
        )}
        loading="lazy"
        // onClick={handleClick}
      />
    </>
  );
};
export default LogoImg;
