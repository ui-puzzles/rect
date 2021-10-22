

import React, { FunctionComponentElement, useContext, useState } from 'react';
import classnames from 'classnames';

import Transition from '../Transition/transition';
import { MenuContext } from './menu';
import { MenuItemProps, MENU_ITEM_DISPLAY_NAME } from './menuItem';
import Icon from '../Icon/icon';

const SUB_MENU_CLS_PREFIX = 'puzzle-menu-sub';

export const SUB_MENU_DISPLAY_NAME = 'SubMenu';
export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  disabled?: boolean;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const {
    index,
    title,
    className,
    disabled,
    children
  } = props;
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;
  const [menuDisplay, setMenuDisplay] = useState(isOpened);
  const classes = classnames(`${SUB_MENU_CLS_PREFIX}`, {
    [`${SUB_MENU_CLS_PREFIX}-active`]: context.index === index,
    [`${SUB_MENU_CLS_PREFIX}-disabled`]: disabled,
    [`${SUB_MENU_CLS_PREFIX}-opened`]: menuDisplay,
  }, className);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let timer: any;

  function handleClickMenu(e: React.MouseEvent) {
    e.preventDefault();
    setMenuDisplay(!menuDisplay);
  }

  function handleHoverMenu(e: React.MouseEvent, toggle: boolean) {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuDisplay(toggle);
    }, 300);
  }

  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClickMenu,
  } : {};
  const mouseEvents = context.mode === 'horizontal' ? {
    onMouseEnter: (e: React.MouseEvent) => handleHoverMenu(e, true),
    onMouseLeave: (e: React.MouseEvent) => handleHoverMenu(e, false),
  } : {};

  const renderChildren = () => {
    const subMenuClasses = classnames(`${SUB_MENU_CLS_PREFIX}-item`);

    const childrenComponent = React.Children.map(children, (child, subIndex) => {
      const childrenElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childrenElement.type;

      if (displayName !== MENU_ITEM_DISPLAY_NAME) {
        console.warn('Warning: Menu has a child element which is not a MenuItem Component');
        return;
      }

      return React.cloneElement(childrenElement, {
        index: `${index}-${subIndex}`,
      });
    });

    return (
      <Transition
        in={menuDisplay}
        timeout={300}
        animation="zoom-in-top"
      >
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
      </Transition>
    );
  };

  return (
    <li key={index} className={classes} {...mouseEvents}>
      <div className={`${SUB_MENU_CLS_PREFIX}-title`} {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="puzzle-icon-angle-down" />
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = SUB_MENU_DISPLAY_NAME;

SubMenu.defaultProps = {
  index: '0',
  disabled: false,
};

export default SubMenu ;
