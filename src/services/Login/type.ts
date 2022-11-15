export interface IUserAPI {
  /* 登录注册返回结果字段 */
  LoginSuccessResult: ILoginSuccessResult;
  /* 注册请求体 */
  RegisterBody: IRegisterBody;
  /* 登录请求体*/
  LoginBody: ILoginBody;
}

export interface ILoginData {
  count: number;
  created: string;
  gender: string;
  isVip: string;
  location: string;
  mobile: string;
  name: string;
  password: string;
  pic: string;
  points: number;
  roles: ['user'];
  signature: string;
  status: string;
  username: string;
  __v: 0;
  _id: string;
}

interface ILoginSuccessResult {
  data: ILoginData;
}

/* 注册，登录通用字段 */
interface ILoginCommon {
  username: string;
  password: string;
  sid: string;
  code: string;
}

interface IRegisterBody extends ILoginCommon {
  name: string;
}

interface ILoginBody extends ILoginCommon {
  /* 展位防止报错 */
  space?: string;
}
