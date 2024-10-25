import Link from 'next/link';

import { MainTemplate } from '@/components/templates/MainTemplate';

export default function Home() {
  return (
    <MainTemplate>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the Home Page</p>
      <Link href="register">Register</Link>
    </MainTemplate>
  );
}
