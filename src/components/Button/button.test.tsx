import React from 'react';
import { render } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Default Button</Button>);

    const btnEle = wrapper.getByTestId('test-btn');
    // NOTE: queryByText vs. getByText
    const labeEle = wrapper.getByText('Default Button');

    expect(labeEle).toBeInTheDocument();

    // NOTE: the tagName is uppercase
    expect(labeEle.tagName).toEqual('SPAN');
    expect(btnEle).toHaveClass('pr-btn');
  });

  it('should render the correct component based on different props', () => {
    
  });
  
  it('should render a link when type equal link and href is provided', () => {
    
  });
  
  it('should render a disabled button when the property of disabled set to true', () => {
    
  });
})