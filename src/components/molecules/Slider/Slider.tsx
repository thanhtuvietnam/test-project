'use client';

import { movieListsOptions, useGetMovieLists } from '@/api/endpoints/apimovieLists';
import { SliderTab } from '@/components/atoms/SliderTab';

import './slider.css';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SliderContent } from '@/components/molecules/SliderContent';
import { cn } from '@/lib/utils';
import { Movie } from '@/types/apiResponse';
import { useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { JSX } from 'react';
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = (): JSX.Element => {
  // const queryClient = useQueryClient();
  // const phimmoi = queryClient.getQueryData(['PhimmoiCapnhatLists']);

  const { data: phimmoi, status } = useGetMovieLists('danh-sach/phim-moi-cap-nhat', 1);
  if (status === 'pending') return <p>Loading...</p>;
  if (status === 'error') return <p>Error</p>;

  return (
    <>
      <Swiper
        effect="fade"
        slidesPerView={1}
        spaceBetween={50}
        className="group/slider"
        fadeEffect={{ crossFade: true }}
        navigation={true}
        grabCursor={true}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectFade, Autoplay, Scrollbar, Pagination, Navigation]}
        pagination={{
          // dynamicBullets: true,
          type: 'progressbar',
        }}
        autoplay={{
          delay: 5000,
          // disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {phimmoi &&
          phimmoi?.items?.map((movie: Movie, index: number) => (
            <SwiperSlide key={index}>
              {/* <Link href={`/film-info/${movie.slug}`}> */}
              <div
                className={cn(
                  'tw-black-backdrop tw-light-backdrop absolute z-0 h-full w-full rounded-3xl transition duration-500',
                  'group-hover/slider:bg-neutral-black/20',
                  'dark:group-hover/slider:bg-neutral-white/20',
                )}
              />
              <SliderTab
                tabPicAlt={movie?.name}
                tabPic={movie?.poster_url}
                vote_average={movie?.tmdb?.vote_average}
              />
              <SliderContent content={movie} />
              {/* </Link> */}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
