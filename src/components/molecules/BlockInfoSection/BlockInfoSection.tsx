import { BackgroundGradient, SideInfo } from '@/components/atoms';

import { CardInfo } from '../CardInfo';

const BlockInfoSection: React.FC = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/3">
        <BackgroundGradient>
          <CardInfo />
        </BackgroundGradient>
      </div>
      <SideInfo />
    </div>
  );
};

export default BlockInfoSection;
