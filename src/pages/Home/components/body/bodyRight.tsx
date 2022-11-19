import { Button, Typography } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
import { isUserAuth } from '@/utils/auth';
import { useModel } from '@umijs/max';
import { Link } from '@umijs/renderer-react';
import TagArticle from '@/components/TagArticle';

const HomeBodyRight = () => {
  const { userInfo } = useModel('userModel');
  const isAuth = isUserAuth() && userInfo && userInfo?._id;

  return (
    <div className={styles['home-body-right']}>
      <div className={styles['home-about-me']}>
        <div className={classNames(styles['avatar-wrapper'], 'mb-4')}>
          <img
            className={classNames(styles['avatar'])}
            src={
              userInfo?.pic ||
              'https://img.ixintu.com/download/jpg/20201029/6d82190ac91e89f30947750bc0bf7007_512_512.jpg!bg'
            }
          />
        </div>
        <div className={classNames('truncate', styles['nickname'])}>
          <span>
            {isAuth ? (
              userInfo.username
            ) : (
              <Button type={'primary'}>
                <Link to={'/login'}>登录 / 注册</Link>
              </Button>
            )}
          </span>
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
      <div className={styles['home-other']}>
        <div className={styles['home-recommend']}>
          <span className={styles['title']}>推荐标签</span>
          <div>
            <TagArticle tags={['精华贴', '个人成长', '程序', '校园', '心得']} />
          </div>
        </div>
        <div className={styles['home-hot']}>
          <span className={styles['title']}>本周热议</span>
        </div>
      </div>
    </div>
  );
};
export default HomeBodyRight;
