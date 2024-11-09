import { MainTemplate } from '@/components/templates';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <MainTemplate>
        <section className={cn('themes min-h-screen')}>
          <div className="wrapper">
            <h1>Welcome to the Home Page</h1>
            <p>This is the content of the Home Page</p>
            <Link href="register">Register</Link>
          </div>
        </section>
      </MainTemplate>
    </>
  );
}
