import { render, fireEvent, waitFor } from '@testing-library/react';

import Image, { DEFAULT_PREFIX_CLS } from './image';
import { ImageProps } from './interface';

const defaultProps: ImageProps = {
  src: 'https://images-1254102905.cos.ap-shanghai.myqcloud.com/articles/boy-ocean.png',
  onClick: jest.fn(),
};
const errorProps: ImageProps = {
  src: 'https://example.com/error.png',
  className: 'pr-image-test',
  fallback: 'https://images-1254102905.cos.ap-shanghai.myqcloud.com/articles%2Fbreak.svg',
  alt: 'test-alt',
  onError: jest.fn(),
};

describe('Image', () => {
  it('render default correctly', () => {
    const wrapper = render(<Image {...defaultProps} />);

    const imageEle = wrapper.container.querySelector(`.${DEFAULT_PREFIX_CLS}`);
    const imgWrapperEle = wrapper.container.querySelector(`.${DEFAULT_PREFIX_CLS}-wrapper`);
    const imgEle = wrapper.container.querySelector(`.${DEFAULT_PREFIX_CLS}-img`);

    expect(imageEle).toBeInTheDocument();
    expect(imgWrapperEle).toBeInTheDocument();
    expect(imgEle).toBeInTheDocument();
    fireEvent.click(imgEle);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('render correctly when img loaded error', async () => {
    const wrapper = render(<Image {...errorProps} />);

    const imageEle = wrapper.container.querySelector(`.${DEFAULT_PREFIX_CLS}`);
    const imgWrapperEle = wrapper.container.querySelector(`.${DEFAULT_PREFIX_CLS}-wrapper`);
    const imgEle = wrapper.queryByAltText('test-alt');

    expect(imageEle).toBeInTheDocument();
    expect(imageEle).toHaveClass('pr-image-test');

    expect(imgWrapperEle).toBeInTheDocument();
    expect(imgWrapperEle).toHaveClass(`${DEFAULT_PREFIX_CLS}-loading`);

    expect(imgEle).toBeInTheDocument();

    fireEvent.error(imgEle, () => {
      const altEle = wrapper.findByText('test-alt');

      expect(altEle).toBeInTheDocument();
      expect(imgWrapperEle).toHaveClass(`${DEFAULT_PREFIX_CLS}-error`);
    });
  });
});
