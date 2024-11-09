import Image from 'next/image';

const Avatar: React.FC = () => {
  // const dropdown = true;
  const dropdown = false;

  return (
    <div className="relative w-32">
      <Image
        width={40}
        height={20}
        alt="avatar"
        typeof="button"
        className="not-prose ml-auto rounded-full"
        src={`https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474069DBY/avatar-troll-cuc-chat-cho-facebook_075111905.jpg`}
      />
      {dropdown && (
        <div className="absolute bottom-0 top-10 h-36 w-full rounded-xl bg-yellow-900">
          <div className="flex flex-col items-center">
            <span className="w-full border-b-2">Hi Tu</span>
            <span>setting</span>
            <button>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
