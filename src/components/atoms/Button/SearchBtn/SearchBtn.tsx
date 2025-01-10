'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface SearchBtnProps {
  value?: string;
  handleSubmit?: () => void;
}

const SearchBtn: React.FC<SearchBtnProps> = ({ handleSubmit, value }) => {
  return (
    <button
      type="submit"
      disabled={!value}
      className={cn(
        'absolute top-1/2 right-2 z-50 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full transition duration-200',
        'dark:bg-bglight dark:disabled:bg-main-summerSky-800 bg-black disabled:bg-gray-100',
      )}
      onClick={handleSubmit}
    >
      <motion.svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('h-4 w-4 text-gray-300', value && 'dark:text-bgdark')}
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path fill="none" d="M0 0h24v24H0z" stroke="none" />
        <motion.path
          d="M5 12l14 0"
          animate={{
            strokeDashoffset: value ? 0 : '50%',
          }}
          initial={{
            strokeDasharray: '50%',
            strokeDashoffset: '50%',
          }}
          transition={{
            duration: 0.3,
            ease: 'linear',
          }}
        />
        <path d="M13 18l6 -6" />
        <path d="M13 6l6 6" />
      </motion.svg>
    </button>
  );
};

export default SearchBtn;
