'use client';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import { Movie } from '@/types/apiResponse';

import { Star } from '../Star';

const ContentBlock: React.FC<Movie> = ({ name, origin_name }) => {
  const items = [
    { Icon: icons.FaRegCalendarAlt, text: '2024' },
    { Icon: icons.GoClock, text: '19phut/tap' },
    { Icon: icons.HiMiniLanguage, text: 'vietsub' },
    { Icon: icons.RiHdLine, text: 'Full Hd' },
    { Icon: icons.FaImdb, star: true, text: '8.1' },
  ];

  return (
    <div className="text-custom w-full lg:w-1/2">
      {/* title */}
      <h2
        className={cn(
          'mb-1',
          // responsive
          'text-2xl font-black surfacePro:text-3xl ipadMini:text-4xl md:text-5xl lg:text-6xl',
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
      {/* content */}
      <p className="hidden font-sans imac:block">
        {
          'Toss out that granular state management, manual refetching and endless bowls of async-spaghetti code. TanStack Query gives you declarative, always-up-to-date auto-managed queries and mutations that directly improve both your developer and user experiences.'
        }
      </p>

      {/* mini-content */}
      <ul className="my-5 hidden grid-cols-2 font-sans ipadMini:grid">
        {items.map(({ Icon, star, text }, index) => (
          <li
            key={index}
            className={cn('custom-flex-1 text-xl', star ? 'gap-4' : 'gap-5')}
          >
            {star && <Star />}
            <span className="custom-flex-1 gap-3">
              <Icon className="text-yellow-400" />
              {text}
            </span>
          </li>
        ))}
      </ul>
      {/* button */}
      <div
        className={cn('center-flex group w-full truncate lg:w-[70%] xl:w-1/2')}
      >
        <button className="carouselBtn bg-main-deepCerise-500 dark:bg-main-summerSky-500">
          <icons.FaPlay />
          <span>Watch Movie</span>
        </button>
        <button className="carouselBtn border border-main-deepCerise-250 bg-bglight/20 dark:border-main-summerSky-500">
          <span>More Infor</span>
          <icons.GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ContentBlock;
{
  /* <div className="hidden font-sans ipadMini:block"> */
}
{
  /*   <div className="text-semantic-goldenFizz"> */
}
{
  /*     <div className="custom-flex-1 gap-5"> */
}
{
  /*       <span className="custom-flex-1"> */
}
{
  /*         <icons.FaRegCalendarAlt /> */
}
{
  /*         2024 */
}
{
  /*       </span> */
}
{
  /*       <span className="custom-flex-1"> */
}
{
  /*         <icons.GoClock /> */
}
{
  /*         19phut/tap */
}
{
  /*       </span> */
}
{
  /*     </div> */
}
{
  /*     <div className="custom-flex-1 gap-5"> */
}
{
  /*       <span className="custom-flex-1"> */
}
{
  /*         <icons.HiMiniLanguage /> */
}
{
  /*         vietsub */
}
{
  /*       </span> */
}
{
  /*       <span className="custom-flex-1"> */
}
{
  /*         <icons.RiHdLine /> */
}
{
  /*         Full Hd */
}
{
  /*       </span> */
}
{
  /*     </div> */
}
{
  /*     <div className="custom-flex-1 gap-4"> */
}
{
  /*       <Star /> */
}
{
  /*       <span className="custom-flex-1 gap-2"> */
}
{
  /*         <icons.FaImdb /> */
}
{
  /*         <span>8.1</span> */
}
{
  /*       </span> */
}
{
  /*     </div> */
}
{
  /*   </div> */
}
{
  /* </div> */
}
{
  /* <ul className="hidden font-sans ipadMini:block"> */
}
{
  /*   <li className="custom-flex-1"> */
}
{
  /*     <span className="custom-flex-1"> */
}
{
  /*       <icons.FaRegCalendarAlt /> */
}
{
  /*       2024 */
}
{
  /*     </span> */
}
{
  /*   </li> */
}
{
  /*   <li> */
}
{
  /*     <span className="custom-flex-1"> */
}
{
  /*       <icons.GoClock /> */
}
{
  /*       19phut/tap */
}
{
  /*     </span> */
}
{
  /*   </li> */
}
{
  /*   <li className="custom-flex-1 gap-5"> */
}
{
  /*     <span className="custom-flex-1"> */
}
{
  /*       <icons.HiMiniLanguage /> */
}
{
  /*       vietsub */
}
{
  /*     </span> */
}
{
  /*   </li> */
}
{
  /*   <li> */
}
{
  /*     <span className="custom-flex-1"> */
}
{
  /*       <icons.RiHdLine /> */
}
{
  /*       Full Hd */
}
{
  /*     </span> */
}
{
  /*   </li> */
}
{
  /*   <li className="custom-flex-1 gap-4"> */
}
{
  /*     <Star /> */
}
{
  /*     <span className="custom-flex-1 gap-2"> */
}
{
  /*       <icons.FaImdb /> */
}
{
  /*       <span>8.1</span> */
}
{
  /*     </span> */
}
{
  /*   </li> */
}
{
  /* </ul> */
}
