import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps }  from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      description: 'Set the content of button',
    },
    size: {
      options: ['small', 'middle', 'large'],
      control: {
        type: 'select'
      },
      description: 'Set the size of button'
    },
    btnType: {
      options: ['default', 'text', 'link', 'primary', 'danger', 'dashed', 'ghost'],
      control: {
        type: 'select'
      },
      description: 'Set the appearance of button'
    },
    shape: {
      options: ['round', 'circle'],
      control: {
        type: 'select',
      },
      description: 'Set the shape of button'
    },
    onClick: {
      action: 'clicked me'
    }
  },
  parameters: {
    info: {
      text: `
        ~~~ts
          <Button label="Submit" />
        ~~~
      `
    }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Simple = Template.bind({});

Simple.args = {
  ...Simple.args,
  label: 'I\'m a button',
};

export const withIcon = Template.bind({});

withIcon.args = {
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
