import { cn } from '@/lib/utils';
import React from 'react';

interface ActiveLinkProps {
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  children: React.ReactNode;
  className?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const ActiveLink: React.FC<ActiveLinkProps> = React.memo(
  ({
    onClick,
    disabled = false,
    ariaLabel,
    children,
    className = '',
    onKeyDown,
  }) => {
    return (
      <button
        disabled={disabled}
        aria-label={ariaLabel}
        onClick={onClick}
        onKeyDown={onKeyDown}
        className={cn(
          'hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600',

          'rounded-md border border-indigo-500 bg-white px-4 py-2 text-[#030a1b] shadow-lg transition-transform duration-200 ease-in-out dark:border-indigo-700 dark:bg-transparent dark:text-[#ebfaff]',

          'focus:outline-none focus:ring-4 focus:ring-indigo-300',

          'active:bg-gradient-to-r active:from-indigo-500 active:to-purple-600 dark:active:from-indigo-700 dark:active:to-purple-800',
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

ActiveLink.displayName = 'ActiveLink';
export default ActiveLink;
