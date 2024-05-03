import { Post } from '@/types/post.type';

export type Tag = {
  id: string;
  title: string;
  metaTitle: string | null;
  slug: string;
  content: string | null;
  posts: Post[];
};
