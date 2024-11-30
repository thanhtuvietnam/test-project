const FilmBoxPlayer: React.FC = () => {
  return (
    <>
      <video
        preload="auto"
        className="rounded-xl"
        src="/videos/authVid.mp4"
        controls
      />
    </>
  );
};

export default FilmBoxPlayer;
