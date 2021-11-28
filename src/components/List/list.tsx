import React, { FC } from 'react';
import classnames from 'classnames';

import { ListProps } from './interface';
import { Empty } from '../../index';

const prefixCls = 'pr-list';

const List: FC<ListProps<any>> = (props) => {
  const {
    className,
    style,
    bordered = true,
    split,
    loading,
    hoverEffect,
    size,
    dataSource,
    renderItem,
    empty = Empty,
    listBottom,
    endReachedThreshold,
    onListScroll,
    onLoadMore,
  } = props;

  const classNames = classnames(prefixCls, className);

  const renderList = () => {

  };

  return (
    <div className={classNames} style={style}>
      {(dataSource && dataSource.length)
        ? (
          <ul className={`${prefixCls}-wrapper`}>
            {renderList}
          </ul>
        ) : empty
      }
    </div>
  );
};

export default List;
