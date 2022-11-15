import { request } from '../request';
import { useRequest } from '@@/exports';
import { useModel } from '@umijs/max';

/* 获取验证码 */
export async function getCaptcha(
  sid: string,
  options?: { [key: string]: any },
) {
  return request<any>('/public/getCaptcha', {
    method: 'GET',
    ...(options || {}),
    params: { sid },
  });
}

export const useGetCaptchaApi = () => {
  const { sid } = useModel('userModel');
  const {
    data: captchaData,
    loading: captchaLoading,
    error: captchaError,
    run: getCaptchaApi,
  } = useRequest(() => getCaptcha(sid.current));
  return { captchaData, captchaError, captchaLoading, getCaptchaApi };
};
