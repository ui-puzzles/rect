import { render, screen } from '@testing-library/react';
import Divider from './divider';

describe('Divider', () => {
  it('render default correctly', () => {
    render(<Divider />);
    const ele = screen.queryByTestId('test-divider');
    expect(ele).toBeInTheDocument();
    expect(ele).toHaveClass('pr-divider pr-divider-h')
  });

  it('render with dashed', () => {
    render(<Divider dashed />);
    const ele = screen.queryByTestId('test-divider');
    expect(ele).toHaveClass('pr-divider pr-divider-h pr-divider-dashed')
  });

  it('render with text', () => {
    render(<Divider>divider text</Divider>);
    const wrapper = screen.queryByTestId('test-divider');
    const innerTextEle = screen.queryByText('divider text');
    expect(wrapper).toHaveClass('pr-divider pr-divider-h pr-divider-with-text');
    expect(innerTextEle).toBeInTheDocument();
    expect(innerTextEle).toHaveClass('pr-divider-text');
  });

  it('render in vertical mode', () => {
    render(<Divider mode="vertical">divider text</Divider>);
    const wrapper = screen.queryByTestId('test-divider');
    const innerTextEle = screen.queryByText('divider text');
    expect(wrapper).toHaveClass('pr-divider pr-divider-v');
    expect(wrapper).not.toHaveClass('pr-divider-with-text');
    expect(innerTextEle).not.toBeInTheDocument();
  });
});
