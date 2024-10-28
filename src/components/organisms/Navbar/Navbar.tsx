import { ThemeToggleButton } from '@/components/atoms';

const Navbar: React.FC = () => {
  return (
    <nav className="center-flex">
      <div>navbar</div>
      <div className="flex gap-5">
        <span>navbar right</span>
        <ThemeToggleButton />
      </div>
    </nav>
  );
};

export default Navbar;
