import TagContainer from '@/containers/tag';
import tagService from '@/service/tag.service';
import { Tag as TagType } from '@/types';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const allTags = (await tagService.getTags()) ?? [];

  return allTags.map((tag) => ({
    slug: tag.slug,
  }));
}

const Tag = async (props: Props) => {
  const { slug } = props.params;
  const allTags = (await tagService.getTags()) ?? [];
  const tag = ((await tagService.getTagsBySlug(slug)) ?? []) as TagType;
  return <TagContainer posts={tag.posts} tags={allTags} />;
};

export default Tag;
