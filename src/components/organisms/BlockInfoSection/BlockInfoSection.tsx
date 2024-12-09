import { BackgroundGradient, SideInfo } from '@/components/atoms';
import { CardInfo, InfoContent, InfoEpisodes, InfoTable } from '@/components/molecules';

const BlockInfoSection: React.FC = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-1/3">
          <BackgroundGradient>
            <CardInfo />
          </BackgroundGradient>
        </div>
        <SideInfo
          qua={'HD'}
          view={100}
          lang={'vi'}
          year={2021}
          time={'1h 30m'}
          title={'tuluu'}
          actor={'tuluu'}
          imdbScore={9.5}
          country={['USA']}
          director={'tuluu'}
          newestEpisode={'1'}
          originalName={'tuluu'}
          episodeCurrent={'Hoan tat (1/1)'}
          category={['Action', 'Adventure']}
        />
      </div>
      <InfoEpisodes />
      <InfoContent />
      <InfoTable />
    </>
  );
};

export default BlockInfoSection;
