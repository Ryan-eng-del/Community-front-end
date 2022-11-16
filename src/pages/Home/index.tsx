import styles from './index.less';
import HomeHeader from './components/header/header';
import HomeBodyLeft from './components/body/bodyLeft';
import HomeBodyRight from './components/body/bodyRight';
import { useHomeMountEffect } from './hook';
import { LayoutWrapper } from '../../components/HomeLayout/index';

const HomePage = () => {
  /* 登录页面effect */
  useHomeMountEffect();

  return (
    <LayoutWrapper>
      <div className={styles['home-wrapper']}>
        <HomeHeader />
        <div className={styles['home-body']}>
          <HomeBodyLeft />
          <HomeBodyRight />
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default HomePage;
