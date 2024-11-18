import { Star } from '@/components/atoms';
import { icons } from '@/lib/declarations/icons';
import '@/styles/card.css';

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="poster">
        <img alt="cardimg" src="/demo/poster.jpg" />
      </div>
      <div className="details">
        <img alt="detailimg" className="logo" src="/demo/avtarlogo.png" />
        <h3>Directed by James Cameron</h3>
        <div className="rating">
          <Star size={20} />
          <span>4/5</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
