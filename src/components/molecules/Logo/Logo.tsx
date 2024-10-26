import { LogoImg } from '@/components/atoms';

const Logo: React.FC = () => {
  return (
    <div className="center-flex relative">
      <LogoImg width={70} height={70} />
      <span>Cuong phim</span>
    </div>
  );
};

export default Logo;
