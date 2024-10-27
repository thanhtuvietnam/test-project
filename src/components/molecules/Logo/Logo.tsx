import { LogoImg, TextEffect } from '@/components/atoms';
import { cn } from '@/lib/utils';

const Logo: React.FC = () => {
  return (
    <div className="center-flex relative">
      <LogoImg width={64} height={0} />
      <TextEffect
        className={cn(
          'uppercase',
          'md:text-md sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl'
        )}
      >
        cuồng phim
      </TextEffect>
    </div>
  );
};

export default Logo;
