import { Typography } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
const HomeBodyRight = () => {
  return (
    <div className={styles['home-body-right']}>
      <div className={styles['home-about-me']}>
        <div className={classNames(styles['avatar-wrapper'], 'mb-4')}>
          <div className={classNames(styles['avatar'])}></div>
        </div>
        <div className={classNames('truncate', styles['nickname'])}>
          <span>Cyan Benjamin</span>
        </div>
        <div className={classNames(styles['signature'], 'truncate')}>
          <Typography.Text
            style={{
              borderBottom: '2px solid black',
              paddingBottom: '8px',
            }}
          >
            Love Yourself
          </Typography.Text>
        </div>
      </div>
      <div className={styles['home-other']}>other</div>
    </div>
  );
};
export default HomeBodyRight;
