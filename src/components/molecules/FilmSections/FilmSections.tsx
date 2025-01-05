import { SectionCards, SectionTitle } from '@/components/atoms';
import { Data } from '@/types/apiResponse';

interface FilmSectionsProps {
  index?: number;
  title: string | undefined;
  showSeeAll?: boolean;
  sectionData: Data | undefined;
  cardSlice: number;
  setPage?: React.Dispatch<React.SetStateAction<number | 1>>;
  theme?: string;
}

const FilmSections: React.FC<FilmSectionsProps> = ({
  sectionData,
  showSeeAll = true,
  title,
  cardSlice,
  theme,
}) => {
  const halfItems = sectionData?.items?.slice(
    0,
    Math.ceil(sectionData.items.length / cardSlice),
  );

  return (
    <section aria-labelledby={title}>
      <SectionTitle
        title={title}
        idLabel={title}
        showSeeAll={showSeeAll}
        slug={sectionData?.breadCrumb[0]?.slug}
      />

      <ul className="grid grid-cols-4">
        {halfItems?.map((item, index) => (
          <SectionCards
            // theme={theme}
            idx={index}
            moviedata={item}
            key={item._id}
          />
        ))}
      </ul>
    </section>
  );
};

export default FilmSections;
