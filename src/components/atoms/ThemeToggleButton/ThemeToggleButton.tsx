'use client';
import { useTheme } from '@/components/providers/ThemeProvider';
import { icons } from '@/lib/declarations/icons';
import React from 'react';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? (
          <icons.IoSunny size={30} />
        ) : (
          <icons.IoMoon size={30} />
        )}
      </button>
    </>
  );
};

export default ThemeToggleButton;
