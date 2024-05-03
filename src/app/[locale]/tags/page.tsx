import TagsContainer from '@/containers/tags';
import tagService from '@/service/tag.service';

const Tags = async () => {
  const allTags = (await tagService.getTags()) ?? [];
  return <TagsContainer tags={allTags} />;
};

export default Tags;
