import { BackgroundGradient, Card } from '@/components/atoms';
import { SecondSlider } from '@/components/molecules';
import { Carousel } from '@/components/organisms';
import { MainTemplate } from '@/components/templates';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <MainTemplate>
        <section
          className={cn('group relative select-none rounded-3xl shadow-lg')}
        >
          <Carousel />
        </section>
        <h1>Welcome to the Home Page</h1>
        <SecondSlider />
        <Link href="/signup">Register</Link>
      </MainTemplate>
    </>
  );
}
