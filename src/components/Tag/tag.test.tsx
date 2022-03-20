// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';
import Tag, { TagProps } from './index';
import { Icon } from '../../index';

const iconAndCloseableProps: TagProps = {
  icon: <Icon icon="bell" />,
  closable: true,
  onClose: jest.fn(),
};

describe('Tag', () => {
  it('render default correctly', () => {
    render(<Tag>default</Tag>);
    const tagEle = screen.queryByText('default');
    expect(tagEle).toBeInTheDocument();
    expect(tagEle).toHaveClass('pr-tag');
  });

  it('render with various size', () => {
    render(<Tag size="sm">small</Tag>);
    const tagEle = screen.queryByText('small');
    expect(tagEle).toHaveClass('pr-tag-sm');
  });

  it('render with bordered and selectable', () => {
    render(
      <Tag bordered selectable>
        bordered and selectable
      </Tag>
    );
    const tagEle = screen.queryByText('bordered and selectable');
    expect(tagEle).toHaveClass('pr-tag-bordered');
    expect(tagEle).toHaveClass('pr-tag-selectable');

    fireEvent.click(tagEle);
    expect(tagEle).toHaveClass('pr-tag-selected');
  });

  it('render with icon and closeable', () => {
    render(<Tag {...iconAndCloseableProps}>bordered and selectable</Tag>);
    const tagEle = screen.queryByText('bordered and selectable');
    const iconEle = tagEle.querySelector('.pr-tag-icon');
    const iconCloseEle = tagEle.querySelector('.pr-tag-icon-close');

    expect(iconEle).toBeInTheDocument();
    expect(iconCloseEle).toBeInTheDocument();
    fireEvent.click(iconCloseEle, () => {
      expect(iconAndCloseableProps.onClose).toBeCalled();
      expect(tagEle).not.toBeInTheDocument();
    });
  });
});
