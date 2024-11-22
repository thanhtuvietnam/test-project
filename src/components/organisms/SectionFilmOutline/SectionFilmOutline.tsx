import { FilmSections, TrendingSection } from '@/components/molecules';

const SectionFilmOutline: React.FC = () => {
  return (
    <div className="center-flex">
      <FilmSections />
      <TrendingSection />
    </div>
  );
};

export default SectionFilmOutline;
