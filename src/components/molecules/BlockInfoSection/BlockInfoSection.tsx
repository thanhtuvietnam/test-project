import {
  BackgroundGradient,
  Card,
  GlareCardEffect,
  SideInfo,
} from '@/components/atoms';

const BlockInfoSection: React.FC = () => {
  return (
    <div className="flex w-full">
      <GlareCardEffect>
        <BackgroundGradient>
          <Card />
        </BackgroundGradient>
      </GlareCardEffect>
      <SideInfo />
    </div>
  );
};

export default BlockInfoSection;
