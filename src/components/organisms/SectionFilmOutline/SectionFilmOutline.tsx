import { FilmSections, TrendingSection } from '@/components/molecules';
import { titleLists } from '@/lib/declarations/constant';

const SectionFilmOutline: React.FC = () => {
  return (
    <div className="flex w-full flex-col space-y-4 lg:flex-row lg:space-x-3 lg:space-y-0">
      <ul className="w-full flex-grow space-y-4 lg:w-2/3">
        {titleLists.map((title, index) => (
          <li key={index} className="list-none">
            <FilmSections
              key={index}
              title={title}
              showSeeAll={true}
              cardQuantities={12}
            />
          </li>
        ))}
      </ul>
      <TrendingSection />
    </div>
  );
};

export default SectionFilmOutline;
