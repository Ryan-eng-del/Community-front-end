import { RequestConfig } from '@umijs/max';
import { openNotification } from './components/Notification/index';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const request: RequestConfig = {
  baseURL: 'http://127.0.0.1:3001',
  requestInterceptors: [],
  responseInterceptors: [
    [
      (response) => {
        return response;
      },
      (error: any) => {
        openNotification(
          error?.response?.data?.msg,
          'error',
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
