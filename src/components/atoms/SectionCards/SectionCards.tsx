import { Item } from '@/types/apiResponse';
import { JSX } from 'react';

import { Card } from '../Card';
import { BackgroundGradient } from '../Effect/BackgroundGradient';
import { CardHoverEffect } from '../Effect/CardHoverEffect';

const SectionCards = ({ idx = 0, moviedata }: { idx: number; moviedata: Item }): JSX.Element => {
  return (
    <li className="list-none">
      <CardHoverEffect idx={idx}>
        <BackgroundGradient>
          <Card movieData={moviedata} />
        </BackgroundGradient>
      </CardHoverEffect>
    </li>
  );
};

export default SectionCards;
