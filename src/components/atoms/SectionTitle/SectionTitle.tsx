'use client';

import { SeeAllBtn } from '../Button/SeeAllBtn';

import './sectionTitle.css';
interface SectionTitleProps {
  title: string;
  showSeeAll?: boolean;
  idLabel?: string;
}
import { useParams } from 'next/navigation';

const SectionTitle: React.FC<SectionTitleProps> = ({ idLabel, showSeeAll = false, title }) => {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="center-flex mb-3 border-b-[0.5px] border-b-bgdark/50 dark:border-b-bglight/20">
      <h2
        id={idLabel}
        className="sectionTitle-custom whitespace-nowrap border-b-4 font-extrabold capitalize tracking-wider"
      >
        {title || slug}
      </h2>
      {showSeeAll && <SeeAllBtn slug={title} />}
    </div>
  );
};

export default SectionTitle;
