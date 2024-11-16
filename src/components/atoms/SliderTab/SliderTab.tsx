import { cn } from '@/lib/utils';
import Image from 'next/image';

interface SliderTab {
  tabPic: string;
  tabPicAlt: string;
}

const imgUrl = 'https://img.ophim.live/uploads/movies/';

const SliderTab: React.FC<SliderTab> = ({ tabPic, tabPicAlt }) => {
  return (
    <>
      <Image
        width={1980}
        height={1080}
        alt={tabPicAlt}
        src={`${imgUrl}/${tabPic}`}
        className={cn(
          // responsive
          // 'h-[237px] min-[520px]:h-[300px] min-[600px]:h-[350px] sm:h-[370px] md:h-[400px] lg:h-[500px] min-[1120px]:h-[550px] min-[1504px]:h-[650px] min-[1700px]:h-[700px] min-[1920px]:h-[800px]',
          'h-[237px] galaxyTabS7:h-[300px] ipadMini:h-[350px] sm:h-[370px] md:h-[400px] lg:h-[500px] imac:h-[550px] prodisPlay:h-[600px] 2xl:h-[650px] macbookPro:h-[700px] fullHd:h-[800px]',
          'rounded-3xl object-cover'
        )}
      />
    </>
  );
};

export default SliderTab;
