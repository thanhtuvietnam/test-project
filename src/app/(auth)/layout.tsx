import { AuthTemplate } from '@/components/templates';
import { JSX } from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <AuthTemplate>{children}</AuthTemplate>
    </>
  );
}
