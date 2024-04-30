'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HTMLInputTypeAttribute } from 'react';
import { useDebouncedCallback } from 'use-debounce';

type Props = {
  label: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  searchQuery?: string;
};

const SearchInput = ({ label, type = 'text', className = '', searchQuery = '' }: Props) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('search', term.trim());
      } else {
        params.delete('search');
      }
      replace(`${pathname}?${params.toString().replaceAll('+', '%20')}`);
    },
    // delay in ms
    500
  );
  return (
    <div className="relative max-w-lg">
      <label>
        <span className="sr-only">{label}</span>
        <input
          aria-label={label}
          type={type}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={label}
          defaultValue={searchQuery}
          className={`block w-full rounded-md border border-gray-300 bg-white pl-4 pr-8 py-2 text-gray-900 focus:border-sky-500 focus:ring-sky-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 ${className}`}
        />
      </label>
      <svg
        className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default SearchInput;
