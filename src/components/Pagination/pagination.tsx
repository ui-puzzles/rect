import React, { FC, useState, useMemo } from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

import { PaginationProps, JumpAction } from './interface';

const prefixCls = 'pr-pagination';

const DEFAULT_CURRENT = 1;
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_TOTAL = 0;
const BUFFER_SIZE = 2;
const VALID_SIZE = ['small', 'large'];
const MINI_DISPLAY_ITEMS = 5;

const getPagesAmount = (pageSize: number, total: number) => Math.ceil(total / pageSize);
const fillArray = (size: number, start: number) =>
  Array(size)
    .fill(0)
    .map((_, i) => start + i);

const Pagination: FC<PaginationProps> = (props) => {
  const {
    className,
    style,
    defaultCurrent = DEFAULT_CURRENT,
    current: propCurrent,
    defaultPageSize = DEFAULT_PAGE_SIZE,
    pageSize: propPageSize,
    total = DEFAULT_TOTAL,
    hideOnSinglePage = true,
    size,
    onChange,
  } = props;
  const [current, setCurrent] = useState(propCurrent || defaultCurrent);
  const [pageSize, setPageSize] = useState(propPageSize || defaultPageSize);
  const classNames = classnames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: VALID_SIZE.includes(size),
    },
    className
  );
  const pagesAmount = useMemo(() => getPagesAmount(pageSize, total), [pageSize, total]);

  if (total === DEFAULT_TOTAL || (hideOnSinglePage && pagesAmount <= 1)) return;

  let preCursor: number;
  let nextCursor: number;
  const genRenderItems = () => {
    let items = [];
    const doubleBufferSize = BUFFER_SIZE * 2;

    if (pagesAmount <= MINI_DISPLAY_ITEMS + doubleBufferSize) {
      return items.concat(fillArray(pagesAmount, 1));
    }

    if (current - defaultCurrent >= doubleBufferSize) {
      if (pagesAmount - current <= BUFFER_SIZE) {
        preCursor = pagesAmount - MINI_DISPLAY_ITEMS;
      } else {
        preCursor = current - BUFFER_SIZE - 1;
      }
    }

    if (pagesAmount - current >= doubleBufferSize) {
      if (current <= MINI_DISPLAY_ITEMS - BUFFER_SIZE) {
        nextCursor = MINI_DISPLAY_ITEMS + 1;
      } else {
        nextCursor = current + BUFFER_SIZE + 1;
      }
    }

    if (preCursor && nextCursor) {
      const genMiddleItems = (start: number) => fillArray(MINI_DISPLAY_ITEMS, start);

      items = [
        ...[defaultCurrent, JumpAction.Back],
        ...genMiddleItems(current - 2),
        ...[JumpAction.Forward, pagesAmount],
      ];
    } else if (preCursor) {
      items = [
        ...[defaultCurrent, JumpAction.Back],
        ...fillArray(pagesAmount - preCursor, preCursor),
        pagesAmount,
      ];
    } else {
      items = [
        defaultCurrent,
        ...fillArray(nextCursor - BUFFER_SIZE, 2),
        ...[JumpAction.Forward, pagesAmount],
      ];
    }

    return items;
  };

  const handleChangeNo = (item: number) => () => {
    let newCur = item;

    if (item === JumpAction.Back) {
      newCur = current - MINI_DISPLAY_ITEMS;
    } else if (item === JumpAction.Forward) {
      newCur = current + MINI_DISPLAY_ITEMS;
    }

    setCurrent(newCur);
    onChange?.(newCur, pageSize);
  };

  const renderItems = () => {
    const itemList = genRenderItems();

    return (
      <>
        {itemList.map((p) => (
          <li
            className={classnames(`${prefixCls}-item`, {
              [`${prefixCls}-item-active`]: current === p,
            })}
            key={p}
            onClick={handleChangeNo(p)}
          >
            {p === JumpAction.Back || p === JumpAction.Forward ? <Icon icon="ellipsis-h" /> : p}
          </li>
        ))}
      </>
    );
  };

  return (
    <div className={classNames} style={style}>
      <ul className={`${prefixCls}-list`}>{renderItems()}</ul>
    </div>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
