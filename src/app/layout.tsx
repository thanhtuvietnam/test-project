import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import '@/styles/globals.css';
import { ThemeProvider } from '@/components/providers/';
import { MainTemplate } from '@/components/templates';

import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cuồng Phim - Watch Movies Online',
  description: 'Generated by create next app',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'wrapper prose bg-bglight text-bgdark antialiased dark:bg-bgdark dark:text-bglight',
          `${montserrat.className}`
        )}
      >
        <ThemeProvider>
          <MainTemplate>{children}</MainTemplate>
        </ThemeProvider>
      </body>
    </html>
  );
}
