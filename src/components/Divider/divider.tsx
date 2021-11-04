import React, { FC } from 'react';
import classnames from 'classnames';

import { DividerProps } from './interface';

const prefixCls = 'pr-divider';

const Divider: FC<DividerProps> = (props) => {
  const {
    style,
    textStyle,
    dashed = false,
    className,
    align = 'center',
    mode = 'horizontal',
    children
  } = props;

  const classNames = classnames(
    prefixCls,
    {
      [`${prefixCls}-with-text`]: children,
      [`${prefixCls}-v`]: mode === 'vertical',
      [`${prefixCls}-h`]: mode === 'horizontal',
      [`${prefixCls}-${align}`]: align && align !== 'center',
      [`${prefixCls}-dashed`]: dashed,
    },
    className,
  )

  return (
    <div className={classNames} style={style}>
      {
        children && mode === 'horizontal' ? (
          <span className={`${prefixCls}-text`} style={textStyle}>{children}</span>
        ) : null
      }
    </div>
  );
};

export default Divider;
