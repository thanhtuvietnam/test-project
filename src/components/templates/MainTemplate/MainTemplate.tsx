import Loading from '@/app/(main)/loading';
import { Footer, Header, Navbar } from '@/components/organisms';
import { JSX, Suspense } from 'react';

const MainTemplate = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <Header />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <main className="wrapper min-h-screen select-none p-1">{children}</main>
      </Suspense>
      <Footer />
    </>
  );
};

export default MainTemplate;
