'use client';
import { useGetMultiMovieLists } from '@/api/endpoints/customhook';
import { FilmSections, TrendingSection } from '@/components/molecules';
const SectionFilmOutline: React.FC = () => {
  const { data, status } = useGetMultiMovieLists();
  // if (status === 'pending') return <p>Loading...</p>;
  // if (status === 'error') return <p>Error</p>;

  return (
    <div className="flex w-full flex-col space-y-4 lg:flex-row lg:space-x-3 lg:space-y-0">
      <ul className="w-full flex-grow space-y-4 lg:w-2/3">
        {data &&
          data?.map((item, index) => (
            <li key={index} className="list-none">
              <FilmSections cardSlice={2} sectionData={item} title={item?.titlePage} />
            </li>
          ))}
      </ul>
      <TrendingSection />
    </div>
  );
};

export default SectionFilmOutline;
