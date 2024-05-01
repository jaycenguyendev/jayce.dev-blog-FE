import CustomLink from '@/components/shared/link';
import Tag from '@/components/shared/tag';
import { Tag as TagType } from '@/types';
import React from 'react';

type Props = {
  className?: string;
  tags: TagType[];
};

const Tags = ({ className, tags }: Props) => {
  return (
    <ul className={`flex ${className} flex-wrap`}>
      <li>
        <Tag href={`/blog`} slug="All" />
      </li>
      {tags.map((tag) => (
        <li key={tag.slug}>
          <Tag href={`/tags/${tag.slug}`} slug={tag.slug.toLocaleLowerCase()} />
        </li>
      ))}
    </ul>
  );
};

export default Tags;
