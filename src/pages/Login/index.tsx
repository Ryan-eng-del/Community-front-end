import { useEffect } from 'react';
import LoginLayout from '@/components/LoginLayout';
import { openNotification } from '@/components/Notification';
import { useLogin } from './hook';
import { useGetCaptchaApi } from '@/services/Common';

const LoginPage = () => {
  /* 获取验证码API */
  const { captchaData, getCaptchaApi } = useGetCaptchaApi();
  const { loginLoading, loginError, onFinish, fromRegister } = useLogin();

  useEffect(() => {
    if (fromRegister) {
      openNotification(
        '欢迎登录',
        'success',
        { placement: 'top', duration: 2 },
        { color: 'green', content: '注册成功' },
      );
    }
  }, [fromRegister]);

  return (
    <LoginLayout
      isLoginPage={true}
      onFinish={onFinish}
      loading={loginLoading}
      error={loginError}
      captcha={captchaData?.data}
      refresh={getCaptchaApi}
    ></LoginLayout>
  );
};

export default LoginPage;
