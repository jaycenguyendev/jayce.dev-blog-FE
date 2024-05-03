'use client';
import Posts from '@/components/shared/posts';
import usePosts from '@/containers/blog/hooks/usePosts';

type Props = {
  formatDay?: string;
  searchQuery?: string;
};

const PostsBlogContainer = (props: Props) => {
  const { posts, hasMore, fetchMorePosts } = usePosts(props.searchQuery);
  return (
    <Posts
      posts={posts}
      hasMore={hasMore}
      fetchMorePosts={fetchMorePosts}
      formatDay={props?.formatDay}
      searchQuery={props.searchQuery}
    />
  );
};

export default PostsBlogContainer;
