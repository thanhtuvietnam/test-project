import { ThemeToggleButton } from '@/components/atoms';
import { TabLists } from '@/components/molecules';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <nav className={cn('themes')}>
      <div
        className={cn(
          'center-flex wrapper',
          'relative select-none rounded-full border shadow-md',
          'border-main-deepCerise-350 bg-main-summerSky-200/50 shadow-main-deepCerise-400/40 dark:border-main-summerSky-400 dark:bg-main-aliceBlue-100/15 dark:shadow-cyan-600/50'
        )}
      >
        <TabLists />
        <div className="mr-2 flex gap-5">
          <span>navbar right</span>
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
