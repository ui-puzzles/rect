import React, { FC } from 'react';
import classnames from 'classnames';

import { __Template__Props } from './interface';

const prefixCls = 'pr-__template__';

const __Template__: FC<__Template__Props> = (props) => {
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

export default __Template__;
