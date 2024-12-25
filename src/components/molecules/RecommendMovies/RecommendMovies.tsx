import { BackgroundGradient, Card, CardHoverEffect, SectionTitle } from '@/components/atoms';
import { JSX } from 'react';

const RecommendMovies = (): JSX.Element => {
  return (
    <>
      <SectionTitle title={'recommendmovies'} />
      <ul className="grid grid-cols-4 grid-rows-2">
        {[...Array(8)].map((_, index) => (
          <li key={index}>
            <CardHoverEffect idx={index}>
              <BackgroundGradient>
                <Card />
              </BackgroundGradient>
            </CardHoverEffect>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecommendMovies;
