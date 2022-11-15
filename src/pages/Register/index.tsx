import LoginLayout from '@/components/LoginLayout';
import { useGetCaptchaApi } from '@/services/Common';
import { useRegister } from './hook';

const RegisterPage = () => {
  /* 注册API */
  const { registerError, registerLoading, onFinish } = useRegister();
  /* 获取验证码API */
  const { captchaData, getCaptchaApi } = useGetCaptchaApi();

  return (
    <LoginLayout
      isLoginPage={false}
      onFinish={onFinish}
      loading={registerLoading}
      error={registerError}
      captcha={captchaData?.data}
      refresh={getCaptchaApi}
    ></LoginLayout>
  );
};

export default RegisterPage;
