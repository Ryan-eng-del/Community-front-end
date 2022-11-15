import { useModel } from '@umijs/max';
import styles from './index.less';
import { useEffect } from 'react';
import { openNotification } from '@/components/Notification';

const HomePage = () => {
  const { userInfo } = useModel('userModel');

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
  return <div className={styles.container}>{userInfo?.name}</div>;
};

export default HomePage;
