import { Logo, SearchBar } from '@/components/molecules';
import { cn } from '@/lib/utils';
const Header: React.FC = () => {
  return (
    <header
      className={cn(
        'center-flex px-1 py-5',
        'bg-gradient-to-r from-main-summerSky-200 via-main-summerSky-300 to-main-summerSky-600',
        'dark:bg-gradient-to-r dark:from-bgdark dark:via-main-darkGreen-600 dark:to-main-darkGreen-100'
      )}
    >
      <Logo />
      {/* <div className={cn('')}>search bar</div> */}
      <SearchBar />
      <div>user login</div>
    </header>
  );
};

export default Header;
