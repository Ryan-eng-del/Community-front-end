import ArticleList from '@/components/ArticleList';
import styles from './index.less';
import { useState } from 'react';
import classNames from 'classnames';
import Input from 'antd/es/input';
import { Button } from 'antd';

type SortType = 'hot' | 'new';
const HomeBodyLeft = () => {
  const [curSort, setCurSort] = useState<SortType>('hot');
  const handleArticleSort = (sort: SortType) => {
    setCurSort(sort);
  };
  const onSearch = () => {
    console.log('search');
  };

  return (
    <div className={styles['home-body-left']}>
      <div className={styles['home-body-left-top']}>
        <div className={styles['home-top-input']}>
          <Input.Search
            placeholder="搜索热门文章或者标签"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>
        <div className={styles['home-body-left-sign']}>
          <div className={styles['home-nav-button']}>
            <Button type={'primary'} size={'middle'} style={{ height: '38px' }}>
              今日签到
            </Button>
            <span className={styles['home-left-nav']}>签到说明</span>
          </div>
        </div>
      </div>
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
