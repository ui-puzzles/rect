import React, { FC } from 'react';
import classnames from 'classnames';

import { TabPaneProps } from './interface';

const prefixCls = 'pr-tab-pane';

const TabPane: FC<TabPaneProps> = (props) => {
  const { className, style } = props;

  const classNames = classnames(prefixCls, className);

  return (
    <div className={classNames} style={style}>
      {/* adding something */}
    </div>
  );
};

export default TabPane;
