import React from 'react';
import Header from '@/components/ui/header';
import siteMetadata from '@/data/siteMetadata';
import '@/styles/globals.css';
import '@/styles/twemoji.css';
import clsx from 'clsx';
import { dir } from 'i18next';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { languages } from '../i18n/settings';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jayce's Blog",
  description: 'This is a technical blog',
};

export async function generateStaticParams() {
  return languages.map((lng) => lng);
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        suppressHydrationWarning
        className={clsx(
          inter.className,
          'relative bg-white text-black antialiased dark:bg-dark dark:text-white'
        )}
      >
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
          <Header />
          <main className="mx-auto mt-24 w-full max-w-4xl px-4 md:px-6 xl:max-w-5xl xl:px-0">
            {children}
          </main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
