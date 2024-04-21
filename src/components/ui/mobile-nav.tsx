'use client';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import CustomLink from '../shared/link';
import { headerNavLinks } from '@/constants';

const MobileNav = () => {
  const [isDisplayNav, setIsDisplayNav] = useState(false);
  return (
    <div className="md:hidden h-8">
      <button onClick={() => setIsDisplayNav(true)}>
        <Menu strokeWidth={2.5} width={32} height={32} />
      </button>
      <div
        className={clsx(
          'md:hidden fixed w-full h-screen inset-0 bg-gray-200 dark:bg-dark opacity-95 z-50 transition-transform transform ease-in-out duration-300',
          isDisplayNav ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button onClick={() => setIsDisplayNav(false)} className="mt-4 ml-auto block mr-1">
          <X width={32} height={32} strokeWidth={2.5} />
        </button>
        <ul className="flex flex-col mt-4">
          {headerNavLinks.map((item) => (
            <li key={item.href} className="px-12 py-4">
              <CustomLink
                href={item.href}
                className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                onClick={() => setIsDisplayNav(false)}
              >
                {item.title}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
