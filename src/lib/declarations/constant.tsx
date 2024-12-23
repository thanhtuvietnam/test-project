import { TabItem } from '@/types/typenavbar';
import { nanoid } from 'nanoid';

import { icons } from './icons';

// api
export const API_URL = 'https://ophim1.com/v1/api';
export const IMG_URL = 'https://img.ophim.live/uploads/movies/';

// navbar and sidebar
//
export const titleLists: string[] = ['PHIM BỘ', 'PHIM LẺ', 'TV SHOWS', 'HOẠT HÌNH'];

export const socialLinks: TabItem[] = [
  {
    id: nanoid(5),
    icon: icons.FiFacebook,
    label: 'Facebook',
    path: 'https://www.facebook.com',
  },
  {
    id: nanoid(5),
    icon: icons.RiYoutubeLine,
    label: 'YouTube',
    path: 'https://www.youtube.com',
  },
  {
    id: nanoid(5),
    icon: icons.RiTwitterXFill,
    label: 'X',
    path: 'https://www.twitter.com',
  },
  {
    id: nanoid(5),
    icon: icons.FaInstagram,
    label: 'Instagram',
    path: 'https://www.instagram.com',
  },
  {
    id: nanoid(5),
    icon: icons.FaLinkedin,
    label: 'LinkedIn',
    path: 'https://www.linkedin.com',
  },
];

export const ProfileItems: TabItem[] = [
  {
    id: nanoid(5),
    icon: icons.BiDotsVertical,
    label: 'Setting',
    path: 'user/setting',
  },
  {
    id: nanoid(5),
    icon: icons.FaRegCircleUser,
    label: 'Profile',
    path: 'user/profile',
  },
  {
    id: nanoid(5),
    icon: icons.TbLogout2,
    label: 'Logout',
  },
];

