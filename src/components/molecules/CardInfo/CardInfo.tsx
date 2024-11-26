import './CardInfo.css';
import { AlgoliaBtn, ArrowBtn, BookMark } from '@/components/atoms';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const CardInfo: React.FC = () => {
  return (
    <>
      <div className="relative">
        <Image
          width={300}
          height={500}
          alt="infocardimg"
          src="/demo/poster.jpg"
          className="h-full w-full rounded-3xl"
        />
        <div className="center-flex absolute top-1 w-full px-1.5">
          <BookMark />
          <ArrowBtn text="Trailer" />
        </div>

        <div className="center-flex absolute bottom-3 w-full gap-2 px-1.5">
          <AlgoliaBtn
            className={cn('button-one', 'text-custom', 'rounded-full px-5')}
          >
            <icons.GoArrowRight />
            Tập Phim
          </AlgoliaBtn>
          <AlgoliaBtn
            className={cn('button-two', 'text-custom', 'rounded-full px-9')}
          >
            <icons.FaPlay />
            Play
          </AlgoliaBtn>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
