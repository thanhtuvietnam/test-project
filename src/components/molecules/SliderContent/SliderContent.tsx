import { ContentBlock, MiniSliderBlock } from '@/components/atoms';

const SliderContent: React.FC = () => {
  return (
    <div className="center-flex absolute bottom-20 z-20 w-full">
      <ContentBlock />
      <MiniSliderBlock />
    </div>
  );
};

export default SliderContent;
