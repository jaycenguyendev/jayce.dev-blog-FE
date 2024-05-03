import Tags from '@/components/shared/tags';
import { FORMAT_DATE } from '@/constants';
import PostsTagContainer from '@/containers/tag/components/posts';
import { Post, Tag } from '@/types';
import { useTranslations } from 'next-intl';

type Props = {
  posts: Post[];
  tags: Tag[];
};

const TagContainer = (props: Props) => {
  const t = useTranslations('tag');

  return (
    <div>
      {/* Heading */}
      <h1 className="h1-bold">{t('tag_title')}</h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 mt-5">{t('intro')}</p>
      <Tags className="mt-4" tags={props.tags} />
      <PostsTagContainer posts={props.posts} formatDay={FORMAT_DATE.YYYY_MM_DD} />
    </div>
  );
};

export default TagContainer;
