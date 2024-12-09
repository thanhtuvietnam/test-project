'use client';
import { BackgroundGradient, Card, SectionTitle } from '@/components/atoms';
import { titleLists } from '@/lib/declarations/constant';
import { Autoplay, EffectCoverflow, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperBreakpoints = {
  // 320: { slidesPerView: 2, spaceBetween: 10 },
  // 540: { slidesPerView: 3, spaceBetween: 22 },
  // 712: { slidesPerView: 4, spaceBetween: 82 },
  1024: { slidesPerView: 6, spaceBetween: 22 },
};

const SecondSlider: React.FC = () => {
  return (
    <section className="my-5" aria-labelledby="second-slider">
      <SectionTitle title={'PHIM MỚI'} />
      <Swiper
        // centeredSlides={true}
        // slidesPerView={'auto'}
        slidesPerView={6}
        grabCursor={true}
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
    </section>
  );
};

export default SecondSlider;
