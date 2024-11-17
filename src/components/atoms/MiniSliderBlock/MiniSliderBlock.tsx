import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';

const MiniSliderBlock: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      {/* button */}
      <div className={cn('center-flex group w-full truncate')}>
        <button className="carouselBtn second-themes from-gray-700 to-black/30">
          <icons.FaPlay />
          <span>Watch Movie</span>
        </button>
        <button className="carouselBtn border border-main-deepCerise-350 bg-bglight/20 from-gray-500 to-black/70 dark:border-main-summerSky-500">
          <span>More Infor</span>
          <icons.GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MiniSliderBlock;
