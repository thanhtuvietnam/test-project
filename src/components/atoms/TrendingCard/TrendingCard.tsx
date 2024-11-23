import { cn } from '@/lib/utils';
import Image from 'next/image';

const TrendingCard: React.FC = () => {
  return (
    <div
      className={cn(
        'center-flex group relative h-full',
        'rounded-3xl border-x border-x-bgdark/50 dark:border-x-main-aliceBlue-500/50'
      )}
    >
      <div className="w-1/4 p-2">
        <Image
          width={400}
          height={200}
          alt="cardimg"
          placeholder="blur"
          src="/demo/poster.jpg"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
          className="rounded-3xl transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="w-3/4">
        <section className={`mt-2 sm:mt-0`}>
          <h3 className="line-clamp-2 text-xs font-semibold text-[#ff5722] group-hover:text-blue-800 sm:line-clamp-none sm:text-sm md:text-base lg:text-lg dark:text-[#03a8f5] dark:group-hover:text-[#da9d29]">
            The Witcher
          </h3>
          <div>
            <p className="text-custom line-clamp-3 text-[10px] sm:line-clamp-none sm:text-[11px] md:text-sm lg:text-base">
              witcher
              <span className="ml-1">{2023}</span>
            </p>
          </div>
          <div>
            <span className="text-xs sm:text-sm md:text-base">{1999}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrendingCard;
