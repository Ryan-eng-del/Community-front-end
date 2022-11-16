import { openNotification } from '@/components/Notification';
import { isUserAuth } from '@/utils/auth';
import { useModel } from '@umijs/max';
import { useEffect } from 'react';
import { history } from '@umijs/max';

export const useHomeMountEffect = () => {
  const { userInfo, dispatchUserAction } = useModel('userModel');
  useEffect(() => {
    if (userInfo && userInfo.name) {
      openNotification(
        '欢迎回来 \t\t' + userInfo?.name + '😎',
        'success',
        { placement: 'topLeft' },
        { color: 'green', content: '登录成功！' },
      );
    }
  }, [userInfo]);

  /* 登录持久化 */
  useEffect(() => {
    if (isUserAuth()) {
      dispatchUserAction({ type: 'userModal/getUserInfo', payload: undefined });
    } else {
      history.push('/login');
    }
  }, []);
};
