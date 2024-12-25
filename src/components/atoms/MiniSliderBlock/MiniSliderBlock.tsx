import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { JSX } from 'react';

const MiniSliderBlock = ({ slug }: { slug: string }): JSX.Element => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      {/* button */}
      <div className={cn('center-flex w-full')}>
        <Link
          href="/"
          className={cn('carouselBtn second-themes from-gray-700 to-black/30', 'bounce-effect')}
        >
          <icons.FaPlay />
          <span>Watch Movie</span>
        </Link>
        <Link
          href={`/film-info/${slug}`}
          className={cn(
            'carouselBtn group/button-two border border-main-deepCerise-350 bg-bglight/20 from-gray-500 to-black/70 dark:border-main-summerSky-500',
            'bounce-effect',
          )}
        >
          <span>More Infor</span>
          <icons.GoArrowRight className="rounded-full group-hover/button-two:bg-green-400 group-hover/button-two:text-lg dark:group-hover/button-two:bg-green-900" />
        </Link>
      </div>
    </div>
  );
};

export default MiniSliderBlock;
