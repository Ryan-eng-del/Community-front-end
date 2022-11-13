import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import classnames from 'classnames';

import style from './index.less';
import styled from 'styled-components';
const { Title, Text } = Typography;

/* 样式覆盖ant-input-prefix */
const OverrideAntInputPrefix = styled.div`
  .ant-input-prefix {
    margin-right: 0.625rem;
  }
  .ant-btn-primary {
    width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
  }
  .ant-form-item-with-help .ant-form-item-explain {
    margin-bottom: 1.25rem;
  }
`;

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={style['auth-form']}>
      <div className={style['auth-wrapper']}>
        <section className={style['auth-left-wrapper']}></section>
        <section className={style['auth-right-wrapper']}>
          <Title level={2}>Hey! hello👋</Title>
          <Text
            style={{
              marginBottom: '25px',
              display: 'inline-block',
              color: 'rgb(155, 155, 155)',
            }}
          >
            欢迎来到理想主义社区 !
          </Text>
          <OverrideAntInputPrefix>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <Input
                  style={{ borderRadius: '0.5rem' }}
                  className={classnames(['mb-2', 'h-11'])}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入邮箱"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <Input
                  style={{ borderRadius: '0.5rem' }}
                  className="h-11 mb-2"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item>
                <div className={classnames(style['tool-tip'])}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                  </Form.Item>
                  <a className="login-form-forgot" href="">
                    忘记密码
                  </a>
                </div>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  style={{ height: '2.75rem' }}
                  htmlType="submit"
                  className="login-form-button"
                >
                  登录
                </Button>
                <div className="text-center mt-4">
                  <a href="">立即注册!</a>
                </div>
              </Form.Item>
            </Form>
          </OverrideAntInputPrefix>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
