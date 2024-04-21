import Header from '@/components/ui/header';
import { locales } from '@/config/multi-language.config';
import siteMetadata from '@/data/siteMetadata';
import '@/styles/globals.css';
import '@/styles/twemoji.css';
import clsx from 'clsx';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Outfit } from 'next/font/google';
import { Metadata } from 'next';
import envConfig from '@/config/env.config';
import Footer from '@/components/ui/footer';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'site_meta_data' });

  return {
    title: {
      template: `%s - ${t('title')}`,
      default: t('title'), // a default is required when creating a template
    },
    description: t('description'),
    openGraph: {
      url: envConfig.NEXT_PUBLIC_URL,
      type: 'website',
      siteName: t('title'),
      description: t('description'),
      title: t('title'),
      images: `${envConfig.NEXT_PUBLIC_URL}${siteMetadata.socialBanner}`,
    },
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Receive messages provided in `i18n.ts`
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning
        className={clsx(
          outfit.className,
          'relative bg-white text-black antialiased dark:bg-dark dark:text-white'
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
            <Header />
            <main className="mx-auto mt-24 w-full max-w-4xl px-4 md:px-6 xl:max-w-5xl xl:px-0">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
