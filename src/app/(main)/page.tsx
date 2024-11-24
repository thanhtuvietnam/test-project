import { SecondSlider } from '@/components/molecules';
import { Carousel, SectionFilmOutline } from '@/components/organisms';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <div className={cn('group relative select-none rounded-3xl shadow-lg')}>
        <Carousel />
      </div>
      <SecondSlider />
      <SectionFilmOutline />
    </>
  );
}
