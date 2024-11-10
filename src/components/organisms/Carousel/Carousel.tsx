import { Slider, SliderContent } from '@/components/molecules';

const Carousel: React.FC = () => {
  // if (typeof window == 'undefined') {
  //   console.log('Application is on server side');
  // } else {
  //   alert('Application is on client side');
  // }

  // if (process.browser) {
  //   console.log('Variant 2: Application is on client side');
  // } else {
  //   console.log('Variant 2: Application is on server side');
  // }

  return (
    <>
      <Slider />
    </>
  );
};

export default Carousel;
