import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    es: '/pfadnamen',
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = 'as-needed';

export type AppPathnames = keyof typeof pathnames;
