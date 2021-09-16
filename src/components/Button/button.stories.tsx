import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonProps }  from './button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {}
} as Meta;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >Button</Button>

export const Default: React.VFC<ButtonProps> = () => <Button onClick={action('clicked')}>Default Button</Button>;

export const Primary: React.VFC<ButtonProps> = () => <Button btnType="primary" onClick={action('clicked')}>Primary Button</Button>;

export const Size: React.VFC<ButtonProps> = () => (
  <>
    <Button size="large" onClick={action('clicked')}>Large Button</Button>
    <Button size="middle" onClick={action('clicked')}>Middle Button</Button>
    <Button size="small" onClick={action('clicked')}>Small Button</Button>
  </>
);

