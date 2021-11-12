import { render, fireEvent, waitFor } from '@testing-library/react';

import Alert from './alert';
import { AlertProps } from './interface';

const closeTestProps: AlertProps = {
  title: 'closable alert',
  onClose: jest.fn(),
  closable: true,
};

describe('Alert', () => {
  it('render default correctly', () => {
    const wrapper = render(<Alert title="default alert" />);
    const alertEle = wrapper.container.querySelector('.pr-alert');
    const textEle = wrapper.queryByText('default alert');

    expect(alertEle).toHaveClass('pr-alert pr-alert-info');
    expect(textEle).toBeInTheDocument();
    expect(textEle).toHaveClass('pr-alert-title');
  });

  it('closable is true', async () => {
    const wrapper = render(<Alert {...closeTestProps} />);
    const alertEle = wrapper.container.querySelector('.pr-alert');
    const iconEle = alertEle?.querySelector('.pr-icon') as HTMLDivElement;

    expect(iconEle).toBeInTheDocument();
    fireEvent.click(iconEle);
    expect(closeTestProps.onClose).toHaveBeenCalled();
    await waitFor(() => {
      expect(alertEle).not.toBeInTheDocument();
    })
  });

  it('showIcon is true and set type', () => {
    const wrapper = render(<Alert showIcon title="icon and type" type="success" />);
    const successAlertEle = wrapper.container.querySelector('.pr-alert-success');
    const iconEle = successAlertEle?.querySelector('.pr-alert-icon');

    expect(successAlertEle).toBeInTheDocument();
    expect(iconEle).toBeInTheDocument();
  });

  it('with content and bordered is true', () => {
    const wrapper = render(<Alert title="content and bordered" content="alert content" bordered />);
    const alertEle = wrapper.container.querySelector('.pr-alert');
    const contentEle = wrapper.queryByText('alert content');

    expect(alertEle).toHaveClass('pr-alert-bordered');
    expect(contentEle).toBeInTheDocument();
  });
});
