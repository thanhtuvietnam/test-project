import { Logo } from '@/components/molecules';
import { cn } from '@/lib/utils';
const Header: React.FC = () => {
  return (
    <header className="center-flex border">
      <Logo />
      <div className={cn('hidden')}>search bar</div>
      <div>user login</div>
    </header>
  );
};

export default Header;
