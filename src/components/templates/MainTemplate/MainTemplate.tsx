import { Footer, Header, Navbar } from '@/components/organisms';

interface MainTemplateProps {
  children: React.ReactNode;
}
const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="wrapper min-h-screen p-1">{children}</main>
      <Footer />
    </>
  );
};

export default MainTemplate;
