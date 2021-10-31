import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonProps }  from './index';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Type = Template.bind({});

Type.args = {
  ...Type.args,
  label: 'primary',
  onClick: action('clicked me')
};

export const Size = Template.bind({});

Size.args = {
  btnType: 'primary',
  size: 'middle',
  label: 'size',
};

export const Shape = Template.bind({});

Shape.args = {
  shape: 'round',
  label: 'shape',
};

export const buttonIcon = Template.bind({});

buttonIcon.args = {
  icon: 'thumbs-up',
  btnType:'primary',
  label: 'with Icon',
};

export const Loading = Template.bind({});

Loading.args = {
  loading: true,
  btnType: 'primary',
  label: 'Loading',
};
