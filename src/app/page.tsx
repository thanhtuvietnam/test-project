import { BackgroundGradient, Card } from '@/components/atoms';
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
        <div className="center-flex">
          <BackgroundGradient>
            <Card />
          </BackgroundGradient>
          <BackgroundGradient>
            <Card />
          </BackgroundGradient>
          <BackgroundGradient>
            <Card />
          </BackgroundGradient>
          <BackgroundGradient>
            <Card />
          </BackgroundGradient>
          <BackgroundGradient>
            <Card />
          </BackgroundGradient>
          <BackgroundGradient>
            <Card />
          </BackgroundGradient>
        </div>
        <Link href="/signup">Register</Link>
      </MainTemplate>
    </>
  );
}
