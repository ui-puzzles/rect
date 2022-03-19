import React, { FC } from 'react';
import classnames from 'classnames';

import { TagProps } from './interface';

const prefixCls = 'pr-tag';

const Tag: FC<TagProps> = (props) => {
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

export default Tag;
