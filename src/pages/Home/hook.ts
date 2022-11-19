import { openNotification } from '@/components/Notification';
import { useModel } from '@umijs/max';
import { useEffect } from 'react';

export const useHomeMountEffect = () => {
  const { userInfo } = useModel('userModel');
  useEffect(() => {
    if (userInfo && userInfo.name) {
      openNotification('欢迎回来 \t\t' + userInfo?.name + '😎', 'success', {
        placement: 'topLeft',
      });
    }
  }, [userInfo]);
};
