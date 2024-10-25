import Link from 'next/link';

import { MainTemplate } from '@/components/templates/MainTemplate';

const LoginPage: React.FC = () => {
  return (
    <MainTemplate>
      <h1>This is a Login Page</h1>
      <Link href="/">homepage</Link>
    </MainTemplate>
  );
};

export default LoginPage;
