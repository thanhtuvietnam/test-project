import { pattayaFont } from '@/fonts/fonts';

import './card.css';

import { IMG_URL } from '@/lib/declarations/constant';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import { ShimmerImage, toBase64 } from '@/lib/utils/shimmer-image';
import { Item } from '@/types/apiResponse';
import Image from 'next/image';
import Link from 'next/link';
import { FC, JSX, memo, useCallback, useMemo } from 'react';

import { Bridge } from '../Bridge';

interface InfoItemProps {
  icon: JSX.Element;
  label: string;
  value?: string | number;
}

const InfoItem: FC<InfoItemProps> = memo(({ icon, label, value }) => (
  <div className="tw-flex-1 gap-1">
    <span className="tw-flex-1 gap-1 text-[#ffeb3b]">
      {icon}
      {label}
    </span>
    {value && <span>{value}</span>}
  </div>
));

InfoItem.displayName = 'InfoItem';

const Card = memo(
  ({ movieData, theme }: { movieData: Item; theme?: string }): JSX.Element => {
    const TwoCategory = useMemo(
      () => movieData?.category?.slice(0, 2) ?? [],
      [movieData?.category],
    );

    const renderStars = useMemo(() => {
      return Array.from(
        {
          length: 5,
        },
        (_, i) => <icons.CiStar key={i} />,
      );
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
      <Link href={`/film-info/${movieData?.slug}`}>
        <div className="card group/card">
          <Bridge className="z-[2] size-full transition duration-500 group-hover/card:invisible dark:bg-black/30" />

          <span className="cardItemQualang group-hover/card:invisible">
            {movieData?.quality} + {movieData?.lang}
          </span>

          <div className="poster">
            <Image
              // width={320}
              // height={450}
              quality={100}
              alt={`${movieData?.name}`}
              className="imgMain"
              src={`${IMG_URL}/${movieData?.thumb_url}`}
              loading="lazy"
              sizes="320px"
              // sizes="100vw"
              fill
              style={{
                objectFit: 'cover',
              }}
              placeholder={`data:image/svg+xml;base64,${toBase64(ShimmerImage(700, 475))}`}
              // blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8LL9mBQAF8wJYNapyngAAAABJRU5ErkJggg==`}
            />
          </div>

          <div className="details">
            <span className="addOn-custom">{movieData?.episode_current}</span>

            <div className="rating">
              {renderStars}
              <span className="ml-2">4/5</span>
            </div>

            <div className="tags truncate">{renderCategories()}</div>

            <h3 className={cn('mt-2', pattayaFont.className)}>
              {movieData?.name}
            </h3>

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
              <InfoItem
                icon={<icons.FaCalendarAlt />}
                label="Năm:"
                value={movieData?.year}
              />
            </div>

            <div className="score grid gap-1">
              <h4 className="tw-flex-1 text-lg font-semibold">
                TMDB Score <icons.MdOutlineSportsScore />
              </h4>
              <div className="tw-flex-1">
                <icons.GiVote color="#ff9800" />
                <span>Vote Average: {tmdbScore.voteAverage}</span>
              </div>
              <div className="tw-flex-1">
                <icons.GiVote color="#ff9800" />
                <span>Vote Count: {tmdbScore.voteCount}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  },
);

Card.displayName = 'Card';
export default Card;
