import CustomLink from '@/components/shared/link';
import siteMetadata from '@/data/siteMetadata';
import React from 'react';

// const MAX_DISPLAY = 3;

const RecentPosts = () => {
  return (
    <section>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Recent Posts
      </h1>
      <p className="mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400 pb-2 ">
        {siteMetadata.description}
      </p>
      <ul>
        <li>
          <div className="separate-line my-4"></div>

          <article>
            <div className="flex flex-col xl:flex-row xl:gap-28">
              <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400 xl:pt-3">
                December 10, 2023
              </p>
              <div className="space-y-5 xl:col-span-3">
                <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mt-[6px]">
                  <CustomLink href="/blog">Exploring module in NestJS</CustomLink>
                </h2>

                <div className="flex flex-wrap !mt-2">
                  <CustomLink
                    className="mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400"
                    href="/blog"
                  >
                    <span>NestJS</span>
                  </CustomLink>
                  <CustomLink
                    className="mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400"
                    href="/blog"
                  >
                    <span>Typescript</span>
                  </CustomLink>
                  <CustomLink
                    className="mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400"
                    href="/blog"
                  >
                    <span>Javascript</span>
                  </CustomLink>
                  <CustomLink
                    className="mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400"
                    href="/blog"
                  >
                    <span>Design-patterns</span>
                  </CustomLink>
                </div>
                <p className="prose text-gray-500 dark:text-gray-400">
                  Modules are crucial components at the center of NestJS. In this post, we will take
                  a closer look at what modules are in NestJS.
                </p>

                <CustomLink
                  className="inline-block text-base font-medium leading-6 text-primary hover:text-sky-600 dark:hover:text-sky-400"
                  href="/blog"
                >
                  <span>Read more →</span>
                </CustomLink>
              </div>
            </div>
          </article>
        </li>
        <li>
          <div className="separate-line my-4"></div>
          <article>
            <div className="flex flex-col xl:flex-row xl:gap-28">
              <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400 xl:pt-3">
                December 10, 2023
              </p>
              <div className="space-y-5 xl:col-span-3">
                <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mt-[6px]">
                  <CustomLink href="/blog">Exploring module in NestJS</CustomLink>
                </h2>

                <div className="flex flex-wrap !mt-2">
                  <CustomLink
                    className="mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400"
                    href="/blog"
                  >
                    <span>NestJS</span>
                  </CustomLink>
                  <CustomLink
                    className="mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400"
                    href="/blog"
                  >
                    <span>Typescript</span>
                  </CustomLink>
                  <CustomLink
                    className="mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400"
                    href="/blog"
                  >
                    <span>Javascript</span>
                  </CustomLink>
                  <CustomLink
                    className="mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400"
                    href="/blog"
                  >
                    <span>Design-patterns</span>
                  </CustomLink>
                </div>
                <p className="prose text-gray-500 dark:text-gray-400">
                  Modules are crucial components at the center of NestJS. In this post, we will take
                  a closer look at what modules are in NestJS.
                </p>

                <CustomLink
                  className="inline-block text-base font-medium leading-6 text-primary hover:text-sky-600 dark:hover:text-sky-400"
                  href="/blog"
                >
                  <span>Read more →</span>
                </CustomLink>
              </div>
            </div>
          </article>
        </li>
        <div className="flex justify-end text-base font-medium leading-6">
          <CustomLink
            href="/blog"
            className="text-primary hover:text-sky-600 dark:hover:text-sky-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </CustomLink>
        </div>
      </ul>
    </section>
  );
};

export default RecentPosts;
