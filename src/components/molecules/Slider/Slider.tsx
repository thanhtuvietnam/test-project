'use client';

import { SliderTab } from '@/components/atoms/SliderTab';
import 'swiper/css';
import { SliderContent } from '@/components/molecules/SliderContent';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider: React.FC = () => {
  const handleSwiper = (swiper) => {
    console.log('Swiper instance:', swiper);
    // Bạn có thể sử dụng instance của Swiper để điều khiển slider
    swiper.slideTo(0); // Ví dụ: chuyển đến slide thứ 2
  };

  // if (typeof window == 'undefined') {
  //   console.log('Application is on server side');
  // } else {
  //   alert('Application is on client side');
  // }
  if (process.browser) {
    console.log('Variant 2: Application is on client side');
  } else {
    console.log('Variant 2: Application is on server side');
  }

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={handleSwiper}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <SliderTab />
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderTab />
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderTab />
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderTab />
          <SliderContent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderTab />
          <SliderContent />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
