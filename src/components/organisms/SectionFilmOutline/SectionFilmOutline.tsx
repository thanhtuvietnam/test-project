import { FilmSections, TrendingSection } from '@/components/molecules';

const SectionFilmOutline: React.FC = () => {
  return (
    <div className="flex w-full flex-col space-y-4 lg:flex-row lg:space-x-3 lg:space-y-0">
      <FilmSections />
      <TrendingSection />
    </div>
  );
};

export default SectionFilmOutline;
