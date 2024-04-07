'use client';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { LOCALES } from '@/constants/languages';
import useLocaleCustomHook from '@/containers/home/hooks/useLocale';
import Image from 'next/image';

export function LanguageSwitcher() {
  const { currentLocale, handleChangeLocale } = useLocaleCustomHook();

  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="ml-2 mr-1 p-[6px] rounded ≈ hover:bg-gray-200 dark:hover:bg-primary transition-all cursor-pointer"
      >
        <Image src={currentLocale.flag} alt="language" width={32} height={32}></Image>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-[6px] dark:bg-dark/75">
        <ul>
          {LOCALES.map((locale) => (
            <li key={locale.code}>
              <PopoverClose
                onClick={() => handleChangeLocale(locale)}
                className="flex items-center gap-3 py-1 px-[6px] cursor-pointer  hover:bg-gray-100 dark:hover:bg-gray-700 rounded w-full"
              >
                <Image src={locale.flag} alt="flag" width={20} height={20} />
                <span>{locale.name}</span>
              </PopoverClose>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
