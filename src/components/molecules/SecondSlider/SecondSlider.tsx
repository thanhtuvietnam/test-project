'use client';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useGetMovieLists } from '@/api/endpoints/customhook';
import { BackgroundGradient, Card, SectionTitle } from '@/components/atoms';
import { Item } from '@/types/apiResponse';
import { JSX } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperBreakpoints = {
  // 320: { slidesPerView: 2, spaceBetween: 10 },
  // 540: { slidesPerView: 3, spaceBetween: 22 },
  // 712: { slidesPerView: 4, spaceBetween: 82 },
  1024: {
    slidesPerView: 6,
    spaceBetween: 22,
  },
};

const SecondSlider = (): JSX.Element => {
  const { data: phimmoi, status } = useGetMovieLists('danh-sach', 'phim-moi-cap-nhat', 1);
  if (status === 'pending') return <p>Loading...</p>;
  if (status === 'error') return <p>Error</p>;

  return (
    <section className="my-5" aria-labelledby="second-slider">
      <SectionTitle title={'PHIM MỚI'} aria-labelledby="second-slider" />

      <Swiper
        slidesPerView={6}
        grabCursor={true}
        navigation={true}
        breakpoints={swiperBreakpoints}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
      >
        {phimmoi?.items?.map((moviedata: Item) => (
          <SwiperSlide className="p-1" key={moviedata?._id}>
            <BackgroundGradient>
              <Card movieData={moviedata} />
            </BackgroundGradient>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SecondSlider;
