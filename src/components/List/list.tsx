import React, { FC } from 'react';
import classnames from 'classnames';

import { ListProps } from './interface';

const prefixCls = 'pr-list';

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
    renderItem,
    empty,
    listBottom,
    endReachedThreshold,
    onListScroll,
    onLoadMore,
  } = props;

  const classNames = classnames(prefixCls, className);

  return (
    <div className={classNames} style={style}>
      {(dataSource && dataSource.length)
        ? (
          <ul>
            <p></p>
          </ul>
        ) : empty
      }
    </div>
  );
};

export default List;
