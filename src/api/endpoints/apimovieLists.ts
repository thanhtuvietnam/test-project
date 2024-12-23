import { queryOptions, useQueries, useQuery } from '@tanstack/react-query';
import { useDebugValue } from 'react';

import { getMovieLists } from './fetchData';

interface MovieCategory {
  // queryKey: string;
  param: string;
  page: number;
}

const movieCategories: MovieCategory[] = [
  // { queryKey: 'PhimmoiLists', param: 'danh-sach/phim-moi-cap-nhat', page: 1 },
  // { queryKey: 'PhimboLists', param: 'danh-sach/phim-bo', page: 1 },
  // { queryKey: 'PhimleLists', param: 'danh-sach/phim-le', page: 1 },
  // { queryKey: 'TvShowsLists', param: 'danh-sach/tv-shows', page: 1 },
  // { queryKey: 'HoatHinhLists', param: 'danh-sach/hoat-hinh', page: 1 },
  { param: 'danh-sach/phim-moi-cap-nhat', page: 1 },
  { param: 'danh-sach/phim-bo', page: 1 },
  { param: 'danh-sach/phim-le', page: 1 },
  { param: 'danh-sach/tv-shows', page: 1 },
  { param: 'danh-sach/hoat-hinh', page: 1 },
];

// export const movieListsOptions: UseQueryOptions<ApiResponse, Error>[] = movieCategories.map(
export const movieListsOptions = movieCategories.map(({ param, page }) =>
  queryOptions({
    queryKey: [param, page],
    queryFn: () => getMovieLists(param, page),
    staleTime: Infinity,
    retry: (failureCount, error): boolean => {
      if (error.message.includes('404')) return false;

      return failureCount < 2;
    },
    select: (data) => data?.data,
  }),
);

export const useGetMovieLists = (param: string, page: number) => {
  const query = useQuery({
    queryKey: [param, page],
    queryFn: () => getMovieLists(param, page),
    staleTime: 60 * 1000 * 60,
    select: (data) => data?.data,
  });

  useDebugValue(`${param} - Page ${page} (${query.status})`);

  return query;
};

export const useGetMultiMovieLists = () => {
  const filterCagegories = movieCategories.filter(
    (queryKey) => queryKey.param !== 'danh-sach/phim-moi-cap-nhat',
  );

  const queries = useQueries({
    queries: filterCagegories?.map((movieCategory) => ({
      queryKey: [`${movieCategory.param}`, movieCategory.page],
      queryFn: () => getMovieLists(movieCategory.param, movieCategory.page),
      staleTime: 60 * 1000 * 60,
      // select: (data) => data?.data,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result?.data?.data),
        status: results.map((result) => result?.status),
      };
    },
  });

  // console.log(queries);

  return queries;
};
