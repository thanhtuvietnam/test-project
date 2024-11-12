'use client';

import { SliderTab } from '@/components/atoms/SliderTab';
import { SliderContent } from '@/components/molecules/SliderContent';
import 'swiper/css';
import { cn } from '@/lib/utils';
import { Data, Movie } from '@/types/apiResponse';
import Link from 'next/link';
import React, { useEffect, useState, useTransition } from 'react';
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
        className={cn('rounded-3xl')}
        // onSwiper={handleSwiper}
        // onSlideChange={() => console.log('slide change')}
      >
        {data?.items?.map((movie: Movie, index: number) => (
          <SwiperSlide key={index}>
            {/* <Link href="/login"> */}
            {/* custom layer */}
            <div
              className={cn(
                'tw-black-backdrop tw-light-backdrop absolute z-0 h-full w-full rounded-3xl transition duration-300',
                'group-hover:bg-neutral-black/20',
                'dark:group-hover:bg-neutral-white/20'
              )}
            />

            {/* main */}
            <SliderTab tabPicAlt={movie?.name} tabPic={movie?.poster_url} />
            <SliderContent />
            {/* </Link> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
