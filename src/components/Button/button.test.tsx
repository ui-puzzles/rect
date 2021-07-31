import { render } from '@testing-library/react';

import Button from './button';

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Default Button</Button>)
    // NOTE: queryByText vs. getByText
    const element = wrapper.getByText('Default Button')

    expect(element).toBeInTheDocument()

    // NOTE: the tagName is uppercase
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('puzzle-btn puzzle-btn-default')
  });

  it('should render the correct component based on different props', () => {
    
  });
  
  it('should render a link when type equal link and href is provided', () => {
    
  });
  
  it('should render a disabled button when the property of disabled set to true', () => {
    
  });
  
})