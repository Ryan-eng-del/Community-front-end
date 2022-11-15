import { useModel } from '@umijs/max';
import styles from './index.less';
import { useEffect } from 'react';
import { openNotification } from '@/components/Notification';
import { history } from '@umijs/max';
import { isUserAuth } from '../../utils/auth';

const HomePage = () => {
  const { userInfo, dispatchUserAction } = useModel('userModel');

  useEffect(() => {
    if (userInfo && userInfo.name) {
      openNotification(
        '欢迎回来 \t\t' + userInfo?.name + '😎',
        'success',
        { placement: 'top' },
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

  return <div className={styles.container}>{userInfo?.name}</div>;
};

export default HomePage;
