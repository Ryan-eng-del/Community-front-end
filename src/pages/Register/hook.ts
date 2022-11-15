import LocalStorageCache from '@/utils/cache';
import { useNavigate } from '@umijs/max';
import { IRegisterPage } from './type';
import { useModel } from '@@/exports';
import { useRegisterApi } from '@/services/Login/UserController';

/* 注册API */
export const useRegister = () => {
  const navigate = useNavigate();
  /* 登录Model */
  const { dispatchUserAction, sid } = useModel('userModel');
  /* 网络请求 */
  const { registerLoading, register, registerError, registerData } =
    useRegisterApi();
  /* 注册逻辑处理函数 */
  const onFinish = async (values: IRegisterPage['RegisterForm']) => {
    const { nickname, username, password, code } = values;
    try {
      /* 发送请求 */
      await register({
        name: nickname,
        username,
        password,
        sid: sid.current,
        code: code,
      });
      await dispatchUserAction({
        type: 'userModal/fromRegister',
        payload: true,
      });
      LocalStorageCache.setCache('UserInfo', { username, password });
      navigate('/login');
    } catch (err) {}
  };

  return {
    registerData,
    registerError,
    registerLoading,
    onFinish,
    sid: sid,
  };
};
