import { SectionTitle } from '@/components/atoms';
import { titleLists } from '@/lib/declarations/constant';

const TrendingSection: React.FC = () => {
  return (
    <section className="trendingSection">
      <SectionTitle showSeeAll={false} title={'TrendingNow'} />
    </section>
  );
};

export default TrendingSection;
