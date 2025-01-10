'use client';

import { useGetMovieLists } from '@/api/endpoints/customhook';

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
import { SliderTab } from '@/components/atoms/SliderTab';
import { SliderContent } from '@/components/molecules/SliderContent';
import { cn } from '@/lib/utils';
import { Item } from '@/types/apiResponse';
import { useTheme } from 'next-themes';
import { JSX } from 'react';
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = (): JSX.Element => {
  // const { resolvedTheme } = useTheme();
  const { data: phimmoi, status } = useGetMovieLists(
    'danh-sach',
    'phim-moi-cap-nhat',
    1,
  );
  if (status === 'pending') return <p>Loading...</p>;
  if (status === 'error') return <p>Error</p>;

  return (
    <>
      <Swiper
        effect="fade"
        slidesPerView={1}
        spaceBetween={50}
        className="group/slider"
        fadeEffect={{
          crossFade: true,
        }}
        navigation={true}
        // grabCursor={true}
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
          phimmoi?.items?.map((movie: Item, index: number) => (
            <SwiperSlide key={index}>
              <div
                className={cn(
                  'tw-black-backdrop tw-light-backdrop absolute z-0 h-full w-full rounded-3xl transition duration-500',
                )}
              />
              <SliderTab
                // theme={resolvedTheme || 'dark'}
                tabPicAlt={movie?.name}
                tabPic={movie?.poster_url}
                vote_average={movie?.tmdb?.vote_average}
              />
              <SliderContent content={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
