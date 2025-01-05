'use client';
import TrendingLoading from '@/app/(main)/[category]/[param]/@TrendingSection/loading';
import {
  CardHoverEffect,
  SectionTitle,
  TrendFetchBtns,
  TrendingCard,
} from '@/components/atoms';
import React, { useState } from 'react';

const TrendingSection: React.FC = () => {
  // const [isPending, startTransition] = React.useTransition();
  const [variable, setVariable] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVariable((prev) => prev + 1);
    }, 5000);
  };

  return (
    <section
      aria-labelledby="trending-section"
      className="relative mt-3 w-full grow-0 lg:w-1/3"
    >
      {loading && <TrendingLoading />}

      <SectionTitle
        title={'Trending Now'}
        idLabel={'trending-section'}
        showSeeAll={false}
      />
      <TrendFetchBtns />
      <button onClick={handleClick}>fetch Data</button>
      {/* {isPending && <p>Loading...</p>} */}
      <p>Value is: {variable}</p>

      <ul className="">
        {[...Array(20)].map((_, index) => (
          <li key={index} className="list-none">
            <CardHoverEffect idx={index}>
              <TrendingCard />
            </CardHoverEffect>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingSection;
