import BlogContainer from '@/containers/blog';
import tagService from '@/service/tag.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};
type Props = {
  searchParams?: {
    search?: string;
  };
};

const Blog = async (props: Props) => {
  const searchQuery = props?.searchParams?.search || '';

  const tags = (await tagService.getTags()) ?? [];
  return <BlogContainer tags={tags} />;
};

export default Blog;
