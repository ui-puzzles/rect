import { render, fireEvent } from '@testing-library/react';

import Avatar, { AvatarProps } from './index';
import Icon from '../Icon';

const defaultProps: AvatarProps = {
  onClick: jest.fn(),
};

describe('Avatar', () => {
  it('render default correctly', () => {
    const wrapper = render(<Avatar {...defaultProps}>Sunny</Avatar>);
    const avatarEle = wrapper.container.querySelector('.pr-avatar') as HTMLDivElement;
    const textEle = wrapper.queryByText('Sunny');

    expect(avatarEle).toBeInTheDocument();
    expect(textEle).toBeInTheDocument();
    expect(textEle).toHaveClass('pr-avatar-text');
    fireEvent.click(avatarEle);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('set shape property to "square"', () => {
    const wrapper = render(<Avatar shape="square">Sunny</Avatar>);
    const avatarEle = wrapper.container.querySelector('.pr-avatar');

    expect(avatarEle).toBeInTheDocument();
    expect(avatarEle).toHaveClass('pr-avatar-square');
  });

  it('children are icon', () => {
    const wrapper = render(<Avatar><Icon icon="undo-alt" /></Avatar>);
    const avatarEle = wrapper.container.querySelector('.pr-avatar');
    const iconEle = avatarEle?.querySelector('.pr-icon');

    expect(iconEle).toBeInTheDocument();
  });

  it('children are image', () => {
    const wrapper = render(<Avatar>
      <img alt="avatar image" src="https://images-1254102905.cos.ap-shanghai.myqcloud.com/articles/Reactjs_logo.png" />
    </Avatar>);
    const avatarEle = wrapper.container.querySelector('.pr-avatar');
    const imgWrapperEle = avatarEle?.querySelector('.pr-avatar-image');
    const imgEle = wrapper.queryByAltText('avatar image');

    expect(imgWrapperEle).toBeInTheDocument();
    expect(imgEle).toBeInTheDocument();
  });

  it('custom extra and set extraType property to "mask', () => {
    const wrapper = render(<Avatar extraType="mask" extra={<Icon icon="undo-alt" />}>
      <img alt="avatar image" src="https://images-1254102905.cos.ap-shanghai.myqcloud.com/articles/Reactjs_logo.png" />
    </Avatar>);
    const avatarEle = wrapper.container.querySelector('.pr-avatar');
    const extraEle = avatarEle?.querySelector('.pr-avatar-extra');

    expect(avatarEle).toHaveClass('pr-avatar-with-mask');
    expect(extraEle).toBeInTheDocument();
  });
});
