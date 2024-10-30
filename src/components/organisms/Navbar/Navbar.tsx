import { ThemeToggleButton } from '@/components/atoms';
import { TabLists } from '@/components/molecules';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <nav
      className={cn(
        'center-flex mt-3 rounded-full border shadow-md',
        'border-main-deepCerise-350 shadow-main-deepCerise-400/40 dark:border-main-summerSky-400 dark:shadow-cyan-600/50'
      )}
    >
      <TabLists />
      <div className="flex gap-5">
        <span>navbar right</span>
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;
