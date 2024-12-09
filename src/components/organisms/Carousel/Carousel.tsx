import { Slider } from '@/components/molecules';
import { getPhimmoiLists } from 'src/api/endpoints/apimovieLists';

const Carousel: React.FC = async () => {
  const movies = await getPhimmoiLists();

  return (
    <>
      <Slider data={movies.data} />
    </>
  );
};

export default Carousel;
