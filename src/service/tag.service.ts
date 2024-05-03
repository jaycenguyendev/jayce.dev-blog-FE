import { CustomOptions } from '@/config/api.config';
import http from '@/service/http.service';
import { Post, Tag } from '@/types';

class TagService {
  private prefix = '/tags';
  async getTags(options?: Omit<CustomOptions, 'body'>) {
    return await http.get<Tag[]>(this.prefix, options);
  }
  async getTagsBySlug(slug: string, options?: Omit<CustomOptions, 'body'>) {
    return await http.get<Tag>(`${this.prefix}/${slug}`, options);
  }
}

export default new TagService();
