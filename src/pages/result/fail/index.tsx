import { Button, Card, Icon, Result } from 'antd';
import React, { Fragment } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import styles from './index.less';

const Content = (
  <Fragment>
    <div className={styles.title}>您提交的内容有如下错误：</div>
    <div
      style={{
        marginBottom: 16,
      }}
    >
      <Icon
        style={{
          marginRight: 8,
        }}
        className={styles.error_icon}
        type="close-circle-o"
      />
      您的账户已被冻结
      <a
        style={{
          marginLeft: 16,
        }}
      >
        立即解冻
        <Icon type="right" />
      </a>
    </div>
    <div>
      <Icon
        style={{
          marginRight: 8,
        }}
        className={styles.error_icon}
        type="close-circle-o"
      />
      您的账户还不具备申请资格
      <a
        style={{
          marginLeft: 16,
        }}
      >
        立即升级
        <Icon type="right" />
      </a>
    </div>
  </Fragment>
);
export default () => (
  <GridContent>
    <Card bordered={false}>
      <Result
        status="error"
        title="提交失败"
        subTitle="请核对并修改以下信息后，再重新提交。"
        extra={<Button type="primary">返回修改</Button>}
        style={{
          marginTop: 48,
          marginBottom: 16,
        }}
      >
        {Content}
      </Result>
    </Card>
  </GridContent>
);
