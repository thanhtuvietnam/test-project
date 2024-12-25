import { Filter, RecommendMovies, TrendingSection } from '@/components/molecules';
import { BlockInfoSection } from '@/components/organisms';
import { cn } from '@/lib/utils';

const InfoFilmTemplate: React.FC = () => {
  return (
    <>
      <Filter />
      <div
        className={cn(
          'border-t-bgdark/50 dark:border-t-bglight/50',
          'flex w-full flex-col space-y-5 border-t lg:flex-row lg:space-x-3 lg:space-y-0',
        )}
      >
        <div className="mt-3 w-full flex-grow space-y-4 lg:w-2/3">
          <BlockInfoSection />
          <RecommendMovies />
        </div>
        <TrendingSection />
      </div>
    </>
  );
};

export default InfoFilmTemplate;
