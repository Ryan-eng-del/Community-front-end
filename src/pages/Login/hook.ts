import { useModel } from '@@/exports';
import { ILoginPage } from '@/pages/Login/type';
import LocalStorageCache from '@/utils/cache';

/* 登录 */
export const useLogin = () => {
  /* 登录Model */
  const {
    dispatchUserAction,
    loginLoading,
    loginError,
    userInfo,
    fromRegister,
  } = useModel('userModel');

  /* 登录逻辑处理 */
  const onFinish = async (
    userLoginInfo: ILoginPage['LoginForm'] & { remember: boolean },
  ) => {
    if (!userLoginInfo.remember) {
      LocalStorageCache.deleteCache('UserInfo');
    }
    await dispatchUserAction({
      type: 'userModal/login',
      payload: userLoginInfo,
    });
  };
  return { onFinish, loginLoading, loginError, userInfo, fromRegister };
};
