import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';

import './SideInfo.css';

import { SideInfoProps } from '@/types/commonTypes';

const SideInfo: React.FC<SideInfoProps> = ({
  actor,
  category,
  country,
  director,
  episodeCurrent,
  imdbScore,
  lang,
  newestEpisode,
  originalName,
  qua,
  time,
  title,
  view,
  year,
}) => {
  return (
    <section
      aria-labelledby="SideInfo"
      className={cn(
        'tw-text-color ml-5 flex w-2/3 flex-col gap-2',
        '**:span:tw-text-color-3',
        // '**:span:tw-flex-1',
        // '**:gap-1',
      )}
    >
      <h1 id="SideInfo" className="text-[20px] font-bold">
        {title}
      </h1>
      <p className="text-[13px]">{originalName}</p>
      <div className="tw-flex-1 **:data-css:tw-flex-1 gap-3 **:gap-1">
        {/* <span className="tw-flex-1 gap-1"> */}
        <span className="" data-css>
          <icons.FaCalendarAlt />:
          <span className="tw-text-color-3" data-css>
            {year}
          </span>
        </span>
        <span className="">
          <icons.FaClock />:<span className="tw-text-color-3">{time}</span>
        </span>
        <span className="tw-text-color-2" data-css>
          <icons.FaImdb size={30} />
          {imdbScore}
        </span>
      </div>
      <p className="tw-flex-1 gap-1">
        Đang phát:
        <span className="cardInfo-current rounded-xs p-1 font-medium">
          {episodeCurrent}
        </span>
      </p>
      <p>
        Tập mới nhất: <span className="tw-text-color-2">{newestEpisode}</span>
      </p>
      <p>
        Quốc gia: <span className="tw-text-color-3">{country?.join(', ')}</span>
      </p>
      <p className="tw-flex-1 gap-1 font-bold">
        Chất lượng:
        <span className="cardInfo-current rounded-xs p-1 font-medium">
          {lang}+{qua}
        </span>
      </p>
      <p>
        Đạo diễn: <span className="tw-text-color-3">{director}</span>
      </p>
      <p>
        Diễn Viên: <span className="tw-text-color-3">{actor}</span>
      </p>
      <p>
        Thể loại:{' '}
        <span className="tw-text-color-3">{category?.join(', ')}</span>
      </p>
      <p>
        Lượt xem: <span className="tw-text-color-3">{view}</span>
      </p>
    </section>
  );
};

export default SideInfo;
