import CustomLink from '@/components/shared/link';
import Post from '@/components/shared/post';
import siteMetadata from '@/data/siteMetadata';
import { Post as PostType } from '@/types';

const MAX_ITEM_DISPLAY = 3;
type Props = {
  posts: PostType[];
};
const RecentPosts = async ({ posts }: Props) => {
  const postsDisplayed = posts.slice(0, MAX_ITEM_DISPLAY);

  return (
    <section>
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Recent Posts
      </h1>
      <p className="mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400 pb-2 ">
        {siteMetadata.description}
      </p>
      <ul>
        {postsDisplayed?.map((post) => {
          return <Post key={post.slug} post={post} />;
        })}

        {posts.length > MAX_ITEM_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <CustomLink
              href="/blog"
              className="text-primary hover:text-sky-600 dark:hover:text-sky-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </CustomLink>
          </div>
        )}
      </ul>
    </section>
  );
};

export default RecentPosts;
