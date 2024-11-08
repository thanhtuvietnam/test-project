'use client';

import { useRef } from 'react';

const BackgroundVid: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      muted={true}
      ref={videoRef}
      autoPlay={true}
      src="/videos/authVid.mp4"
      disablePictureInPicture={true}
      className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      loop
    />
  );
};

export default BackgroundVid;
