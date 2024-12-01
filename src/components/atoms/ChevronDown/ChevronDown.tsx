import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';

interface ChevronDownProps {
  tab: string;
  rotate?: string | null;
  className?: string;
  size?: number;
}
const ChevronDown: React.FC<ChevronDownProps> = ({
  className,
  rotate,
  size,
  tab,
}) => {
  return (
    <span className={cn('center-flex gap-0.5 px-2')}>
      {tab}
      <icons.FiChevronDown
        size={size}
        className={cn(
          className,
          'transition-tarnsform duration-200',
          rotate === tab ? 'rotate-180 transform' : ''
        )}
      />
    </span>
  );
};

export default ChevronDown;
