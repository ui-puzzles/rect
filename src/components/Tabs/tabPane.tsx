import React, { FC } from 'react';
import classnames from 'classnames';

import { TabPaneProps, TabPaneInternalProps } from './interface';

export const TAB_PANE_DISPLAY_NAME = 'TabPane';

const prefixCls = 'pr-tab-pane';

const TabPane: FC<TabPaneProps & TabPaneInternalProps> = (props) => {
  const { className, style, children, activeKey, itemKey } = props;

  const classNames = classnames(
    prefixCls,
    {
      [`${prefixCls}-active`]: activeKey && activeKey === itemKey,
    },
    className
  );

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

TabPane.displayName = TAB_PANE_DISPLAY_NAME;

export default TabPane;
