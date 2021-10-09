import React, { CSSProperties, createContext, useState, FunctionComponentElement, cloneElement } from 'react';
import classnames from 'classnames';

import { MenuItemProps, MENU_ITEM_DISPLAY_NAME } from './menuItem';
import { SubMenuProps, SUB_MENU_DISPLAY_NAME } from './subMenu';

type MenuMode = 'horizontal' | 'vertical';
type SelectType = (selectedIndex: string) => void;
export interface MenuProps {
  defaultIndex?: string;
  defaultOpenSubMenus?: string[];
  mode?: MenuMode;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onSelect?: SelectType;
}
interface IMenuContext {
  index: string;
  onSelect?: SelectType;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

const MENU_CLS_PREFIX = 'puzzle-menu';

export const MenuContext = createContext<IMenuContext>({
  index: '0',
});

const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    defaultOpenSubMenus,
    mode,
    disabled,
    children,
    className,
    style,
    onSelect
  } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const classes = classnames(`${MENU_CLS_PREFIX}`, {
    [`${MENU_CLS_PREFIX}-v`]: mode === 'vertical',
    [`${MENU_CLS_PREFIX}-disabled`]: disabled,
  }, className);

  function handleClick(index: string) {
    setActiveIndex(index);
    if (typeof onSelect === 'function') {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: activeIndex ? activeIndex : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };

  const renderChildren = () => React.Children.map(children, (child, index) => {
    const childElement = child as FunctionComponentElement<MenuItemProps | SubMenuProps>;
    const { displayName } = childElement.type;

    if (displayName === MENU_ITEM_DISPLAY_NAME || displayName === SUB_MENU_DISPLAY_NAME) {
      return cloneElement(childElement, {
        index: `${index}`
      });
    }

    console.warn('Warning: Menu has a child element which is not a MenuItem Component');
  });

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
}

Menu.defaultProps = {
  defaultIndex: '0',
  defaultOpenSubMenus: [],
  mode: 'horizontal',
  disabled: false,
}

export default Menu;
