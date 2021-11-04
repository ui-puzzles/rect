import React, { CSSProperties, useContext } from 'react';
import classnames from 'classnames';

import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}
export const MENU_ITEM_DISPLAY_NAME = 'MenuItem';

const prefixCls = 'pr-menu-item';

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    index,
    disabled,
    children,
    className,
    style,
  } = props;
  const context = useContext(MenuContext);
  const classes = classnames(`${prefixCls}`, {
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-active`]: index === context.index,
  }, className);

  function handleClick() {
    if (typeof context.onSelect === 'function' && !disabled && (typeof index === 'string')) {
      context.onSelect(index);
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
}

MenuItem.displayName = MENU_ITEM_DISPLAY_NAME;

MenuItem.defaultProps = {
  disabled: false,
}

export default MenuItem;
