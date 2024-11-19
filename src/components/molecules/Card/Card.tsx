import { pattayaFont } from '@/fonts/fonts';
import { icons } from '@/lib/declarations/icons';
import '@/styles/card.css';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Card: React.FC = () => {
  return (
    <div className="card">
      <span className="cardItemQualang transition duration-500">
        HD+Vietsub
      </span>
      <div className="poster">
        <Image
          width={320}
          height={450}
          alt="cardimg"
          className="imgMain"
          src="/demo/poster.jpg"
        />
      </div>
      <div className="details">
        {/* <img alt="detailimg" className="logo" src="/demo/avtarlogo.png" /> */}
        <h2
          className={cn(
            'truncate text-2xl font-bold text-[#d0187d] dark:text-[#03f2f8]',
            pattayaFont.className
          )}
        >
          Avartar Season 2 hello ajinomoto
        </h2>
        <h3>Directed by James Cameron</h3>
        <span className="addOn-custom">Hoan tat(6/10)</span>

        <div className="rating text-yellow-300">
          <icons.CiStar />
          <icons.CiStar />
          <icons.CiStar />
          <icons.CiStar />
          <icons.CiStar />
          <span>4/5</span>
        </div>
        <div className="tags">
          <span>Sci-fi</span>
          <span>Action</span>
        </div>
        <div className="info">
          <p>
            Phim là câu chuyện xoay quanh hành trình sống còn chống lại xác sống
            của một nhóm học sinh bị...
          </p>
        </div>
        <div className="cast">
          <h4>Cast</h4>
          <ul>
            <li>
              <Image
                width={320}
                height={450}
                alt="person1"
                src="/demo/cast1.jpg"
              />
            </li>
            <li>
              <Image
                width={320}
                height={450}
                alt="person1"
                src="/demo/cast3.jpg"
              />
            </li>
            <li>
              <Image
                width={320}
                height={450}
                alt="person1"
                src="/demo/cast3.jpg"
              />
            </li>
            <li>
              <Image
                width={320}
                height={450}
                alt="person1"
                src="/demo/cast4.jpg"
              />
            </li>
            <li>
              <Image
                width={320}
                height={450}
                alt="person1"
                src="/demo/cast5.jpg"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
