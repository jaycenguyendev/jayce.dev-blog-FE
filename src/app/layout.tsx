import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/twemoji.css';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { ThemeProvider } from 'next-themes';
import siteMetadata from '@/data/siteMetadata';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jayce's Blog",
  description: 'This is a technical blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
