import { CustomOptions } from '@/config/api.config';
import http from '@/service/http.service';
import { GetPostsResponse, QueryParamsPosts } from '@/types';

class PostService {
  async getPosts(queryParams?: QueryParamsPosts, options?: Omit<CustomOptions, 'body'>) {
    const url = queryParams ? '/posts?' + new URLSearchParams(queryParams as any) : '/posts';
    return await http.get<GetPostsResponse>(url, options);
  }
}

export default new PostService();
