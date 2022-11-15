export type IUserModelAction =
  | {
      type: 'userModal/login';
      payload: any;
    }
  | { type: 'userModal/fromRegister'; payload: boolean };

export interface IUserInfo {
  username: string;
  nickname: string;
  avatar: string;
  token: string;
}
