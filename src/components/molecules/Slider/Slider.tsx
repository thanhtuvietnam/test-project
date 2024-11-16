'use client';

import { SliderTab } from '@/components/atoms/SliderTab';
import { SliderContent } from '@/components/molecules/SliderContent';
import 'swiper/css';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import { Data, Movie } from '@/types/apiResponse';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SliderProps {
  data: Data;
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className={cn('shadow-custom rounded-3xl')}
        // onSwiper={handleSwiper}
        // onSlideChange={() => console.log('slide change')}
      >
        {data?.items?.map((movie: Movie, index: number) => (
          <SwiperSlide key={index}>
            <div
              className={cn(
                'tw-black-backdrop tw-light-backdrop absolute z-0 h-full w-full rounded-3xl transition duration-300',
                'group-hover:bg-neutral-black/20',
                'dark:group-hover:bg-neutral-white/20'
              )}
            />
            <SliderTab tabPicAlt={movie?.name} tabPic={movie?.poster_url} />
            <SliderContent content={movie} />
            <div className="absolute right-5 top-3 z-20 flex items-center justify-center rounded-full bg-green-500/50 p-2">
              <span>{movie?.tmdb?.vote_average}</span>
              <icons.FaStar />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
