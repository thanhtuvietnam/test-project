import { AuthTemplate } from '@/components/templates';

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AuthTemplate>{children}</AuthTemplate>
    </>
  );
}
