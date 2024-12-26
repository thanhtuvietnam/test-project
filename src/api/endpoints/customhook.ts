import { movieCategories } from '@/lib/declarations/constant';
import { ApiResponse, Data } from '@/types/apiResponse';
import { useQueries, useQuery, UseQueryResult } from '@tanstack/react-query';
import { useDebugValue } from 'react';

import { getMovieLists } from './fetchData';

// hook
export const useGetMovieLists = (
  param: string,
  page: number,
): UseQueryResult<Data, Error> => {
  const query = useQuery({
    queryKey: [param, page],
    queryFn: () => getMovieLists(param, page),
    staleTime: 60 * 1000 * 60,
    select: (data) => data?.data,
  });

  useDebugValue(`${param} - Page ${page} (${query.status})`);

  return query;
};

export const useGetMultiMovieLists = (): {
  data: (Data | undefined)[];
  status: ('pending' | 'error' | 'success')[];
} => {
  const filterCagegories = movieCategories.filter(
    (queryKey) => queryKey.param !== 'danh-sach/phim-moi-cap-nhat',
  );

  const queries = useQueries({
    queries: filterCagegories?.map((movieCategory) => ({
      queryKey: [`${movieCategory.param}`, movieCategory.page],
      queryFn: (): Promise<ApiResponse> =>
        getMovieLists(movieCategory.param, movieCategory.page),
      staleTime: 60 * 1000 * 60,
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result?.data?.data),
        status: results.map((result) => result?.status),
      };
    },
  });

  return queries;
};
