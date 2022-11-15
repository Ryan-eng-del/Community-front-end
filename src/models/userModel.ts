import { useEffect, useRef, useState } from 'react';
import { IUserModelAction } from '@/types/model';
import { useLoginApi } from '@/services/Login/UserController';
import { v4 as uuidv4 } from 'uuid';
import LocalStorageCache from '@/utils/cache';
import { ILoginData } from '@/services/Login/type';
import { history } from 'umi';
import { useGetUserInfoApi } from '@/services/home';
import { TOKEN_NAME } from '../constants/index';

export default () => {
  const [userInfo, setUserInfo] = useState<null | ILoginData>(null);
  const [fromRegister, setFromRegister] = useState(false);
  const sidRef = useRef('');
  const tokenRef = useRef('');
  useEffect(() => {
    const sid = LocalStorageCache.getCache('uuid');
    if (!sid) {
      sidRef.current = uuidv4();
      LocalStorageCache.setCache('uuid', sidRef.current);
    } else {
      sidRef.current = sid;
    }
  }, []);

  /* api */
  const { login, loginLoading, loginError, loginData } = useLoginApi();
  const { userInfoLoading, getUserData } = useGetUserInfoApi();

  /* dispatchAction */
  const dispatchUserAction = async (action: IUserModelAction) => {
    const { payload } = action;
    switch (action.type) {
      case 'userModal/login':
        delete payload?.remember;
        try {
          const info = await login({ ...payload, sid: sidRef.current });
          LocalStorageCache.setCache(TOKEN_NAME, 'Bearer ' + info?.token);
          setUserInfo(info);
          tokenRef.current = info.token;
          history.push('/home');
        } catch (err) {}
        break;
      case 'userModal/fromRegister':
        setFromRegister(payload);
        break;
      case 'userModal/getUserInfo':
        try {
          const info = await getUserData();
          setUserInfo(info);
        } catch (err) {
          history.push('/login');
        }
        break;
      default:
        throw new Error('dispatch User Action is Error');
    }
  };

  return {
    loginData,
    loginError,
    loginLoading,
    dispatchUserAction,
    userInfo,
    fromRegister,
    sid: sidRef,
    userInfoLoading,
    tokenRef,
  };
};
