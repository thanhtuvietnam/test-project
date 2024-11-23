import { SectionCards, SectionTitle } from '@/components/atoms';
import { titleLists } from '@/lib/declarations/constant';

const FilmSections: React.FC = () => {
  return (
    <ul className="w-full flex-grow space-y-4 lg:w-2/3">
      {titleLists.map((title, index) => (
        <li key={index}>
          <section aria-labelledby={title}>
            <SectionTitle title={title} idLabel={title} showSeeAll={true} />
            <SectionCards />
          </section>
        </li>
      ))}
    </ul>
  );
};

export default FilmSections;
