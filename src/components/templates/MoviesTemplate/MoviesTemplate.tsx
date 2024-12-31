'use client';
import { useGetMovieLists } from '@/api/endpoints/customhook';
import { FilmSections, PageController, RecommendMovies, TrendingSection } from '@/components/molecules';
import { usePathname } from 'next/navigation';
import { JSX, useState } from 'react';

// const MoviesTemplate = ({ param }): JSX.Element => {
const MoviesTemplate = ({ category, param }): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  // const pathName = usePathname();
  //
  // let param = '';
  //
  // switch (true) {
  //   case pathName.includes('phim-bo'):
  //     // queryKey = 'PhimboLists';
  //     param = 'danh-sach/phim-bo';
  //     break;
  //   case pathName.includes('phim-le'):
  //     // queryKey = 'PhimleLists';
  //     param = 'danh-sach/phim-le';
  //     break;
  //   case pathName.includes('tv-shows'):
  //     // queryKey = 'TvShowsLists';
  //     param = 'danh-sach/tv-shows';
  //     break;
  //   case pathName.includes('hoat-hinh'):
  //     // queryKey = 'HoatHinhLists';
  //     param = 'danh-sach/hoat-hinh';
  //     break;
  //   default:
  //     // queryKey = pathName;
  //     param = pathName;
  //     break;
  // }

  const { data, status } = useGetMovieLists(category, param, currentPage);
  if (status === 'pending') return <div>Loading...</div>;
  if (status === 'error') return <div>Error</div>;

  const totalItems = data && data?.params?.pagination?.totalItems;
  const itemsPerPage = 24;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex w-full flex-col space-y-5 lg:flex-row lg:space-x-3 lg:space-y-0">
      <div className="w-full grow space-y-4 lg:w-2/3">
        <div>
          <FilmSections cardSlice={1} sectionData={data} title={data?.titlePage} showSeeAll={false} />
          <PageController
            currentPage={currentPage}
            totalPages={totalPages}
            // onPageChange={setCurrentPage}
            onPageChange={handlePageChange}
          />
        </div>
        <RecommendMovies />
      </div>
      <TrendingSection />
    </div>
  );
};

export default MoviesTemplate;
