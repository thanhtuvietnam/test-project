import typography from '@tailwindcss/typography';
import scrollbar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  plugins: [typography, scrollbar],
  theme: {
    extend: {
      animation: {
        bookmarkshake: 'bookmarkshake 1s ease-in-out infinite',
      },
      colors: {
        bgdark: '#030a1b',
        bglight: '#ebfaff',
        main: {
          aliceBlue: {
            100: '#9da1a3',
            150: '#a7acae',
            200: '#b1b7ba',
            250: '#bac3c5',
            300: '#c4ced1',
            350: '#ced9dc',
            400: '#d8e4e8',
            450: '#e1eff3',
            500: '#beefff',
            550: '#65d9ff',
            600: '#39cdff',
            700: '#0cc2ff',
            800: '#0086b2',
            900: '#016485',
          },
          darkGreen: {
            100: '#93aef3',
            200: '#5d86ed',
            300: '#275ee7',
            400: '#315cc7',
            500: '#274aa1',
            600: '#0f3187',
            700: '#091e51',
          },
          deepCerise: {
            100: '#fce4f1',
            150: '#f9c8e3',
            200: '#f5add5',
            250: '#f291c7',
            300: '#ef76b9',
            350: '#ec5baa',
            400: '#e93f9c',
            450: '#e5228d',
            500: '#d0187d',
            550: '#b2156b',
            600: '#941159',
            650: '#770e48',
            700: '#590a36',
            750: '#3b0724',
            800: '#1e0312',
            900: '#010101',
          },
          summerSky: {
            100: '#e7f2fc',
            150: '#cee6f9',
            200: '#b6d9f6',
            250: '#9ecdf4',
            300: '#85c0f1',
            350: '#6db4ee',
            400: '#55a7eb',
            450: '#3c9be8',
            500: '#228ee5',
            550: '#187dd0',
            600: '#156bb2',
            650: '#115994',
            700: '#0e4877',
            750: '#07243b',
            800: '#03121e',
            900: '#010101',
          },
        },
        neutral: {
          black: '#000000',
          gray: '#808080',
          white: '#FFFFFF',
        },
        semantic: {
          alizarin: '#E52222',
          analogus: '#1ceb34',
          complementory: '#e57a22',
          goldenFizz: '#E5DB22',
          springGreen: '#00FB71',
        },
      },
      keyframes: {
        'bg-position': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        bookmarkshake: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'rotate(0deg)' },
          '30%': { transform: 'rotate(-10deg)' },
          '70%': { transform: 'rotate(10deg)' },
        },
      },
      prefix: 'tw-',
      screens: {
        fullHd: '1920px',
        // ipad
        galaxyTabS7: '520px',
        // laptop
        imac: '1120px',
        ipadMini: '600px',
        macbookAir: '1559px',
        macbookPro: '1700px',
        prodisPlay: '1484px',
        surfacePro: '570px',
      },
    },
  },
};

export default config;
