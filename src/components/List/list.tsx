import React, { FC } from 'react';
import classnames from 'classnames';
import _ from '@fujia/hammer';

import { ListProps } from './interface';
import { Empty } from '../../index';
import ListItem from './list-item';

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
    dataSource = [],
    title,
    extra,
    renderItem,
    empty = Empty,
    listBottom,
    footer,
    endReachedThreshold,
    onListScroll,
    onLoadMore,
  } = props;

  const classNames = classnames(prefixCls, {
    [`${prefixCls}-border`]: bordered,
  }, className);

  const renderHeader = () => {

  };

  const renderList = () => {
    // if have renderItem props, it'll have higher priority
    if (_.isFunction(renderItem)) {
      return dataSource.map((item, index) => renderItem(item, index));
    }
  };

  return (
    <div className={classNames} style={style}>
      {renderHeader()}
      {(dataSource && dataSource.length)
        ? (
          <ul className={`${prefixCls}-wrapper`}>
            {renderList}
            <li className={`${prefixCls}-list-bottom`}>
              {listBottom}
            </li>
          </ul>
        ) : empty
      }
      {footer}
    </div>
  );
};

export default List;
