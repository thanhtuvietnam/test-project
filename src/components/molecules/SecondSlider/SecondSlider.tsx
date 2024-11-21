'use client';
import { BackgroundGradient, Card } from '@/components/atoms';
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const swiperBreakpoints = {
  // 320: { slidesPerView: 2, spaceBetween: 10 },
  // 540: { slidesPerView: 3, spaceBetween: 22 },
  // 712: { slidesPerView: 4, spaceBetween: 82 },
  1024: { slidesPerView: 6, spaceBetween: 22 },
};

const SecondSlider: React.FC = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        // centeredSlides={true}
        // slidesPerView={'auto'}
        slidesPerView={6}
        navigation={true}
        // spaceBetween={22}
        breakpoints={swiperBreakpoints}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          // disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {[...Array(40)].map((_, index) => (
          <SwiperSlide key={index}>
            <BackgroundGradient>
              <Card />
            </BackgroundGradient>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SecondSlider;
