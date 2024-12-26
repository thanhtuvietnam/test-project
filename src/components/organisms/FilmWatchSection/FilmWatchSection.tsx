import {
  FilmBox,
  FilmBoxContent,
  InfoEpisodes,
  InfoTable,
} from '@/components/molecules';

const FilmWatchSection: React.FC = () => {
  return (
    <>
      <FilmBox />
      <FilmBoxContent />
      <InfoEpisodes />
      <InfoEpisodes />
      <InfoTable />
    </>
  );
};

export default FilmWatchSection;
