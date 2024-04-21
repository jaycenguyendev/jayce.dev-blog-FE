import { CustomOptions, request } from '@/config/api.config';

class Http {
  get<Response>(url: string, options?: Omit<CustomOptions, 'body'>) {
    return request<Response>('GET', url, options);
  }
  post<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'>) {
    return request<Response>('POST', url, { ...options, body });
  }
  put<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'>) {
    return request<Response>('PUT', url, { ...options, body });
  }
  delete<Response>(url: string, options?: Omit<CustomOptions, 'body'>) {
    return request<Response>('DELETE', url, { ...options });
  }
}

const http = new Http();

export default http;
