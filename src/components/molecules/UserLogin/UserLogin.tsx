'use client';
import { Avatar, LoginBtn } from '@/components/atoms';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { useClickAway, useToggle } from 'react-use';

const UserLogin: React.FC = () => {
  // const login = true;
  const login = false;
  const ref = useRef<HTMLDivElement | null>(null);

  const [isDropdownOpen, toggleDropdown] = useToggle(false);

  useClickAway(ref, () => {
    toggleDropdown(false);
  });

  return (
    <>
      {login ? (
        <Avatar ref={ref} isDropdownOpen={isDropdownOpen} toggleDropdown={() => toggleDropdown(true)} />
      ) : (
        <LoginBtn className={cn('border-main-summerSky-600 bg-main-summerSky-450 text-bgdark dark:border-slate-800 dark:bg-main-darkGreen-700 dark:text-bglight', 'bounce-effect font-mono')} borderRadius="1.75rem">
          Login
        </LoginBtn>
      )}
    </>
  );
};

export default UserLogin;
