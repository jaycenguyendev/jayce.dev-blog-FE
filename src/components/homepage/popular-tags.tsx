import React from 'react';
import CustomLink from '../shared/link';
import { BrandIcons, popularTags } from '@/constants/popularTags';

const PopularTags = () => {
  return (
    <section className="mt-5 mb-10">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Popular Tags
      </h1>
      <p className="mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400 pb-6 separate-border">
        Popular tags feature the most widely favored topics.
      </p>
      <div className="popular-tags grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 justify-items-center py-6">
        {popularTags.map((popularTag) => {
          const className = `flex items-center gap-2 p-3 w-32 rounded-lg ${popularTag.slug}`;
          const Icon = BrandIcons[popularTag.iconType];
          return (
            <CustomLink key={popularTag.slug} href={popularTag.href} className={className}>
              <Icon className="w-5 h-5" />
              <span className="text-white">{popularTag.title}</span>
            </CustomLink>
          );
        })}
      </div>
    </section>
  );
};

export default PopularTags;
