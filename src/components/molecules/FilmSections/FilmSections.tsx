import { SectionCards, SectionTitle } from '@/components/atoms';

interface FilmSectionsProps {
  index?: number;
  title: string;
  cardQuantities: number;
  showSeeAll: boolean;
}
const FilmSections: React.FC<FilmSectionsProps> = ({
  cardQuantities,
  showSeeAll = true,
  title,
}) => {
  return (
    <>
      <section aria-labelledby={title}>
        <SectionTitle title={title} idLabel={title} showSeeAll={showSeeAll} />

        <ul className="grid grid-cols-4">
          {[...Array(cardQuantities)].map((_, index) => (
            <SectionCards key={index} idx={index} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default FilmSections;
