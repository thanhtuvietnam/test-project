import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import { transformText } from '@/lib/utils/transformtext';
import Link from 'next/link';

interface SeeAllBtnProps {
  slug: string;
}

const SeeAllBtn: React.FC<SeeAllBtnProps> = ({ slug }) => {
  return (
    <Link
      href={`/${transformText(slug)}`}
      className="group cursor-pointer rounded-xl border-4 border-violet-800 border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100"
    >
      <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-violet-800 px-6 py-1 font-bold text-white">
        Xem tat ca
        <icons.GoArrowRight className="transition-all group-hover:translate-x-2 group-hover:scale-125" />
        <div
          className={cn(
            'absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]'
          )}
        />
      </div>
    </Link>
  );
};

export default SeeAllBtn;
