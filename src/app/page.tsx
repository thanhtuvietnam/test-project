import { Carousel } from '@/components/organisms';
import { MainTemplate } from '@/components/templates';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <MainTemplate>
        <div className="wrapper px-1 pt-1">
          <section
            className={cn(
              'relative rounded-2xl border border-orange-600 bg-black'
            )}
          >
            <Carousel />
          </section>
          <h1>Welcome to the Home Page</h1>
          <p>This is the content of the Home Page</p>
          <Link href="register">Register</Link>
        </div>
      </MainTemplate>
    </>
  );
}
