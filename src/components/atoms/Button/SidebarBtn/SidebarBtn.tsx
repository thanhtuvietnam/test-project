'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface SidebarBtnProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  crossed: boolean;
  setCrossedState: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarBtn: React.FC<SidebarBtnProps> = ({ openSidebar, setOpenSidebar, className, crossed, setCrossedState }) => {
  return (
    <button
      aria-expanded={crossed}
      className={cn(className, 'flex aspect-square h-fit flex-col items-center justify-center rounded-full bg-main-deepCerise-500 px-2 py-1.5 dark:bg-cyan-500')}
      onClick={() => {
        setCrossedState((e) => !e);
        setOpenSidebar(!openSidebar);
      }}
    >
      <motion.div
        initial={{
          translateY: '-3px',
        }}
        className="border-t-2 border-t-bgdark dark:border-t-bglight"
        style={{
          width: '20px',
          transformOrigin: 'center',
        }}
        animate={
          crossed
            ? {
                rotate: '45deg',
                translateY: '1px',
              }
            : {
                rotate: '0deg',
                translateY: '-3px',
              }
        }
        transition={{
          bounce: 0,
          duration: 0.1,
        }}
      />
      <motion.div
        initial={{
          translateY: '3px',
        }}
        className="border-t-2 border-t-bgdark dark:border-t-bglight"
        style={{
          width: '20px',
          transformOrigin: 'center',
        }}
        animate={
          crossed
            ? {
                rotate: '-45deg',
                translateY: '-1px',
              }
            : {
                rotate: '0deg',
                scaleX: 1,
                translateY: '3px',
              }
        }
        transition={{
          bounce: 0,
          duration: 0.1,
        }}
      />
    </button>
  );
};

export default SidebarBtn;
