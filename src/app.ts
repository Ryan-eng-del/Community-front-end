import { RequestConfig } from '@umijs/max';
import { openNotification } from './components/Notification';
import { TOKEN_NAME } from './constants';
import LocalStorageCache from './utils/cache';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const request: RequestConfig = {
  baseURL: 'http://127.0.0.1:3001',
  requestInterceptors: [
    (config: any) => {
      config.headers.authorization =
        LocalStorageCache.getCache(TOKEN_NAME) || '';

      return config;
    },
  ],
  responseInterceptors: [
    [
      (response) => {
        return response;
      },
      (error: any) => {
        openNotification(
          error?.response?.data?.msg,
          'info',
          {
            placement: 'topLeft',
          },
          { color: 'red', content: '错误' },
        );
        return Promise.reject(error);
      },
    ],
  ],
};
