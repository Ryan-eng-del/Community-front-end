import LoginLayout from '@/components/LoginLayout';

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return <LoginLayout isLoginPage={true} onFinish={onFinish}></LoginLayout>;
};

export default LoginPage;
