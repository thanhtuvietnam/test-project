'use client';

import { SliderTab } from '@/components/atoms/SliderTab';
import { SliderContent } from '@/components/molecules/SliderContent';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import { Data, Movie } from '@/types/apiResponse';
import {
  Autoplay,
  EffectCreative,
  EffectFade,
  EffectFlip,
  EffectCards,
  Navigation,
  Pagination,
  Scrollbar,
  FreeMode,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './slider.css';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cards';
import 'swiper/css/free-mode';

interface SliderProps {
  data: Data;
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <>
      <Swiper
        effect="fade"
        navigation={true}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={50}
        fadeEffect={{ crossFade: true }}
        modules={[EffectFade, Autoplay, Scrollbar, Pagination, Navigation]}
        scrollbar={{
          draggable: true,
        }}
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
        {data?.items?.map((movie: Movie, index: number) => (
          <SwiperSlide key={index}>
            <div
              className={cn(
                'tw-black-backdrop tw-light-backdrop absolute z-0 h-full w-full rounded-3xl transition duration-500',
                'group-hover:bg-neutral-black/20',
                'dark:group-hover:bg-neutral-white/20',
                'group-hover:scale-105'
              )}
            />
            <SliderTab
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
