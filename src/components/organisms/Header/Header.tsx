import { Logo } from '@/components/molecules';

const Header: React.FC = () => {
  return (
    <header className="center-flex border">
      <Logo />
      <div>search bar</div>
      <div>user login</div>
    </header>
  );
};

export default Header;
