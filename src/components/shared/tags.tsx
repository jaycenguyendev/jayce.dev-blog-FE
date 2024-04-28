import CustomLink from '@/components/shared/link';
import { Tag } from '@/types';
import React from 'react';

type Props = {
  className?: string;
  tags: Tag[];
};

const Tags = ({ className, tags }: Props) => {
  return (
    <ul className={`flex ${className} flex-wrap`}>
      {tags.map((tag) => (
        <li key={tag.slug}>
          <CustomLink
            className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800 from-cyan-500 to-blue-500"
            href={`/tags/${tag.slug}`}
          >
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-dark whitespace-nowrap">
              {tag.slug.toLocaleLowerCase()}
            </span>
          </CustomLink>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
