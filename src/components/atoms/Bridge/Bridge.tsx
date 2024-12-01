import { cn } from '@/lib/utils';
import { Base } from '@/types/type';

const Bridge = ({ className }: Base) => {
  return <div className={cn('absolute bg-transparent', className)} />;
};

export default Bridge;
