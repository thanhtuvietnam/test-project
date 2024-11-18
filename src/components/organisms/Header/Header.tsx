import { Logo, SearchBar, UserLogin } from '@/components/molecules';
import { cn } from '@/lib/utils';
const Header: React.FC = () => {
  return (
    <header
      className={cn(
        'center-flex wrapper px-1 py-3',
        'bg-gradient-to-r from-main-summerSky-200 via-main-summerSky-300 to-main-summerSky-600',
        'dark:bg-gradient-to-r dark:from-bgdark dark:via-main-darkGreen-600 dark:to-main-darkGreen-400'
      )}
    >
      <Logo />
      <SearchBar />
      <UserLogin />
    </header>
  );
};

export default Header;
