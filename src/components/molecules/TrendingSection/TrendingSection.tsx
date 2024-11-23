import { SectionTitle } from '@/components/atoms';
import { titleLists } from '@/lib/declarations/constant';

const TrendingSection: React.FC = () => {
  return (
    <section className="w-full flex-grow-0 lg:w-1/3">
      <SectionTitle showSeeAll={false} title={'TrendingNow'} />
    </section>
  );
};

export default TrendingSection;
