import '@/styles/globals.css';

import type { Metadata } from 'next';

import { montserrat } from '@/fonts/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from 'next-themes';
import { JSX } from 'react';
import TanStackProvider from 'src/api/TanStackProvider';

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Cuồng Phim - Watch Movies Online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('themes antialiased', `${montserrat.className}`)}>
        <ThemeProvider attribute="class">
          <TanStackProvider> {children}</TanStackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
