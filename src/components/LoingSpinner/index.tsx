import style from './index.less';

const LoginSpinner = () => {
  return (
    <div className={style['dot-spinner']}>
      <div className={style['dot-spinner__dot']}></div>
      <div className={style['dot-spinner__dot']}></div>
      <div className={style['dot-spinner__dot']}></div>
      <div className={style['dot-spinner__dot']}></div>
      <div className={style['dot-spinner__dot']}></div>
      <div className={style['dot-spinner__dot']}></div>
      <div className={style['dot-spinner__dot']}></div>
      <div className={style['dot-spinner__dot']}></div>
    </div>
  );
};
export default LoginSpinner;
