import { API_URL } from '@/lib/declarations/constant';
import { ApiResponse } from '@/types/apiResponse';

export async function getPhimmoiLists(): Promise<ApiResponse> {
  const res = await fetch(`${API_URL}/danh-sach/phim-moi-cap-nhat?page=1`, {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch phimmoiLists');
  }
  const phimmoiLists: ApiResponse = await res.json();

  return phimmoiLists;
}
