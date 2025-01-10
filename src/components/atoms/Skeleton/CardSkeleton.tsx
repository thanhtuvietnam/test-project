import { icons } from '@/lib/declarations/icons';
import '@/styles/CardSkeleton.css';
import React from 'react';

const CardSkeleton: React.FC = () => (
  <div className="card-skeleton animate-pulse border border-gray-700 transition-colors dark:border-gray-500">
    <span className="skeleton absolute top-0 z-[4] block h-6 w-24" />

    <icons.FaRegFileImage
      className="absolute top-1/3 right-1/2 z-[4] translate-x-1/2 animate-pulse text-gray-600 dark:text-gray-500"
      size={40}
    />
    <div className="h-[350px] w-[237px]" />

    <div className="details-skeleton p-4">
      <span className="skeleton mb-2 block h-6 w-16 rounded" />

      <div className="mb-2 flex items-center">
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="skeleton size-6 rounded-full"></div>
          ))}
        </div>
        <span className="skeleton ml-2 block h-6 w-8"></span>
      </div>

      <div className="mb-2 flex space-x-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} className="skeleton block h-5 w-12"></span>
        ))}
      </div>

      <span className="skeleton my-2 block h-5 w-3/4 rounded"></span>

      <span className="skeleton mb-2 block h-4 w-1/2 rounded"></span>
    </div>
  </div>
);

export default CardSkeleton;
