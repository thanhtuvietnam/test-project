import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';

const InfoEpisodes: React.FC = () => {
  return (
    <section className="third-themes w-full rounded-lg">
      <h4 className="text-custom-3 border-themes mb-4 flex items-center gap-2 border-b-[0.5px] p-3 font-sans">
        <icons.FaServer />
        Vietsub #1
      </h4>
      <ul className="third-themes flex flex-wrap items-center gap-1 rounded-lg p-1">
        {[...Array(100)].map((_, index) => (
          <li
            key={index}
            style={{
              width: '40px',
              height: '40px',
            }}
            className={cn('custom-flex-1 fourth-themes justify-center text-center', 'bounce-effect')}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoEpisodes;
