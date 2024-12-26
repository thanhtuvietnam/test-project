import {
  movieCategories,
  quocGiaSubmenus,
  theLoaiSubmenus,
} from '@/lib/declarations/constant';
import { ApiResponse } from '@/types/apiResponse';
import { queryOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getMovieLists } from './fetchData';

export const movieListsOptions: UseQueryOptions<
  ApiResponse,
  Error,
  ApiResponse['data'],
  [string, number]
>[] = movieCategories.map(({ param, page }) =>
  queryOptions({
    queryKey: [param, page],
    queryFn: () => getMovieLists(param, page),
    staleTime: 60 * 1000 * 60,
    retry: (failureCount, error): boolean => {
      if (error.message.includes('404')) return false;

      return failureCount < 2;
    },
    select: (data) => data?.data,
  }),
);
// New theLoaiSubmenus query options
export const theLoaiListsOptions: UseQueryOptions<
  ApiResponse,
  Error,
  ApiResponse['data'],
  [string, number]
>[] = theLoaiSubmenus.map(({ param, page }) =>
  queryOptions({
    queryKey: [`/${param}`, page],
    queryFn: () => getMovieLists(param, page),
    staleTime: Infinity,
    retry: (failureCount, error): boolean => {
      if (error.message.includes('404')) return false;

      return failureCount < 2;
    },
    select: (data) => data?.data,
  }),
);

// New quocGiaSubmenus query options
export const quocGiaListsOptions: UseQueryOptions<
  ApiResponse,
  Error,
  ApiResponse['data'],
  [string, number]
>[] = quocGiaSubmenus.map(({ param, page }) =>
  queryOptions({
    queryKey: [`/${param}`, page],
    queryFn: () => getMovieLists(param, page),
    staleTime: Infinity,
    retry: (failureCount, error): boolean => {
      if (error.message.includes('404')) return false;

      return failureCount < 2;
    },
    select: (data) => data?.data,
  }),
);

const useTodos = () => {
  const { data: todos, ...rest } = useQuery({
    queryKey: ['todos'],
    queryFn: () => api.getTodos(),
  });

  return {
    todos,
    ...rest,
  };
};
