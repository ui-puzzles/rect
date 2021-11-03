import React, { FC } from 'react';
import classnames from 'classnames';

import { DividerProps } from './interface';

const prefixCls = 'pr-divider';

const Divider: FC<DividerProps> = (props) => {
  const {
    style,
    dashed = false,
    className,
    align = 'center',
    mode = 'horizontal',
    children
  } = props;

  const classNames = classnames(
    prefixCls,
    {
      [`${prefixCls}-v`]: mode === 'vertical',
      [`${prefixCls}-${align}`]: align && align !== 'center',
      [`${prefixCls}-dashed`]: dashed,
      [`${prefixCls}-with-text`]: children,
    },
    className,
  )

  return (
    <div className={classNames} style={style}>
      {
        children && mode === 'horizontal' ? (
          <span className={`${prefixCls}-text`}>{children}</span>
        ) : null
      }
    </div>
  );
};

export default Divider;
