import { Footer, Header, Navbar } from '@/components/organisms';
import { JSX } from 'react';

const MainTemplate = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="container min-h-screen p-1 select-none">{children}</main>
      <Footer />
    </>
  );
};

export default MainTemplate;
