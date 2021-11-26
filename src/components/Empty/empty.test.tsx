import { render } from '@testing-library/react';

import Empty from './empty';

describe('Empty', () => {
  it('render default correctly', () => {
    const wrapper = render(<Empty />);
    const emptyElem = wrapper.container.querySelector('.pr-empty');
    const imageElem = emptyElem?.querySelector('.pr-empty-img');
    const descElem = wrapper.queryByText('No Data');

    expect(emptyElem).toBeInTheDocument();
    expect(imageElem?.querySelectorAll(':scope > svg').length).toEqual(1);
    expect(descElem).toBeInTheDocument();
    expect(descElem).toHaveClass('pr-empty-desc');
  });

  it('with description', () => {
    const wrapper = render(<Empty description="test empty" />);
    const descElem = wrapper.queryByText('test empty');

    expect(descElem).toBeInTheDocument()
  });

  it('with image', () => {
    const wrapper = render(<Empty image={<img src="https://cdn.fujia.site/banner-1.jpg" />} />);
    const emptyElem = wrapper.container.querySelector('.pr-empty');
    const imageElem = emptyElem?.querySelector('.pr-empty-img');

    expect(imageElem?.querySelectorAll(':scope > img').length).toEqual(1);
  });
});
