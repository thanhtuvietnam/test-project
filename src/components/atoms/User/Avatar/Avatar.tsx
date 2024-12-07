'use client';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { UserSetting } from '../UserSetting';

interface AvatarProps {
  isDropdownOpen?: boolean;
  toggleDropdown?: () => void;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const Avatar = ({ isDropdownOpen, ref, toggleDropdown }: AvatarProps) => {
  return (
    <div ref={ref} className="relative">
      <Image
        width={40}
        height={20}
        alt="avatar"
        typeof="button"
        className="not-prose rounded-full"
        src={`https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474069DBY/avatar-troll-cuc-chat-cho-facebook_075111905.jpg`}
        onClick={toggleDropdown}
      />
      <AnimatePresence>{isDropdownOpen && <UserSetting />}</AnimatePresence>
    </div>
  );
};

export default Avatar;
