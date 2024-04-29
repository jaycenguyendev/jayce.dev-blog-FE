import Posts from '@/components/shared/posts';
import SearchInput from '@/components/shared/search-input';
import Tags from '@/components/shared/tags';
import { FORMAT_DATE } from '@/constants';
import { Tag } from '@/types';
import { useTranslations } from 'next-intl';

type Props = {
  searchQuery?: string;
  tags: Tag[];
};

const BlogContainer = (props: Props) => {
  const t = useTranslations('blog');

  return (
    <div>
      {/* Heading */}
      <h1 className="h1-bold">{t('all_posts_title')}</h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 mt-5">{t('intro')}</p>
      <SearchInput label="Search posts" className="mt-5" />
      <Tags className="mt-4" tags={props.tags} />
      <Posts formatDay={FORMAT_DATE.YYYY_MM_DD} searchQuery={props.searchQuery} />
    </div>
  );
};

export default BlogContainer;
