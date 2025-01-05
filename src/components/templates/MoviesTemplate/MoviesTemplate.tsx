'use client';
import { useGetMovieLists } from '@/api/endpoints/customhook';
import FilmSectionLoading from '@/app/(main)/[category]/[param]/@FilmSections/loading';
import { FilmSections, PageController } from '@/components/molecules';
import { useTheme } from 'next-themes';
import { JSX, useState } from 'react';

const MoviesTemplate = ({
  category,
  param,
}: {
  category: string;
  param: string;
}): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { resolvedTheme } = useTheme();
  // const [loading, setLoading] = useState<boolean>(false);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    // setLoading(true);
  };

  const { data, status } = useGetMovieLists(category, param, currentPage);
  // if (data) return <Loading />;
  // const datalength = data && data?.items.length;
  if (status === 'pending') return <FilmSectionLoading />;
  if (status === 'error') return <div>Error</div>;
  // if (loading) return <Loading />;

  const totalItems = data && data?.params?.pagination?.totalItems;
  const itemsPerPage = 24;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <FilmSections
        theme={resolvedTheme || 'dark'}
        cardSlice={1}
        sectionData={data}
        title={data?.titlePage}
        showSeeAll={false}
      />
      <PageController
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default MoviesTemplate;
