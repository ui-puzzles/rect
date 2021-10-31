import { FC } from 'react';
import Menu, { MenuProps } from './menu';
import SubMenu, { SubMenuProps } from './subMenu';
import MenuItem, { MenuItemProps } from './menuItem';

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
}

const MenuComponent = Menu as IMenuComponent;

MenuComponent.Item = MenuItem;
MenuComponent.SubMenu = SubMenu;

export type {
  MenuProps,
  SubMenuProps,
  MenuItemProps
};

export default MenuComponent;
