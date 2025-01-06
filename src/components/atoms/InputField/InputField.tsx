'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

interface InputFieldProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholders?: string[];
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  animating?: boolean;
  canvasRef?: React.RefObject<HTMLCanvasElement>;
  inputRef?: React.RefObject<HTMLInputElement>;
  nameInput?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  nameInput,
  animating,
  canvasRef,
  inputRef,
  onChange,
  onKeyDown,
  placeholders,
  setValue,
  value,
}) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState<number>(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startAnimation = (): void => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % (placeholders?.length ?? 0));
    }, 3000);
  };
  const handleVisibilityChange = (): void => {
    if (document.visibilityState !== 'visible' && intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
      intervalRef.current = null;
    } else if (document.visibilityState === 'visible') {
      startAnimation(); // Restart the interval when the tab becomes visible
    }
  };

  useEffect(() => {
    startAnimation();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return (): void => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [placeholders]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={cn(
          'pointer-events-none absolute left-2 top-[20%] origin-top-left scale-50 transform pr-20 text-base invert filter sm:left-8 dark:invert-0',
          !animating ? 'opacity-0' : 'opacity-100',
        )}
      />
      <input
        type="text"
        value={value}
        ref={inputRef}
        name={nameInput}
        className={cn(
          'focus:outlinne-none relative z-50 h-full w-full border-none pl-4 pr-20 text-sm focus:ring-0 sm:pl-10 sm:text-base',
          'bg-transparent text-bgdark dark:text-bglight',
          animating && 'text-transparent dark:text-transparent',
        )}
        onKeyDown={onKeyDown}
        onChange={(e) => {
          if (!animating) {
            if (setValue) {
              setValue(e.target.value);
            }
            if (onChange) {
              onChange(e);
            }
          }
        }}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center rounded-full">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              key={`current-placeholder-${currentPlaceholder}`}
              className="text-bgdark/50 dark:text-bglight/50 w-[calc(100%-2rem)] truncate pl-4 text-left text-sm font-normal sm:pl-12 sm:text-base"
              exit={{
                opacity: 0,
                y: -15,
              }}
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'linear',
              }}
            >
              {placeholders?.[currentPlaceholder] ?? ''}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default InputField;
