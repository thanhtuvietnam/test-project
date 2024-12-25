'use client';
import { cn } from '@/lib/utils';

import './trendFetchBtns.css';
import { useState } from 'react';

const buttonLists = ['Ngày', 'Tuần', 'Tháng'];

const TrendFetchBtns: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState<number>(0);

  return (
    <div className="custom-flex-1 absolute right-0 top-5">
      {buttonLists.map((button, index) => (
        <button
          key={index}
          className={cn('trending-button', activeBtn === index ? 'activetrending' : '')}
          onClick={() => setActiveBtn(index)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default TrendFetchBtns;
