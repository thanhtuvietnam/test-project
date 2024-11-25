import {
  BlockInfoSection,
  RecommendMovies,
  TrendingSection,
} from '@/components/molecules';

const InfoFilmTemplate: React.FC = () => {
  return (
    <div className="flex w-full flex-col space-y-5 lg:flex-row lg:space-x-3 lg:space-y-0">
      <div className="w-full flex-grow space-y-4 lg:w-2/3">
        <BlockInfoSection />
        <RecommendMovies />
      </div>
      <TrendingSection />
    </div>
  );
};

export default InfoFilmTemplate;
