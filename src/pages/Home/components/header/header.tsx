import { MessageOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import styles from './index.less';

const HomeHeader = () => {
  return (
    <div className={styles['home-header']}>
      <div className="setting-icon-wrapper">
        <SettingOutlined style={{ fontSize: '22px', cursor: 'pointer' }} />
      </div>
      <Typography.Title style={{ margin: '0' }} level={3}>
        Question Community
      </Typography.Title>
      <div className={styles['home-tool']}>
        <MessageOutlined style={{ fontSize: '22px', cursor: 'pointer' }} />
        <Button
          type="primary"
          style={{
            width: '116px',
            height: '40px',
            borderRadius: ' 6px',
            marginLeft: '50px',
          }}
        >
          写文章
        </Button>
      </div>
    </div>
  );
};
export default HomeHeader;
