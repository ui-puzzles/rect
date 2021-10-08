

import React, { FunctionComponentElement, useContext } from 'react';
import classnames from 'classnames';

import { MenuContext } from './menu';
import { MenuItemProps, MENU_ITEM_DISPLAY_NAME } from './menuItem';

const SUB_MENU_CLS_PREFIX = 'puzzle-sub-menu';

export const SUB_MENU_DISPLAY_NAME = 'SubMenu';
export interface SubMenuProps {
  index?: number;
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
  const classes = classnames(`${SUB_MENU_CLS_PREFIX}`, {
    [`${SUB_MENU_CLS_PREFIX}-active`]: context.index === index,
    [`${SUB_MENU_CLS_PREFIX}-disabled`]: disabled,
  }, className)

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childrenElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childrenElement.type;

      if (displayName !== MENU_ITEM_DISPLAY_NAME) {
        console.warn('Warning: Menu has a child element which is not a MenuItem Component');
        return;
      }

      return React.cloneElement(childrenElement, {
        index,
      });
    });

    return (
      <ul className={`${SUB_MENU_CLS_PREFIX}-item`}>
        {childrenComponent}
      </ul>
    );
  };

  return (
    <li key={index} className={classes}>
      <div className={`${SUB_MENU_CLS_PREFIX}-title`}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = SUB_MENU_DISPLAY_NAME;

SubMenu.defaultProps = {
  index: 0,
  disabled: false,
};

export default SubMenu ;
