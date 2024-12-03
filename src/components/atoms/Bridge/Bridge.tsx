import { cn } from '@/lib/utils';
import { Base } from '@/types/type';
import { JSX } from 'react';

const Bridge = ({ className }: Base): JSX.Element => {
  return <div className={cn('absolute bg-transparent', className)} />;
};

export default Bridge;
