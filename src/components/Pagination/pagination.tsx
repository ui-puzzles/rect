import React, { FC } from 'react';
import classnames from 'classnames';

import { PaginationProps } from './interface';

const prefixCls = 'pr-pagination';

const Pagination: FC<PaginationProps> = (props) => {
  const { className, style } = props;

  const classNames = classnames(prefixCls, className);

  return (
    <div className={classNames} style={style}>
      {/* adding something */}
    </div>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
