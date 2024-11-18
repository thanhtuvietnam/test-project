import { icons } from '@/lib/declarations/icons';

const Star: React.FC = () => {
  return (
    <div className="star center-flex text-yellow-950 dark:text-yellow-400">
      <icons.CiStar size={30} />
      <icons.CiStar size={30} />
      <icons.CiStar size={30} />
      <icons.CiStar size={30} />
      <icons.CiStar size={30} />
    </div>
  );
};

export default Star;
