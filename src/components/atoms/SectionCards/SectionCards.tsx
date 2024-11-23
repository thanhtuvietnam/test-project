import { BackgroundGradient } from '../BackgroundGradient';
import { Card } from '../Card';
import { CardHoverEffect } from '../CardHoverEffect';

const SectionCards: React.FC = () => {
  return (
    <ul className="grid grid-cols-4 gap-2">
      {[...Array(12)].map((_, index) => (
        <li key={index} className="list-none">
          <CardHoverEffect idx={index}>
            <BackgroundGradient>
              <Card />
            </BackgroundGradient>
          </CardHoverEffect>
        </li>
      ))}
    </ul>
  );
};

export default SectionCards;
