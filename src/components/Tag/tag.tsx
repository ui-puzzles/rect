import React, { FC, isValidElement, useState, MouseEvent } from 'react';
import classnames from 'classnames';

import { TagProps } from './interface';
import { Icon } from '../../index';

const prefixCls = 'pr-tag';
const VALID_SIZES = ['xs', 'sm', 'md', 'lg'];

const Tag: FC<TagProps> = (props) => {
  const {
    className,
    style = {},
    bordered = false,
    size = 'default',
    closable = false,
    selectable = false,
    defaultSelected,
    icon,
    closeIcon,
    onClose,
    onSelect,
    children,
  } = props;
  const [visible, setVisible] = useState<boolean>('visible' in props ? props.visible : true);
  const [selected, setSelected] = useState('selected' in props ? props.selected : defaultSelected);
  const [loading, setLoading] = useState<boolean>();

  const mergedSelected = 'selected' in props ? props.selected : selected;
  const mergedVisible = 'visible' in props ? props.visible : visible;

  const classNames = classnames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: VALID_SIZES.includes(size) && size !== 'md',
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-selectable`]: selectable,
      [`${prefixCls}-selected`]: mergedSelected,
      [`${prefixCls}-hidden`]: !mergedVisible,
    },
    className
  );

  const handleClose = (e: MouseEvent) => {
    e.stopPropagation();

    const res = onClose?.();

    if (res && res.then && res.catch) {
      setLoading(true);

      res
        .then(() => {
          setVisible(false);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setVisible(false);
    }
  };

  const handleClick = () => {
    const newSelected = !mergedSelected;

    if (!('selected' in props)) {
      setSelected(newSelected);
    }

    if (selectable) {
      onSelect?.(newSelected);
    }
  };

  const renderCloseIcon = () => {
    if (!closable || loading) return null;

    return (
      <span className={`${prefixCls}-icon-close`} onClick={handleClose}>
        {isValidElement(closeIcon) ? closeIcon : <Icon icon="times" />}
      </span>
    );
  };

  return (
    <div className={classNames} style={style} onClick={handleClick}>
      {icon && <span className={`${prefixCls}-icon`}>{icon}</span>}
      {children}
      {renderCloseIcon()}
      {loading && (
        <span className={`${prefixCls}-icon-loading`}>
          <Icon icon="spinner" />
        </span>
      )}
    </div>
  );
};

Tag.displayName = 'Tag';

export default Tag;
