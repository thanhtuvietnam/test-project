import Link from 'next/link';

import { MainTemplate } from '@/components/templates/MainTemplate';

const RegisterPage: React.FC = () => {
  return (
    <MainTemplate>
      <h1>This is a Register Page</h1>
      <Link href="login">login</Link>
    </MainTemplate>
  );
};

export default RegisterPage;
