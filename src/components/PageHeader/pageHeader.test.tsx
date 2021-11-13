import { render, screen, fireEvent } from '@testing-library/react';

import PageHeader, { PageHeaderProps } from './index';
import Button from '../Button';
// import Icon from '../Icon';

const defaultProps: PageHeaderProps = {
  onBack: jest.fn(),
};

const withTitleAndDescProps: PageHeaderProps = {
  title: 'HOME',
  description: 'header desc'
};

const withClassAndTitleModeProps: PageHeaderProps = {
  title: 'TITLE MODE',
  description: 'header desc',
  className: 'pr-page-header-test',
  titleMode: 'vertical'
};

const withExtraProps: PageHeaderProps = {
  extra: <Button label="Edit" size="small" btnType="primary" />
};

describe('PageHeader', () => {
  it('render default correctly', () => {
    const wrapper = render(<PageHeader {...defaultProps} />);
    const headerEle = wrapper.container.querySelector('.pr-page-header');
    const headerIconEle = headerEle?.querySelector('.pr-page-header-icon') as HTMLDivElement;
    
    expect(headerEle).toBeInTheDocument();
    fireEvent.click(headerIconEle);
    expect(defaultProps.onBack).toHaveBeenCalled();
  });

  it('with title and desc', () => {
    render(<PageHeader {...withTitleAndDescProps} />);
    const titleEle = screen.queryByText('HOME');
    const descEle = screen.queryByText('header desc');

    expect(titleEle).toBeInTheDocument();
    expect(titleEle).toHaveClass('pr-page-header-title');
    expect(descEle).toBeInTheDocument();
    expect(descEle).toHaveClass('pr-page-header-desc');
  });

  it('with className and titleMode', () => {
    const wrapper = render(<PageHeader {...withClassAndTitleModeProps} />);
    const headerEle = wrapper.container.querySelector('.pr-page-header-test');
    const infoEle = headerEle?.querySelector('.pr-page-header-info');

    expect(headerEle).toBeInTheDocument();
    expect(infoEle).toBeInTheDocument();
    expect(infoEle).toHaveClass('pr-page-header-v');
  });

  it('with extra', () => {
    render(<PageHeader {...withExtraProps} />);
    const btnEle = screen.queryByText('Edit');
    
    expect(btnEle).toBeInTheDocument();
  });
});
