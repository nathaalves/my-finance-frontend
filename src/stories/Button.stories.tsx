import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Lorem ipsum...',
    isActive: true,
  },
  argTypes: {
    isActive: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
