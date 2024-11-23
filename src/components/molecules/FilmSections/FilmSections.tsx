import { SectionCards, SectionTitle } from '@/components/atoms';
import { titleLists } from '@/lib/declarations/constant';

const FilmSections: React.FC = () => {
  return (
    <section className="w-full flex-grow lg:w-2/3">
      <ul className="space-y-4">
        {titleLists.map((title, index) => (
          <li key={index}>
            <SectionTitle title={title} showSeeAll={true} />
            <SectionCards />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilmSections;
