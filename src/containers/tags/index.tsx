import Tags from '@/components/shared/tags';
import { Tag } from '@/types';
import { useTranslations } from 'next-intl';

type Props = {
  tags: Tag[];
};

const TagsContainer = (props: Props) => {
  const t = useTranslations('tag');
  return (
    <div>
      <h1 className="h1-bold">{t('tag_title')}</h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 mt-5">{t('intro')}</p>
      <Tags className="mt-4" tags={props.tags} />
    </div>
  );
};

export default TagsContainer;
