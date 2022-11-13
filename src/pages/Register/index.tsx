import LoginLayout from '@/components/LoginLayout';

const RegisterPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return <LoginLayout isLoginPage={false} onFinish={onFinish}></LoginLayout>;
};

export default RegisterPage;
