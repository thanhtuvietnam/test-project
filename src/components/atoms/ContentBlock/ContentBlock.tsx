'use client';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import { Movie } from '@/types/apiResponse';

import { Star } from '../Star';

const ContentBlock: React.FC<Movie> = ({
  name,
  lang,
  origin_name,
  quality,
  time,
  year,
}) => {
  const items = [
    { Icon: icons.FaRegCalendarAlt, text: year },
    { Icon: icons.GoClock, text: time },
    { Icon: icons.HiMiniLanguage, text: lang },
    { Icon: icons.RiHdLine, text: quality },
    { Icon: icons.FaImdb, star: true, text: '8.1' },
  ];

  return (
    <div className="text-custom w-full lg:w-1/2">
      {/* title */}
      <h2
        className={cn(
          'mb-1',
          // responsive
          'text-2xl font-black surfacePro:text-3xl ipadMini:text-4xl md:text-5xl xl:text-6xl',
          // color
          'text-main-deepCerise-500 dark:text-main-summerSky-500'
        )}
      >
        {name}
      </h2>

      <h3
        className={cn(
          'mb-10 text-lg font-bold italic',
          'md:text-xl lg:mb-3 lg:text-2xl'
        )}
      >
        {origin_name}
      </h3>

      {/* mini-content */}
      <ul className="my-5 hidden grid-cols-2 gap-2 font-sans ipadMini:grid">
        {items.map(({ Icon, star, text }, index) => (
          <li
            key={index}
            className={cn('custom-flex-1 text-xl', star ? 'gap-4' : 'gap-5')}
          >
            {star && <Star size={40} />}
            <span className="custom-flex-1 gap-3">
              <Icon
                size={30}
                className="text-yellow-950 dark:text-yellow-400"
              />
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentBlock;
