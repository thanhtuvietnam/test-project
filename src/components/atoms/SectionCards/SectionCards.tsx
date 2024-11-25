import { Card } from '../Card';
import { BackgroundGradient } from '../Effect/BackgroundGradient';
import { CardHoverEffect } from '../Effect/CardHoverEffect';

interface SectionCardsProps {
  idx?: number;
}

const SectionCards: React.FC<SectionCardsProps> = ({ idx = 0 }) => {
  return (
    <li className="list-none">
      <CardHoverEffect idx={idx}>
        <BackgroundGradient>
          <Card />
        </BackgroundGradient>
      </CardHoverEffect>
    </li>
  );
};

export default SectionCards;
