import { Providers } from '@/shared/providers';
import type { Metadata } from 'next';
import { Inter, Unbounded } from 'next/font/google';
import './globals.css';
import React from 'react';

const unbounded = Unbounded({
  variable: '--font-unbounded-sans',
  weight: ['200', '300', '700'],
  subsets: ['cyrillic', 'latin'],
});

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  subsets: ['cyrillic', 'latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Михаил Королев',
  description: 'Портфолио Королев Михаил',
  icons: {
    icon: '/favicon.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.className} ${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
