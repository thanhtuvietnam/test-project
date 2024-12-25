import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
// components/Bookmark.tsx
import React from 'react';

interface BookmarkProps {
  isBookmarked?: boolean;
  onToggle?: () => void;
  className?: string;
}

const BookMark: React.FC<BookmarkProps> = ({
  className,
  // isBookmarked = false,
  isBookmarked = true,
  onToggle,
}) => {
  return (
    <button
      aria-label={isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
      className={cn(
        'animate-bookmarkshake',
        'flex items-center justify-center rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
        isBookmarked ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600',
        className,
      )}
      onClick={onToggle}
    >
      {isBookmarked ? (
        <span className="relative">
          <icons.FaBookmark size={20} color={'#0fdd20'} />
          <icons.FaCheck
            className="absolute -bottom-2 -right-2 rounded-full bg-[#3c523e]"
            color="#0fdd20"
          />
        </span>
      ) : (
        <span className="relative">
          <icons.FaRegBookmark size={20} color={'#d75a4a'} />
          <icons.FaCirclePlus
            className="absolute -bottom-2 -right-2 rounded-full bg-[#3c523e]"
            color="#0fdd20"
          />
        </span>
      )}
    </button>
  );
};

export default BookMark;
