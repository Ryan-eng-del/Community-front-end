import { request } from '../request';
import { IUserAPI } from './type';
import useRequest from '@/hook/useRequest';

/* 用户登录 */
export async function userLogin(
  body: IUserAPI['LoginBody'],
  options?: { [key: string]: any },
) {
  return request<IUserAPI['LoginSuccessResult']>('/userLogin/login', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export function useLoginApi() {
  /* 登录 */
  const {
    data: loginData,
    loading: loginLoading,
    error: loginError,
    run: login,
  } = useRequest(userLogin, { manual: true });
  return { loginData, loginLoading, loginError, login };
}

/* 用户注册 */
export function userRegister(
  body: IUserAPI['RegisterBody'],
  options?: { [key: string]: any },
) {
  return request<IUserAPI['LoginSuccessResult']>('/userLogin/register', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

export function useRegisterApi() {
  const {
    data: registerData,
    loading: registerLoading,
    error: registerError,
    run: register,
  } = useRequest(userRegister, { manual: true });
  return { registerData, registerError, registerLoading, register };
}
