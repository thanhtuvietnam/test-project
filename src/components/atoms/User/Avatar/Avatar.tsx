'use client';
import { AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { JSX } from 'react';

import { UserSetting } from '../UserSetting';

interface AvatarProps {
  isDropdownOpen?: boolean;
  toggleDropdown?: () => void;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const Avatar = ({
  isDropdownOpen,
  ref,
  toggleDropdown,
}: AvatarProps): JSX.Element => {
  return (
    <div ref={ref} className="relative">
      <Image
        width={40}
        height={20}
        alt="avatar"
        className="rounded-full"
        src={`https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474069DBY/avatar-troll-cuc-chat-cho-facebook_075111905.jpg`}
        typeof="button"
        onClick={toggleDropdown}
      />
      <AnimatePresence>{isDropdownOpen && <UserSetting />}</AnimatePresence>
    </div>
  );
};

export default Avatar;
