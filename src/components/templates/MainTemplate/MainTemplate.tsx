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
      <main className="wrapper min-h-screen select-none p-1">{children}</main>
      <Footer />
    </>
  );
};

export default MainTemplate;
