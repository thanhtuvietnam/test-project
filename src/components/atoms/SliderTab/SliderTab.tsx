import { IMG_URL } from '@/lib/declarations/constant';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import { shimmerImage, toBase64 } from '@/lib/utils/shimmer-image';
import Image from 'next/image';
import { JSX } from 'react';

interface SliderTab {
  tabPic: string;
  tabPicAlt: string;
  vote_average: number;
  theme?: string;
}

const SliderTab = ({
  theme,
  tabPic,
  tabPicAlt,
  vote_average,
}: SliderTab): JSX.Element => {
  return (
    <>
      <Image
        loading="lazy"
        width={1280}
        height={720}
        alt={tabPicAlt}
        src={`${IMG_URL}/${tabPic}`}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmerImage(700, 475, theme))}`}
        className={cn(
          // responsive
          'h-[237px] galaxyTabS7:h-[300px] ipadMini:h-[350px] sm:h-[370px] md:h-[400px] lg:h-[500px] imac:h-[550px] prodisPlay:h-[600px] 2xl:h-[650px] macbookPro:h-[700px] fullHd:h-[800px]',
          'w-full rounded-3xl object-cover',
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
