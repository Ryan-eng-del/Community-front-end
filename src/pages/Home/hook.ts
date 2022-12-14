import { openNotification } from '@/components/Notification';
import { useModel } from '@umijs/max';
import { useEffect } from 'react';

export const useHomeMountEffect = () => {
  const { userInfo } = useModel('userModel');
  useEffect(() => {
    if (userInfo && userInfo.name) {
      openNotification('ζ¬’θΏεζ₯ \t\t' + userInfo?.name + 'π', 'success', {
        placement: 'topLeft',
      });
    }
  }, [userInfo]);
};
