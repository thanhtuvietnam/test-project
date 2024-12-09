const FilmBoxPlayer: React.FC = () => {
  return (
    <>
      <video className="rounded-xl" src="/videos/authVid.mp4" controls preload="auto" />
    </>
  );
};

export default FilmBoxPlayer;
