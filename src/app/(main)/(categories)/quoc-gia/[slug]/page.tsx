'use client';

import { useParams } from 'next/navigation';

const QuocgiaPage = () => {
  const params = useParams();
  const { slug } = params;

  return (
    <div>
      <h1>Quocgia: {slug}</h1>
    </div>
  );
};

export default QuocgiaPage;
