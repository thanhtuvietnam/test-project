import { ContentBlock, MiniSliderBlock } from '@/components/atoms';
import { cn } from '@/lib/utils';

const SliderContent: React.FC = ({ content }) => {
  return (
    <div
      className={cn(
        'center-flex absolute z-20 w-full select-none px-3 lg:px-10',
        'bottom-5 lg:bottom-20 prodisPlay:bottom-32 macbookAir:bottom-36 fullHd:bottom-48'
      )}
    >
      <ContentBlock name={content?.name} origin_name={content?.origin_name} />
      <MiniSliderBlock />
    </div>
  );
};

export default SliderContent;
