'use client';
import { ContentBlock, MiniSliderBlock } from '@/components/atoms';
import { cn } from '@/lib/utils';
import { Movie } from '@/types/apiResponse';
import { motion } from 'framer-motion';

interface SliderContentProps {
  content: Movie;
}
const SliderContent: React.FC<SliderContentProps> = ({ content }) => {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 50 }}
      aria-labelledby="slider-content"
      className={cn(
        'absolute z-20 w-full px-3 md:px-10 lg:px-16 xl:px-20',
        // responsive
        'macbookAir:bottom-34 bottom-5 lg:bottom-20 prodisPlay:bottom-32 fullHd:bottom-48'
      )}
    >
      <ContentBlock
        year={content?.year}
        time={content?.time}
        name={content?.name}
        lang={content?.lang}
        quality={content?.quality}
        origin_name={content?.origin_name}
      />
      <MiniSliderBlock />
    </motion.section>
  );
};

export default SliderContent;
