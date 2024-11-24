'use client';

import { useParams } from 'next/navigation';

const TheLoaiPage = () => {
  const params = useParams();
  const { slug } = params;

  return (
    <div>
      <h1>Theloai: {slug}</h1>
    </div>
  );
};
export default TheLoaiPage;
