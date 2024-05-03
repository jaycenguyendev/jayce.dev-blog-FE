import { Tag } from '@/types/tag.type';

export type Post = {
  id: string;
  authorId: string;
  parentId: string | null;
  title: string;
  metaTitle: string | null;
  slug: string;
  summary: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string | null;
  publishedAt: string | null;
  content: string | null;
  tags?: Tag[];
};
export type GetPostsResponse = {
  posts: Post[];
  totalPages?: number;
};

export type QueryParamsPosts = {
  page?: number;
  limit?: number;
  post?: string;
};
