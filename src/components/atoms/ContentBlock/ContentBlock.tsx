'use client';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

import { Star } from '../Star';

const ContentBlock: React.FC = () => {
  const router = useRouter();

  return (
    <div className="prose prose-zinc w-1/2 text-bgdark dark:text-bglight">
      <h2>{'The witcher'}</h2>
      <p>
        {
          'When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. This page covers some recommended composition patterns when using Server and Client Components.'
        }
      </p>
      <div className="custom-flex-1 gap-4">
        <Star />
        <div className="custom-flex-1 gap-2">
          <icons.FaImdb size={40} />
          <span>8.1</span>
        </div>
      </div>

      <div className={cn('center-flex relative w-1/2')}>
        <button className="center-flex" onClick={() => router.push('/login')}>
          <icons.SlControlPlay size={40} />
          <span>Watch Movie</span>
        </button>
        <button className="center-flex">
          <span>More Infor</span>
          <icons.GoArrowRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default ContentBlock;
