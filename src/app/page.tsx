import { Carousel } from '@/components/organisms';
import { MainTemplate } from '@/components/templates';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <MainTemplate>
        <section className={cn('group relative rounded-3xl shadow-lg')}>
          <Carousel />
        </section>
        <h1>Welcome to the Home Page</h1>
        <p>This is the content of the Home Page</p>
        <Link href="register">Register</Link>
      </MainTemplate>
    </>
  );
}
