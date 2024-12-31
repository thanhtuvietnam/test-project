import { MoviesTemplate } from '@/components/templates';
import { menuItems } from '@/lib/declarations/data';
// import { JSX } from 'react';

// export async function generateStaticParams() {
//   const slugs = [
//     '/danh-sach/phim-le',
//     '/danh-sach/phim-bo',
//     '/danh-sach/tv-shows',
//     '/danh-sach/hoat-hinh',
//   ];
//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

// const DanhSachPage = (): JSX.Element => {
//   return <MoviesTemplate />;
// };

// export default DanhSachPage;

// export async function generateStaticParams() {
//   return [
//     { category: 'danh-sach', slug: 'phim-bo' },
//     { category: 'danh-sach', slug: 'phim-le' },
//     { category: 'danh-sach', slug: 'hoat-hinh' },
//     { category: 'danh-sach', slug: 'tv-shows' },
//   ];
// }
export async function generateStaticParams() {
  const filterMenuItems = menuItems.filter((item) => item.param !== 'phim-moi-cap-nhat');
  return filterMenuItems.map((item) => ({
    category: item?.category,
    param: item?.param,
  }));
}

export default async function Page({ params }: { params: Promise<{ category: string; param: string }> }) {
  const { category, param } = await params;
  console.log(category, param);

  return <MoviesTemplate category={category} param={param} />;
}
