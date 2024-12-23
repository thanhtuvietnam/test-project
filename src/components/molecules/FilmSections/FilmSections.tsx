import { SectionCards, SectionTitle } from '@/components/atoms';

interface FilmSectionsProps {
  index?: number;
  title: string;
  showSeeAll?: boolean;
  sectionData?: {
    items: Array<{ _id: string /* các trường khác */ }>;
  };
  cardSlice: number;
  setPage?: React.Dispatch<React.SetStateAction<number | 1>>;
}

const FilmSections: React.FC<FilmSectionsProps> = ({
  sectionData,
  showSeeAll = true,
  title,
  cardSlice,
}) => {
  const halfItems = sectionData?.items?.slice(0, Math.ceil(sectionData.items.length / cardSlice));

  return (
    <section aria-labelledby={title}>
      <SectionTitle title={title} idLabel={title} showSeeAll={showSeeAll} />

      <ul className="grid grid-cols-4">
        {halfItems?.map((item) => <SectionCards moviedata={item} key={item._id} />)}
      </ul>
    </section>
  );
};

export default FilmSections;
