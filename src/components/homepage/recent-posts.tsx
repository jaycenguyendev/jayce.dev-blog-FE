import siteMetadata from '@/data/siteMetadata';
import React from 'react';

// const MAX_DISPLAY = 3;

const RecentPosts = () => {
  return (
    <section>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Recent Posts
      </h1>
      <p className="mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400 pb-6 separate-border">
        {siteMetadata.description}
      </p>
    </section>
  );
};

export default RecentPosts;
