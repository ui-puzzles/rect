import { render, RenderResult, fireEvent, cleanup, waitFor } from '@testing-library/react';

import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

const defaultProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
};
const verticalProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
};
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={'0'}>
        active
      </MenuItem>
      <MenuItem index={'1'} disabled>
        disabled
      </MenuItem>
      <MenuItem index={'2'}>
        default
      </MenuItem>
      <SubMenu title="dropdown title">
        <MenuItem>item one</MenuItem>
      </SubMenu>
    </Menu>
  );
};

const createStyleEle = () => {
  const cssRules = `
    .puzzle-menu-sub-item {
      display: none;
    }
    .puzzle-menu-sub-display {
      display: block;
    }
  `;

  const style = document.createElement('style');
  // HTMLStyleElement.type is deprecated. [See this](https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/type)
  // style.type = 'text/css';
  style.innerHTML = cssRules;
  return style;
};

let wrapper: RenderResult,
    menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement;

describe('test Menu and MenuItem component in default(horizontal) mode', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(defaultProps));
    wrapper.container.append(createStyleEle());
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });

  it('it should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('puzzle-menu test');
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4);
    expect(activeElement).toHaveClass('puzzle-menu-item puzzle-menu-item-active');
    expect(disabledElement).toHaveClass('puzzle-menu-item puzzle-menu-item-disabled');
  });

  it('click item should change active and call the callback correctly', () => {
    const defaultItem = wrapper.getByText('default');
    fireEvent.click(defaultItem);
    expect(defaultItem).toHaveClass('puzzle-menu-item-active');
    expect(activeElement).not.toHaveClass('puzzle-menu-item-active');
    expect(defaultProps.onSelect).toHaveBeenCalledWith('2');
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('puzzle-menu-item-active');
    expect(defaultProps.onSelect).not.toHaveBeenCalledWith('1');
  });

  it('it should render in vertical mode when the value of mode is vertical', () => {
    cleanup();
    wrapper = render(generateMenu(verticalProps));
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');

    expect(menuElement).toHaveClass('puzzle-menu puzzle-menu-v');
  });

  it('it should dropdown items when hover on submenu element', async () => {
    expect(wrapper.queryByText('item one')).not.toBeVisible();
    const subMenuTitleEle = wrapper.getByText('dropdown title');
    fireEvent.mouseEnter(subMenuTitleEle);
    await waitFor(() => {
      expect(wrapper.queryByText('item one')).toBeVisible();
    });

    fireEvent.click(wrapper.getByText('item one'));
    expect(defaultProps.onSelect).toHaveBeenCalledWith('3-0');

    fireEvent.mouseLeave(subMenuTitleEle);

    await waitFor(() => {
      expect(wrapper.getByText('item one')).not.toBeVisible();
    });
  });
})
