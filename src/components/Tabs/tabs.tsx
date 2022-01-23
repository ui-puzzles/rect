import React, { FC } from 'react';
import classnames from 'classnames';

import { TabsProps } from './interface';

const prefixCls = 'pr-tabs';

const Tabs: FC<TabsProps> = (props) => {
  const {
    className,
    style
  } = props;

  const classNames = classnames(prefixCls, className);

  return (
    <div className={classNames} style={style}>
      {/* adding something */}
    </div>
  );
};

export default Tabs;
