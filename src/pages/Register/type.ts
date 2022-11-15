interface IRegisterForm {
  username: string;
  password: string;
  nickname: string;
  code: string;
}

export interface IRegisterPage {
  RegisterForm: IRegisterForm;
}
