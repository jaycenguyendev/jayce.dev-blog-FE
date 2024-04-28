import postService from '@/service/post.service';
import { Post as PostType } from '@/types';
import { useEffect, useState } from 'react';
import { QueryParamsPosts } from '@/types';

const POSTS_LIMIT = 8;
const usePosts = () => {
  const [page, setPage] = useState(2);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState<number>();

  const getPosts = async (queryParams?: QueryParamsPosts) => {
    const params = queryParams ?? {
      page: 1,
      limit: POSTS_LIMIT,
    };
    const responsePosts = await postService.getPosts(params);
    const postsData = responsePosts?.posts ?? [];
    setPosts([...posts, ...postsData]);
    setTotalPages(responsePosts?.totalPages);
  };

  const fetchMorePosts = async () => {
    getPosts({
      page: page,
      limit: POSTS_LIMIT,
    });
    totalPages && page > totalPages ? setHasMore(false) : setHasMore(true);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return {
    posts,
    fetchMorePosts,
    hasMore,
  };
};

export default usePosts;
