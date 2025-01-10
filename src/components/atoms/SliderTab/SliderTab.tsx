import { IMG_URL } from '@/lib/declarations/constant';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import { ShimmerImage, toBase64 } from '@/lib/utils/shimmer-image';
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
        placeholder={`data:image/svg+xml;base64,${toBase64(ShimmerImage(700, 475))}`}
        className={cn(
          //NOTE: responsive
          'galaxyTabS7:h-[300px] ipadMini:h-[350px] imac:h-[550px] prodisPlay:h-[600px] macbookPro:h-[700px] fullHd:h-[800px] h-[237px] sm:h-[370px] md:h-[400px] lg:h-[500px] 2xl:h-[650px]',
          //NOTE: main
          'w-full rounded-3xl object-cover',
        )}
      />
      <div className="tw-themes-2 tw-flex-1 absolute top-3 right-3 z-20 gap-0.5 rounded-full p-2 font-mono">
        <span>{vote_average}</span>
        <icons.FaStar />
      </div>
    </>
  );
};

export default SliderTab;
