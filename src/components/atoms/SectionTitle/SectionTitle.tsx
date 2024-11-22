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
    <div className="center-flex mb-3 border-b-[0.5px] border-b-bgdark/50 dark:border-b-bglight/20">
      <h2
        id="second-slider"
        className="sectionTitle-custom whitespace-nowrap border-b-4 font-extrabold capitalize tracking-wider"
      >
        {title}
      </h2>
      {showSeeAll && <button>Xem tất cả</button>}
    </div>
  );
};

export default SectionTitle;
