import { Slider } from '@/components/molecules';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getMovieLists } from 'src/api/endpoints/apimovieLists';

const Carousel: React.FC = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryFn: () => getMovieLists({ page: 1, param: 'phim-moi-cap-nhat' }),
    queryKey: ['danhSachPhimMoiCapNhat'],
  });
  const phimmoilist = queryClient.getQueryData<{ data: any }>(['danhSachPhimMoiCapNhat']);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Slider data={phimmoilist?.data} />
    </HydrationBoundary>
  );
};

export default Carousel;
