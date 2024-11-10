import { cn } from '@/lib/utils';
import Image from 'next/image';

const SliderTab: React.FC = () => {
  return (
    <>
      <Image
        width={1440}
        height={800}
        alt={'Slider Tab'}
        src={'https://picsum.photos/1440/800'}
        className={cn(
          'h-[200px] w-[1440px] sm:h-[400px] md:h-[500px] min-[1440px]:h-[600px] 2xl:h-[700px] min-[1920px]:h-[800px]',
          'rounded-2xl object-cover'
        )}
      />
    </>
  );
};

export default SliderTab;
