'use client';
import headerNavLinks from '@/constants/headerNavLink';
import React from 'react';
import CustomLink from '../shared/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const HeaderNav = () => {
  const pathname = usePathname();
  // const { t } = useTranslation(lng);
  return (
    <>
      {headerNavLinks.map((item) => (
        <li key={item.href} className="hidden md:block">
          <CustomLink
            href={item.href}
            className={clsx(
              'mx-1 py-2 px-3 rounded text-gray-900 hover:bg-gray-200 dark:hover:bg-primary transition-all dark:text-gray-100 font-medium',
              pathname.startsWith(item.href) && 'bg-gray-200 dark:bg-primary'
            )}
          >
            {/* {t(item.title)} */}
          </CustomLink>
        </li>
      ))}
    </>
  );
};

export default HeaderNav;
