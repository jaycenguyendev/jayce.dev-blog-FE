'use client';
import Posts from '@/components/shared/posts';
import { Post } from '@/types';

type Props = {
  posts: Post[];
  formatDay?: string;
  searchQuery?: string;
};

const PostsTagContainer = (props: Props) => {
  return (
    <Posts
      posts={props?.posts || []}
      hasMore={false}
      fetchMorePosts={async () => {}}
      formatDay={props?.formatDay}
      searchQuery={props.searchQuery}
    />
  );
};

export default PostsTagContainer;
