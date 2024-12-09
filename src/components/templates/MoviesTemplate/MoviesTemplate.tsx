import { FilmSections, RecommendMovies, TrendingSection } from '@/components/molecules';

interface MoviesTemplateProps {
  title?: string;
}
const MoviesTemplate: React.FC<MoviesTemplateProps> = ({ title = '' }) => {
  return (
    <div className="flex w-full flex-col space-y-5 lg:flex-row lg:space-x-3 lg:space-y-0">
      <div className="w-full flex-grow space-y-4 lg:w-2/3">
        <FilmSections title={title} cardQuantities={24} showSeeAll={false} />
        <RecommendMovies />
      </div>
      <TrendingSection />
    </div>
  );
};

export default MoviesTemplate;
