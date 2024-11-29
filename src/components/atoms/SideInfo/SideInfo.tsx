import './SideInfo.css';
import { icons } from '@/lib/declarations/icons';
import { SideInfoProps } from '@/types/type';

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
      className="text-custom ml-5 flex w-2/3 flex-col gap-2"
    >
      <h1 id="SideInfo" className="text-[20px] font-bold">
        {title}
      </h1>
      <p className="text-[13px]">{originalName}</p>
      <div className="custom-flex-1 gap-3">
        <span className="custom-flex-1 gap-1">
          <icons.FaCalendarAlt />:<span className="text-custom-2">{year}</span>
        </span>
        <span className="custom-flex-1 gap-1">
          <icons.FaClock />:<span className="text-custom-2">{time}</span>
        </span>
        <span className="text-custom-3 custom-flex-1 gap-1">
          <icons.FaImdb size={30} />
          {imdbScore}
        </span>
      </div>
      <p className="custom-flex-1 gap-1">
        Đang phát:
        <span className="cardInfo-current rounded-sm px-1 py-1 font-medium">
          {episodeCurrent}
        </span>
      </p>
      <p>
        Tập mới nhất: <span className="text-custom-3">{newestEpisode}</span>
      </p>
      <p>
        Quốc gia: <span className="text-custom-2">{country?.join(', ')}</span>
      </p>
      <p className="custom-flex-1 gap-1 font-bold">
        Chất lượng:
        <span className="cardInfo-current rounded-sm px-1 py-1 font-medium">
          {lang}+{qua}
        </span>
      </p>
      <p>
        Đạo diễn: <span className="text-custom-2">{director}</span>
      </p>
      <p>
        Diễn Viên: <span className="text-custom-2">{actor}</span>
      </p>
      <p>
        Thể loại: <span className="text-custom-2">{category?.join(', ')}</span>
      </p>
      <p>
        Lượt xem: <span className="text-custom-2">{view}</span>
      </p>
    </section>
  );
};

export default SideInfo;
