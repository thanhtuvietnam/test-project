import { Footer, Header, Navbar } from '@/components/organisms';

interface MainTemplateProps {
  children: React.ReactNode;
}
const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className="mainTemplate">
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
