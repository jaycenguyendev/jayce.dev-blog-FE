import Languages, { LOCALES, Locale } from '@/constants/languages.constants';
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import { useMemo } from 'react';
const useLocaleCustomHook = () => {
  const router = useRouter();
  const pathname = usePathname();
  const localeCode = useLocale() as Languages;

  const currentLocale = useMemo(
    () => LOCALES.find((locale) => locale.code === localeCode) || LOCALES[0],
    [localeCode]
  );

  const handleChangeLocale = (locale: Locale) => {
    router.push(pathname, { locale: locale.code });
  };

  return {
    currentLocale,
    handleChangeLocale,
  };
};

export default useLocaleCustomHook;
