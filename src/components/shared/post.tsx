import CustomLink from '@/components/shared/link';
import { FORMAT_DATE } from '@/constants';
import { Post as PostType } from '@/types';
import dayjs from 'dayjs';
import React from 'react';
import { Circle } from 'lucide-react';

type Props = {
  post: PostType;
  formatDay?: string;
};

const Post = ({ post, formatDay = FORMAT_DATE.MMMM_D_YYYY }: Props) => {
  const isDisplayTags = false;
  return (
    <li key={post.slug}>
      {isDisplayTags && <div className="separate-line my-4"></div>}
      <article>
        <div className="flex flex-col mt-8 xl:mt-4 xl:flex-row xl:gap-28">
          <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400 xl:pt-3 xl:basis-[150px]">
            {dayjs(post.createdAt).format(formatDay)}
          </p>
          <div className="self-stretch relative hidden xl:block">
            <div className="absolute flex justify-center bottom-0 h-full w-[1px] border-solid bg-gray-200 dark:bg-gray-700 translate-y-8">
              <Circle
                className="absolute top-0 -translate-y-4 stroke-gray-200 dark:stroke-gray-700"
                size={14}
                strokeWidth={4}
              />
            </div>
          </div>
          <div className="space-y-2 xl:col-span-3">
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mt-[6px]">
              <CustomLink href={`/blog/${post.slug}`}>{post.title}</CustomLink>
            </h2>

            <div className="flex flex-wrap !mt-2">
              {post.tags.map((tag) => (
                <CustomLink
                  className="mr-3 text-sm font-medium uppercase text-primary hover:text-sky-600 dark:hover:text-sky-400"
                  href={`/tags/${tag.slug}`}
                  key={tag.slug}
                >
                  <span>{tag.title}</span>
                </CustomLink>
              ))}
            </div>
            <p className="prose text-gray-500 dark:text-gray-400 mt-1">{post.summary}</p>

            <CustomLink
              className="inline-block text-base font-medium leading-6 text-primary hover:text-sky-600 dark:hover:text-sky-400"
              href={`/blog/${post.slug}`}
            >
              <span>Read more →</span>
            </CustomLink>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Post;
