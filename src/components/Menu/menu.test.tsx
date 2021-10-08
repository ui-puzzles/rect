import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react';

import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';

const defaultProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
};
const verticalProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
};
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>
        active
      </MenuItem>
      <MenuItem index={1} disabled>
        disabled
      </MenuItem>
      <MenuItem index={2}>
        default
      </MenuItem>
    </Menu>
  );
};

let wrapper: RenderResult,
    menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement;

describe('test Menu and MenuItem component in default(horizontal) mode', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(defaultProps));
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });

  it('it should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('puzzle-menu test');
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(3);
    expect(activeElement).toHaveClass('puzzle-menu-item puzzle-menu-item-active');
    expect(disabledElement).toHaveClass('puzzle-menu-item puzzle-menu-item-disabled');
  });

  it('click item should change active and call the callback correctly', () => {
    const defaultItem = wrapper.getByText('default');
    fireEvent.click(defaultItem);
    expect(defaultItem).toHaveClass('puzzle-menu-item-active');
    expect(activeElement).not.toHaveClass('puzzle-menu-item-active');
    expect(defaultProps.onSelect).toHaveBeenCalledWith(2);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('puzzle-menu-item-active');
    expect(defaultProps.onSelect).not.toHaveBeenCalledWith(1);
  });

  it('it should render in vertical mode when the value of mode is vertical', () => {
    cleanup();
    wrapper = render(generateMenu(verticalProps));
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');

    expect(menuElement).toHaveClass('puzzle-menu puzzle-menu-v');

  })
})
