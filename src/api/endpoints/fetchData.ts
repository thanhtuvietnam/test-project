import { API_URL } from '@/lib/declarations/constant';
import { ApiMovieDetails } from '@/types/apiMovieDetails';
import { ApiResponse } from '@/types/apiResponse';

const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    cache: 'no-cache',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Error ${response.status}: ${errorData.message || 'Failed to fetch'}`,
    );
  }

  return response.json();
};

export const getMovieLists = (
  param: string,
  page: number,
): Promise<ApiResponse> => {
  const url = `${API_URL}/${param}?page=${page}`;

  return fetchData<ApiResponse>(url);
};

export const getMovieDetails = (slug: string): Promise<ApiMovieDetails> => {
  const url = `${API_URL}/phim/${encodeURIComponent(slug)}`;

  return fetchData<ApiMovieDetails>(url);
};
