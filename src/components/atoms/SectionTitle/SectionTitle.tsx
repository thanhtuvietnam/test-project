import './sectionTitle.css';
interface SectionTitleProps {
  title: string;
  showSeeAll?: boolean;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  showSeeAll = false,
  title,
}) => {
  return (
    <div className="center-flex mb-3 mt-5 border-b-[0.5px] border-b-bgdark/50 dark:border-b-bglight/20">
      <div className="sectionTitle-custom border-b-4">
        <h2 className="whitespace-nowrap font-extrabold capitalize tracking-wider">
          {title}
        </h2>
      </div>
      {showSeeAll && <button>Xem tất cả</button>}
    </div>
  );
};

export default SectionTitle;
