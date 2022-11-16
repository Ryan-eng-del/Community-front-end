import ArticleList from '@/components/ArticleList';
import styles from './index.less';
const HomeBodyLeft = () => {
  return (
    <div className={styles['home-body-left']}>
      <div className={styles['home-select-tag']}></div>
      <div className={styles['home-list']}>
        <ArticleList></ArticleList>
      </div>
    </div>
  );
};
export default HomeBodyLeft;
