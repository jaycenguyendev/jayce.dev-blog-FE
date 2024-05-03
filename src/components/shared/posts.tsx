import Post from '@/components/shared/post';
import Loader from '@/components/ui/loader';
import { FORMAT_DATE } from '@/constants';
import { Post as PostType } from '@/types';
import InfiniteScroll from 'react-infinite-scroll-component';

type Props = {
  posts: PostType[];
  hasMore: boolean;
  fetchMorePosts: () => Promise<void>;
  formatDay?: string;
  searchQuery?: string;
};

const Posts = ({
  posts,
  hasMore,
  fetchMorePosts,
  formatDay = FORMAT_DATE.MMMM_D_YYYY,
  searchQuery = '',
}: Props) => {
  return (
    <ul>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts}
        hasMore={!searchQuery && hasMore}
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
