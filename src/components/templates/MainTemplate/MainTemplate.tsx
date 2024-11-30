import Loading from '@/app/(main)/loading';
import { Footer, Header, Navbar } from '@/components/organisms';
import { Suspense } from 'react';

interface MainTemplateProps {
  children: React.ReactNode;
}
const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
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