export const tabs: TabItem[] = [
  {
    id: nanoid(5),
    icon: icons.FaHome,
    label: 'TRANG CHỦ',
    path: '/',
  },
  {
    id: nanoid(5),
    icon: icons.BiSolidCameraMovie,
    label: 'PHIM BỘ',
    path: '/danh-sach/phim-bo',
  },
  {
    id: nanoid(5),
    icon: icons.BiFilm,
    label: 'PHIM LẺ',
    path: '/danh-sach/phim-le',
  },
  {
    id: nanoid(5),
    icon: icons.TbDeviceTvOld,
    label: 'TV SHOWS',
    path: '/danh-sach/tv-shows',
  },
  {
    id: nanoid(5),
    icon: icons.FaChildren,
    label: 'HOẠT HÌNH',
    path: '/danh-sach/hoat-hinh',
  },
  {
    id: nanoid(5),
    icon: icons.TbCategoryPlus,
    label: 'THỂ LOẠI',
    path: '/the-loai',
    subMenus: [
      { id: nanoid(5), label: 'Hành Động', path: '/the-loai/hanh-dong' },
      { id: nanoid(5), label: 'Tình Cảm', path: '/the-loai/tinh-cam' },
      { id: nanoid(5), label: 'Hài Hước', path: '/the-loai/hai-huoc' },
      { id: nanoid(5), label: 'Cổ Trang', path: '/the-loai/co-trang' },
      { id: nanoid(5), label: 'Tâm Lý', path: '/the-loai/tam-ly' },
      { id: nanoid(5), label: 'Hình Sự', path: '/the-loai/hinh-su' },
      { id: nanoid(5), label: 'Chiến Tranh', path: '/the-loai/chien-tranh' },
      { id: nanoid(5), label: 'Thể Thao', path: '/the-loai/the-thao' },
      { id: nanoid(5), label: 'Võ Thuật', path: '/the-loai/vo-thuat' },
      { id: nanoid(5), label: 'Viễn Tưởng', path: '/the-loai/vien-tuong' },
      { id: nanoid(5), label: 'Phiêu Lưu', path: '/the-loai/phieu-luu' },
      { id: nanoid(5), label: 'Khoa Học', path: '/the-loai/khoa-hoc' },
      { id: nanoid(5), label: 'Kinh Dị', path: '/the-loai/kinh-di' },
      { id: nanoid(5), label: 'Âm Nhạc', path: '/the-loai/am-nhac' },
      { id: nanoid(5), label: 'Thần Thoại', path: '/the-loai/than-thoai' },
      { id: nanoid(5), label: 'Tài Liệu', path: '/the-loai/tai-lieu' },
      { id: nanoid(5), label: 'Gia Đình', path: '/the-loai/gia-dinh' },
      { id: nanoid(5), label: 'Chính Kịch', path: '/the-loai/chinh-kich' },
      { id: nanoid(5), label: 'Bí Ẩn', path: '/the-loai/bi-an' },
      { id: nanoid(5), label: 'Học Đường', path: '/the-loai/hoc-duong' },
      { id: nanoid(5), label: 'Kinh Điển', path: '/the-loai/kinh-dien' },
      { id: nanoid(5), label: 'Phim 18+', path: '/the-loai/phim-18' },
    ],
  },
  {
    id: nanoid(5),
    icon: icons.FaGlobe,
    label: 'QUỐC GIA',
    path: '/quoc-gia',
    subMenus: [
      { id: nanoid(5), label: 'Trung Quốc', path: '/quoc-gia/trung-quoc' },
      { id: nanoid(5), label: 'Hàn Quốc', path: '/quoc-gia/han-quoc' },
      { id: nanoid(5), label: 'Nhật Bản', path: '/quoc-gia/nhat-ban' },
      { id: nanoid(5), label: 'Thái Lan', path: '/quoc-gia/thai-lan' },
      { id: nanoid(5), label: 'Âu Mỹ', path: '/quoc-gia/au-my' },
      { id: nanoid(5), label: 'Đài Loan', path: '/quoc-gia/dai-loan' },
      { id: nanoid(5), label: 'Hồng Kông', path: '/quoc-gia/hong-kong' },
      { id: nanoid(5), label: 'Ấn Độ', path: '/quoc-gia/an-do' },
      { id: nanoid(5), label: 'Anh', path: '/quoc-gia/anh' },
      { id: nanoid(5), label: 'Pháp', path: '/quoc-gia/phap' },
      { id: nanoid(5), label: 'Canada', path: '/quoc-gia/canada' },
      {
        id: nanoid(5),
        label: 'Quốc Gia Khác',
        path: '/quoc-gia/quoc-gia-khac',
      },
      { id: nanoid(5), label: 'Đức', path: '/quoc-gia/duc' },
      { id: nanoid(5), label: 'Tây Ban Nha', path: '/quoc-gia/tay-ban-nha' },
      { id: nanoid(5), label: 'Thổ Nhĩ Kỳ', path: '/quoc-gia/tho-nhi-ky' },
      { id: nanoid(5), label: 'Hà Lan', path: '/quoc-gia/ha-lan' },
      { id: nanoid(5), label: 'Indonesia', path: '/quoc-gia/indonesia' },
      { id: nanoid(5), label: 'Nga', path: '/quoc-gia/nga' },
      { id: nanoid(5), label: 'Mexico', path: '/quoc-gia/mexico' },
      { id: nanoid(5), label: 'Ba Lan', path: '/quoc-gia/ba-lan' },
      { id: nanoid(5), label: 'Úc', path: '/quoc-gia/uc' },
      { id: nanoid(5), label: 'Thụy Điển', path: '/quoc-gia/thuy-dien' },
      { id: nanoid(5), label: 'Malaysia', path: '/quoc-gia/malaysia' },
      { id: nanoid(5), label: 'Brazil', path: '/quoc-gia/brazil' },
      { id: nanoid(5), label: 'Philippines', path: '/quoc-gia/philippines' },
      { id: nanoid(5), label: 'Bồ Đào Nha', path: '/quoc-gia/bo-dao-nha' },
      { id: nanoid(5), label: 'Ý', path: '/quoc-gia/y' },
      { id: nanoid(5), label: 'Đan Mạch', path: '/quoc-gia/dan-mach' },
      { id: nanoid(5), label: 'UAE', path: '/quoc-gia/uae' },
      { id: nanoid(5), label: 'Na Uy', path: '/quoc-gia/na-uy' },
      { id: nanoid(5), label: 'Thụy Sĩ', path: '/quoc-gia/thuy-si' },
      { id: nanoid(5), label: 'Châu Phi', path: '/quoc-gia/chau-phi' },
      { id: nanoid(5), label: 'Nam Phi', path: '/quoc-gia/nam-phi' },
      { id: nanoid(5), label: 'Ukraina', path: '/quoc-gia/ukraina' },
      { id: nanoid(5), label: 'Ả Rập Xê Út', path: '/quoc-gia/a-rap-xe-ut' },
      { id: nanoid(5), label: 'Bỉ', path: '/quoc-gia/bi' },
      { id: nanoid(5), label: 'Ireland', path: '/quoc-gia/ireland' },
      { id: nanoid(5), label: 'Colombia', path: '/quoc-gia/colombia' },
      { id: nanoid(5), label: 'Phần Lan', path: '/quoc-gia/phan-lan' },
      { id: nanoid(5), label: 'Việt Nam', path: '/quoc-gia/viet-nam' },
      { id: nanoid(5), label: 'Chile', path: '/quoc-gia/chile' },
      { id: nanoid(5), label: 'Hy Lạp', path: '/quoc-gia/hy-lap' },
      { id: nanoid(5), label: 'Nigeria', path: '/quoc-gia/nigeria' },
      { id: nanoid(5), label: 'Argentina', path: '/quoc-gia/argentina' },
      { id: nanoid(5), label: 'Singapore', path: '/quoc-gia/singapore' },
    ],
  },
];
