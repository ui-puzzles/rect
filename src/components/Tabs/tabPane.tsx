import React, { FC } from 'react';
import classnames from 'classnames';

import { TabPaneProps, TabPaneInternalProps } from './interface';

export const TAB_PANE_DISPLAY_NAME = 'TabPane';

const prefixCls = 'pr-tabs-pane';

const TabPane: FC<TabPaneProps & TabPaneInternalProps> = (props) => {
  const { className, style, children, activeKey, itemKey, lazy } = props;

  const classNames = classnames(
    prefixCls,
    {
      [`${prefixCls}-hidden`]: !lazy && activeKey !== itemKey,
    },
    className
  );

  const renderChildren = () => {
    const childrenEle = (
      <div className={classNames} style={style}>
        {children}
      </div>
    );

    if (lazy) {
      if (activeKey === itemKey) return childrenEle;
    } else {
      return childrenEle;
    }
  };

  return <>{renderChildren()}</>;
};

TabPane.displayName = TAB_PANE_DISPLAY_NAME;

export default TabPane;
