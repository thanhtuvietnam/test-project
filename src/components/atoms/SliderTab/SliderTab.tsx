import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface SliderTab {
  tabPic: string;
  tabPicAlt: string;
  vote_average: number;
}

const imgUrl = 'https://img.ophim.live/uploads/movies/';

const SliderTab: React.FC<SliderTab> = ({
  tabPic,
  tabPicAlt,
  vote_average,
}) => {
  return (
    <>
      <Image
        width={1980}
        height={1080}
        alt={tabPicAlt}
        src={`${imgUrl}/${tabPic}`}
        className={cn(
          // responsive
          'h-[237px] galaxyTabS7:h-[300px] ipadMini:h-[350px] sm:h-[370px] md:h-[400px] lg:h-[500px] imac:h-[550px] prodisPlay:h-[600px] 2xl:h-[650px] macbookPro:h-[700px] fullHd:h-[800px]',
          'rounded-3xl object-cover'
        )}
      />
      <div className="second-themes custom-flex-1 absolute right-3 top-3 z-20 gap-0.5 rounded-full p-2 font-mono">
        <span>{vote_average}</span>
        <icons.FaStar />
      </div>
    </>
  );
};

export default SliderTab;
