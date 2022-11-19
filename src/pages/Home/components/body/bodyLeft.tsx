import ArticleList from '@/components/ArticleList';
import styles from './index.less';
import { useState } from 'react';
import classNames from 'classnames';

type SortType = 'hot' | 'new';
const HomeBodyLeft = () => {
  const [curSort, setCurSort] = useState<SortType>('hot');
  const handleArticleSort = (sort: SortType) => {
    setCurSort(sort);
  };
  return (
    <div className={styles['home-body-left']}>
      <div className={styles['home-select-tag']}></div>
      <div className={styles['home-list']}>
        <div className={styles['home-list-top']}>
          <span
            onClick={() => handleArticleSort('hot')}
            className={classNames(
              styles['sort-type'],
              curSort === 'hot' ? styles['active'] : '',
            )}
          >
            最热
          </span>
          <span className={'mx-1'}> | </span>
          <span
            onClick={() => handleArticleSort('new')}
            className={classNames(
              styles['sort-type'],
              curSort === 'new' ? styles['active'] : '',
            )}
          >
            最新
          </span>
        </div>
        <ArticleList></ArticleList>
        <ArticleList></ArticleList>
        <ArticleList></ArticleList>
        <ArticleList></ArticleList>
        <ArticleList></ArticleList>
        <ArticleList></ArticleList>
        <ArticleList></ArticleList>
        <ArticleList></ArticleList>
        <ArticleList></ArticleList>
        <ArticleList></ArticleList>
        <ArticleList></ArticleList>
        <ArticleList></ArticleList>
      </div>
    </div>
  );
};
export default HomeBodyLeft;
