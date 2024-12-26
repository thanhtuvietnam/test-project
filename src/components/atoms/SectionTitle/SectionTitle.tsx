import { JSX } from 'react';

import { SeeAllBtn } from '../Button/SeeAllBtn';
import './sectionTitle.css';
interface SectionTitleProps {
  title: string | undefined;
  showSeeAll?: boolean;
  idLabel?: string | undefined;
  slug?: string | undefined;
}

const SectionTitle = ({
  idLabel,
  showSeeAll = false,
  title,
  slug,
}: SectionTitleProps): JSX.Element => {
  return (
    <div className="center-flex mb-3 border-b-[0.5px] border-b-bgdark/50 dark:border-b-bglight/20">
      <h2
        id={idLabel}
        className="sectionTitle-custom whitespace-nowrap border-b-4 font-sans capitalize tracking-wider"
      >
        {title || ''}
      </h2>
      {showSeeAll && <SeeAllBtn slug={slug} />}
    </div>
  );
};

export default SectionTitle;
