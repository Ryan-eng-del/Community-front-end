import { IUserAPI } from '../Login/type';
import { request } from '../request';
import { useRequest } from '@@/exports';

/* 用户登录后获取用户信息 */
export function getUserInfoApi(options?: { [key: string]: any }) {
  return request<IUserAPI['LoginSuccessResult']>('/userLogin/getUserInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

export function useGetUserInfoApi() {
  const { loading: userInfoLoading, run: getUserData } = useRequest(
    getUserInfoApi,
    { manual: true },
  );
  return { userInfoLoading, getUserData };
}
