import { Montserrat_Alternates, Montserrat } from 'next/font/google';
import { Pattaya } from 'next/font/google';

export const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
});
export const montserratAlter = Montserrat_Alternates({
  display: 'swap',
  style: ['italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const pattayaFont = Pattaya({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
});
