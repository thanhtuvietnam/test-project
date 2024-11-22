import { SectionTitle } from '@/components/atoms';

const FilmSections: React.FC = () => {
  return (
    <section className="filmSections">
      <SectionTitle showSeeAll={true} title={'phim bo'} />
    </section>
  );
};

export default FilmSections;
