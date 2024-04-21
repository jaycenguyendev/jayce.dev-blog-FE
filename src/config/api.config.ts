import envConfig from '@/config/env.config';
import { Method } from '@/constants';

export type CustomOptions = Omit<RequestInit, 'method'> & {
  baseUrl?: string | undefined;
};

export type ResponseHttp<T> = {
  httpStatusCode: number;
  data: T;
};

class HttpError extends Error {
  status: number;
  payload: any;
  constructor({ status, payload }: { status: number; payload: any }) {
    super('Http Error');
    this.status = status;
    this.payload = payload;
  }
}

class SessionToken {
  private token = '';
  get value() {
    return this.token;
  }
  set value(token: string) {
    // Nếu gọi method này ở server thì sẽ bị lỗi
    if (typeof window === 'undefined') {
      throw new Error('Cannot set token on server side');
    }
    this.token = token;
  }
}

export const clientSessionToken = new SessionToken();

export const request = async <Response>(
  method: keyof typeof Method,
  url: string,
  options?: CustomOptions | undefined
) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined;
  const baseHeaders = {
    'Content-Type': 'application/json',
    // Authorization: clientSessionToken.value ? `Bearer ${clientSessionToken.value}` : '',
  };

  const baseUrl = options?.baseUrl ?? envConfig.NEXT_PUBLIC_API_ENDPOINT;

  const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
    },
    body,
    method,
  });
  const responseData: ResponseHttp<Response> = await res.json();

  if (!res.ok) {
    console.log('runnnnnnnn');
    throw new HttpError({
      status: res.status,
      payload: responseData,
    });
  }
  //   if (['/auth/login', '/auth/register'].includes(url)) {
  //     clientSessionToken.value = (payload as LoginResType).data.token;
  //   } else if ('/auth/logout'.includes(url)) {
  //     clientSessionToken.value = '';
  //   }
  return responseData;
};
