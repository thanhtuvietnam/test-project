import { MainTemplate } from '@/components/templates';
import '@/styles/globals.css';
import { JSX } from 'react';

export default function HomeLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <MainTemplate>{children}</MainTemplate>
    </>
  );
}
