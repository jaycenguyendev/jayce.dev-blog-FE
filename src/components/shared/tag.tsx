'use client';
import CustomLink from '@/components/shared/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  href: string;
  slug: string;
};

const Tag = ({ href, slug }: Props) => {
  const pathname = usePathname();
  return (
    <CustomLink
      className={clsx(
        'group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:text-white dark:focus:ring-cyan-800',
        pathname.startsWith(href) && 'text-white'
      )}
      href={href}
    >
      <span
        className={clsx(
          'relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-dark whitespace-nowrap',
          pathname.startsWith(href) && 'bg-opacity-0 dark:bg-opacity-0'
        )}
      >
        {slug}
      </span>
    </CustomLink>
  );
};

export default Tag;
