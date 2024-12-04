'use client';
import { ThemeToggleButton } from '@/components/atoms';
import { TabLists } from '@/components/molecules';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <nav
      className={cn(
        'center-flex wrapper relative my-1 select-none',
        'shadow-custom rounded-full border',
        'border-main-deepCerise-350 dark:border-main-summerSky-400',
        'bg-white dark:bg-gray-900'
      )}
    >
      <TabLists />
      <div className="mr-2 flex gap-5">
        <span>navbar right</span>
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;
