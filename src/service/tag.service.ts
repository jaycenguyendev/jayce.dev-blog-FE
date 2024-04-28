import { CustomOptions } from '@/config/api.config';
import http from '@/service/http.service';
import { Post } from '@/types';

class TagService {
  async getTags(options?: Omit<CustomOptions, 'body'>) {
    return await http.get<Post[]>('/tags', options);
  }
}

export default new TagService();
