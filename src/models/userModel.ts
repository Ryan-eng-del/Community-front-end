import { useEffect, useRef, useState } from 'react';
import { IUserModelAction } from '@/types/model';
import { useLoginApi } from '@/services/Login/UserController';
import { v4 as uuidv4 } from 'uuid';
import LocalStorageCache from '@/utils/cache';
import { ILoginData } from '@/services/Login/type';
import { history } from 'umi';

export default () => {
  const [userInfo, setUserInfo] = useState<null | ILoginData>(null);
  const [fromRegister, setFromRegister] = useState(false);
  const sidRef = useRef('');
  useEffect(() => {
    const sid = LocalStorageCache.getCache('uuid');
    if (!sid) {
      sidRef.current = uuidv4();
      LocalStorageCache.setCache('uuid', sidRef.current);
    } else {
      sidRef.current = sid;
    }
  }, []);

  const { run, loginLoading, loginError, loginData } = useLoginApi();

  /* dispatchAction */
  const dispatchUserAction = async (action: IUserModelAction) => {
    const { payload, type } = action;
    if (type === 'userModal/login') {
      delete payload?.remember;
      try {
        const info = await run({ ...payload, sid: sidRef.current });
        console.log(info, 'info');
        setUserInfo(info);
        history.push('/home');
      } catch (err) {}
    } else if (type === 'userModal/fromRegister') {
      setFromRegister(payload);
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
  };
};
