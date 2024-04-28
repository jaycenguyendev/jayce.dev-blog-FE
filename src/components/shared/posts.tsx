'use client';

import Post from '@/components/shared/post';
import Loader from '@/components/ui/loader';
import { FORMAT_DATE } from '@/constants';
import usePosts from '@/hooks/usePosts';
import InfiniteScroll from 'react-infinite-scroll-component';

type Props = {
  formatDay?: string;
};

const Posts = ({ formatDay = FORMAT_DATE.MMMM_D_YYYY }: Props) => {
  const { posts, hasMore, fetchMorePosts } = usePosts();
  return (
    <ul>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts}
        hasMore={hasMore}
        loader={
          <div className="text-center">
            <Loader />
          </div>
        }
        className="!overflow-hidden"
      >
        {posts.map((post) => {
          return <Post key={post.slug} post={post} formatDay={formatDay} />;
        })}
      </InfiniteScroll>
    </ul>
  );
};

export default Posts;
