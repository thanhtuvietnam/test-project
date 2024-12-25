'use client';
// import { useTheme } from '@/components/providers/ThemeProvider';
import { icons } from '@/lib/declarations/icons';
import { useTheme } from 'next-themes';
import React from 'react';

const ThemeToggleButton: React.FC = () => {
  // const { theme, toggleTheme } = useTheme();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        // className="rounded bg-gray-200 p-2 dark:bg-gray-700"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        // onClick={toggleTheme}
      >
        {theme === 'dark' ? <icons.IoSunny size={30} /> : <icons.IoMoon size={30} />}
      </button>
    </>
  );
};

export default ThemeToggleButton;
