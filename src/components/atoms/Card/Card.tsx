import { pattayaFont } from '@/fonts/fonts';

import './card.css';

import { IMG_URL } from '@/lib/declarations/constant';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import { Movie } from '@/types/apiResponse';
import Image from 'next/image';
import { FC, JSX, memo, useCallback, useMemo } from 'react';

import { Bridge } from '../Bridge';

interface InfoItemProps {
  icon: JSX.Element;
  label: string;
  value?: string | number;
}

const InfoItem: FC<InfoItemProps> = memo(({ icon, label, value }) => (
  <div className="custom-flex-1 gap-1">
    <span className="custom-flex-1 gap-1 text-[#ffeb3b]">
      {icon}
      {label}
    </span>
    {value && <span>{value}</span>}
  </div>
));

InfoItem.displayName = 'InfoItem';

const Card = memo(({ movieData }: { movieData: Movie }): JSX.Element => {
  // const {
  //   category,
  //   chieurap,
  //   quality,
  //   lang,
  //   thumb_url,
  //   name,
  //   origin_name,
  //   episode_current,
  //   sub_docquyen,
  //   tmdb,
  //   year,
  // } = movieData;

  const TwoCategory = useMemo(() => movieData?.category?.slice(0, 2) ?? [], [movieData?.category]);

  const renderStars = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => <icons.CiStar key={i} />);
  }, []);

  const renderCategories = useCallback(
    () =>
      TwoCategory.map((item) => (
        <span key={item.id} className="tag">
          {item?.name}
        </span>
      )),
    [TwoCategory],
  );

  const tmdbScore = useMemo(
    () => ({
      voteAverage: movieData?.tmdb?.vote_average ?? 'N/A',

      voteCount: movieData?.tmdb?.vote_count ?? 'N/A',
    }),
    [movieData?.tmdb],
  );

  return (
    <div className="card group/card">
      <Bridge className="z-[2] h-full w-full transition duration-500 group-hover/card:hidden dark:bg-black/30" />

      <span className="cardItemQualang group-hover/card:hidden">
        {movieData?.quality} + {movieData?.lang}
      </span>

      <div className="poster">
        <Image
          width={320}
          height={450}
          // alt={movieData?.name}
          alt={'cardimg'}
          className="imgMain"
          src={`${IMG_URL}/${movieData?.thumb_url}`}
        />
      </div>

      <div className="details">
        <span className="addOn-custom">{movieData?.episode_current}</span>

        <div className="rating">
          {renderStars}
          <span className="ml-2">4/5</span>
        </div>

        <div className="tags truncate">{renderCategories()}</div>

        <h3 className={cn('mt-2', pattayaFont.className)}>{movieData?.name}</h3>

        <h4 className="">{movieData?.origin_name}</h4>

        <div className="info">
          <InfoItem
            icon={<icons.MdSubtitles />}
            label="Sub độc quyền:"
            value={movieData?.sub_docquyen ? 'Có' : 'Không'}
          />
          <InfoItem
            icon={<icons.FaTheaterMasks />}
            label="Chiếu rạp:"
            value={movieData?.chieurap ? 'Có' : 'Không'}
          />
          <InfoItem icon={<icons.FaCalendarAlt />} label="Năm:" value={movieData?.year} />
        </div>

        <div className="score grid gap-1">
          <h4 className="custom-flex-1 text-lg font-semibold">
            TMDB Score <icons.MdOutlineSportsScore />
          </h4>
          <div className="custom-flex-1">
            <icons.GiVote color="#ff9800" />
            <span>Vote Average: {tmdbScore.voteAverage}</span>
          </div>
          <div className="custom-flex-1">
            <icons.GiVote color="#ff9800" />
            <span>Vote Count: {tmdbScore.voteCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

Card.displayName = 'Card';
export default Card;

// import { pattayaFont } from '@/fonts/fonts';

// import './card.css';

// import { IMG_URL } from '@/lib/declarations/constant';
// import { icons } from '@/lib/declarations/icons';
// import { cn } from '@/lib/utils';
// import { Movie } from '@/types/apiResponse';
// import Image from 'next/image';
// import { JSX, useMemo } from 'react';

// import { Bridge } from '../Bridge';

// const Card = ({ movieData }: { movieData: Movie }): JSX.Element => {
//   const {
//     category,
//     chieurap,
//     quality,
//     lang,
//     thumb_url,
//     name,
//     origin_name,
//     episode_current,
//     sub_docquyen,
//     tmdb,
//   } = movieData;

//   const TwoCategory = useMemo(() => category?.slice(0, 2), [category]);

//   return (
//     <div className="card group/card transition-all">
//       <Bridge className="z-[2] h-full w-full bg-white/15 transition duration-500 group-hover/card:hidden dark:bg-black/30" />

//       <span className="cardItemQualang transition duration-500 group-hover/card:hidden">
//         {quality} + {lang}
//       </span>

//       <div className="poster">
//         <Image
//           width={320}
//           height={450}
//           alt="cardimg"
//           className="imgMain"
//           src={`${IMG_URL}/${thumb_url}`}
//         />
//       </div>

//       <div className="details group-hover/card:bottom-[-10px]">
//         <h3
//           className={cn(
//             'w-full truncate text-2xl text-main-deepCerise-500 dark:text-[#03f2f8]',
//             pattayaFont.className,
//           )}
//         >
//           {name}
//         </h3>
//         <h4 className="truncate font-sans">{origin_name}</h4>
//         <span className="addOn-custom">{episode_current}</span>

//         <div className="rating text-yellow-300">
//           {[...Array(5)].map((_, index) => (
//             <icons.CiStar key={index} />
//           ))}
//           <span>4/5</span>
//         </div>
//         <div className="tags truncate text-sm">
//           {TwoCategory?.map((item) => <span key={item.id}>{item?.name}</span>)}
//         </div>

//         <div className="info grid">
//           <InfoItem
//             icon={<icons.MdSubtitles />}
//             label="Sub doc quyen:"
//             value={sub_docquyen ? 'co' : 'khong'}
//           />
//           <InfoItem
//             icon={<icons.FaTheaterMasks />}
//             label="chieu rap:"
//             value={chieurap ? 'co' : 'khong'}
//           />
//           <InfoItem icon={<icons.FaCalendarAlt />} label="nam 2024" />
//         </div>

//         <div className="cast grid">
//           <h4>TMDB Score</h4>
//           <span>vote average: {tmdb?.vote_average ?? 'N/A'}</span>
//           <span>vote count: {tmdb?.vote_count ?? 'N/A'}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const InfoItem = ({ icon, label, value }: { icon: JSX.Element; label: string; value?: string }) => (
//   <div className="custom-flex-1 gap-1">
//     <span className="custom-flex-1 gap-1">
//       {icon}
//       {label}
//     </span>
//     {value && <span>{value}</span>}
//   </div>
// );

// export default Card;
