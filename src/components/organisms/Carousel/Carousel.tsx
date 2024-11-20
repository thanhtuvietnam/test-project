import { BackgroundGradient } from '@/components/atoms';
import { Slider } from '@/components/molecules';
import { ApiResponse } from '@/types/apiResponse';

const Carousel: React.FC = async () => {
  const res = await fetch(
    'https://ophim1.com/v1/api/danh-sach/phim-moi-cap-nhat?page=1',
    {
      cache: 'force-cache',
    }
  );
  const movies: ApiResponse = await res.json();

  return (
    <>
      <BackgroundGradient>
        <Slider data={movies.data} />
      </BackgroundGradient>
    </>
  );
};

export default Carousel;
