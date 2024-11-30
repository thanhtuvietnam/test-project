import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';

interface ChevronDownProps {
  tab: string;
  openSubmenu?: string | null;
  className?: string;
  size?: number;
}
const ChevronDown: React.FC<ChevronDownProps> = ({
  className,
  openSubmenu,
  size,
  tab,
}) => {
  return (
    <span className={cn('center-flex gap-0.5 px-2 py-1.5')}>
      {tab}
      <icons.FiChevronDown
        size={size}
        className={cn(
          className,
          'transition-tarnsform duration-200',
          openSubmenu === tab ? 'rotate-180 transform' : ''
        )}
      />
    </span>
  );
};

export default ChevronDown;
