import React, { FC } from 'react';
import classnames from 'classnames';

import { ListProps } from './interface';

const prefixCls = 'pr-alert';

const List: FC<ListProps<any>> = (props) => {
  const {
    className,
    style,
    bordered,
    split,
    loading,
    hoverEffect,
    size,
    dataSource,
    render,
    header,
    empty,
    listBottom,
    footer,
    endReachedThreshold,
    onListScroll,
    onLoadMore,
  } = props;

  const classNames = classnames(prefixCls, className);

  return (
    <div className={classNames} style={style}>
      {(dataSource && dataSource.length)
        ? (
          <>
            {header}
            <ul>
              <p></p>
            </ul>
            {footer}
          </>
        ) : empty
      }
    </div>
  );
};

export default List;
