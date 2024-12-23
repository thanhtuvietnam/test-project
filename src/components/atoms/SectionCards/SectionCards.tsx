import { Data } from '@/types/apiResponse';

import { Card } from '../Card';
import { BackgroundGradient } from '../Effect/BackgroundGradient';
import { CardHoverEffect } from '../Effect/CardHoverEffect';

interface SectionCardsProps {
  idx?: number;
  moviedata: any;
}

const SectionCards: React.FC<SectionCardsProps> = ({ idx = 0, moviedata }) => {
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
