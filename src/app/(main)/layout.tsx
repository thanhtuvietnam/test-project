import { MainTemplate } from '@/components/templates';
import '@/styles/globals.css';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainTemplate>{children}</MainTemplate>
    </>
  );
}
