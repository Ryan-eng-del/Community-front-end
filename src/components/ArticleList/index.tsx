import { Avatar } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
const ArticleList = () => {
  return (
    <div className={classNames(styles['article-wrapper'])}>
      <div className={classNames(styles['author-info'])}>
        <Avatar size={'default'} />
        <span className={styles['nickname']}>Cyan BenJamin</span>
        <span className={classNames(styles['point'])}></span>
        <span className={classNames(styles['post-time'])}>2022-9-9</span>
        <span className={classNames(styles['author-tag'])}>⭐ Member</span>
      </div>

      <div className={classNames(styles['article-info'])}>
        <div className={classNames(styles['article'])}>
          <div className={classNames(styles['title-wrapper'])}>
            <span>
              React Config Dev React ConfigReact Config Dev React ConfigReact
              Config Dev React Config React Config Dev React ConfigReact Config
              Dev React ConfigReact Config Dev React Config
            </span>
          </div>
          <div className={classNames(styles['article-content'])}>
            <span>
              As Evan Prodromou says, this is happening. The fediverse is
              growing much faster than any centralized social network, and
              you’re going to want to be involved. I’ve been trying to explain
              what the fediverse actually is in a few different contexts. One
              thing that’s revealed to me is that there’s a whole generation of
              internet users whose entire model of how things work is based on
              the centralized, VC-funded service model. For them, a service is
              tied to a domain name and run by a company, and that’s it — even
              though they likely use email every day. It’s a surprising (to me)
              way that the prevailing business models for the web have changed
              the conversation. So, here’s my attempt to explain it — and why
              you need to take part. TLDR version Everyone’s joining a new
              social network that is run as a commons instead of as a private
              company. Nobody can buy it or own it. And it’s growing very
              quickly.
            </span>
          </div>
        </div>
        {/* toDo 图片压缩处理 */}
        <div className={classNames(styles['article-cover'])}>
          <img src="/img/back-authForm.png"></img>
        </div>
      </div>
      <div className={classNames(styles['article-tag-info'])}></div>
    </div>
  );
};

export default ArticleList;
