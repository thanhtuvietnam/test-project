import { movieCategories } from '@/lib/declarations/constant';
import { menuItems } from '@/lib/declarations/data';
import { ApiResponse, Data } from '@/types/apiResponse';
import { useQueries, useQuery, UseQueryResult } from '@tanstack/react-query';
import { useDebugValue } from 'react';

import { getMovieLists } from './fetchData';

// hook
export const useGetMovieLists = (category: string, param: string, page: number): UseQueryResult<Data, Error> => {
  const query = useQuery({
    queryKey: [category, param, page],
    queryFn: () => getMovieLists(category, param, page),
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
  // const filterCagegories = movieCategories.filter((queryKey) => queryKey.param !== 'danh-sach/phim-moi-cap-nhat');
  const filterCagegories = menuItems.filter((item) => item.category === 'danh-sach');

  const sectionCategories = filterCagegories.filter((item) => item.param !== 'phim-moi-cap-nhat');

  const queries = useQueries({
    queries: sectionCategories?.map((movieCategory) => ({
      queryKey: [`${movieCategory.category}`, `${movieCategory.param}`, movieCategory.page],
      queryFn: (): Promise<ApiResponse> => getMovieLists(movieCategory.category || '', movieCategory.param || '', movieCategory.page || 1),

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
