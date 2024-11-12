import { cn } from '@/lib/utils';
import Image from 'next/image';

interface SliderTab {
  tabPic: string;
  tabPicAlt: string;
}

const SliderTab: React.FC<SliderTab> = ({ tabPic, tabPicAlt }) => {
  return (
    <>
      <Image
        width={1980}
        height={1080}
        alt={tabPicAlt}
        src={`https://img.ophim.live/uploads/movies/${tabPic}`}
        className={cn(
          'h-[200px] w-[1440px] sm:h-[400px] md:h-[500px] min-[1440px]:h-[600px] 2xl:h-[700px] min-[1920px]:h-[800px]',
          'rounded-3xl object-cover'
        )}
      />
    </>
  );
};

export default SliderTab;
