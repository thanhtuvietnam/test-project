import Image from 'next/image';

const Avatar: React.FC = () => {
  return (
    <Image
      width={40}
      height={20}
      alt="avatar"
      typeof="button"
      className="not-prose rounded-full"
      src={`https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474069DBY/avatar-troll-cuc-chat-cho-facebook_075111905.jpg`}
    />
  );
};

export default Avatar;
