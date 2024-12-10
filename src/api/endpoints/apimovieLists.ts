import { API_URL } from '@/lib/declarations/constant';
import { ApiResponse } from '@/types/apiResponse';
import { dehydrate, QueryClient } from '@tanstack/react-query';

export async function getMovieLists({
  page,
  param,
}: {
  param: string;
  page: number;
}): Promise<ApiResponse> {
  const res = await fetch(`${API_URL}/danh-sach/${param}?page=${page}`, {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch phimmoiLists');
  }
  const phimmoiLists: ApiResponse = await res.json();

  return phimmoiLists;
}

export async function getStaticMovieListsProps(): Promise<{ props: { dehydratedState: unknown } }> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryFn: () => getMovieLists({ page: 1, param: 'phim-moi-cap-nhat' }),

    queryKey: ['danhSachPhimMoiCapNhat'],
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
