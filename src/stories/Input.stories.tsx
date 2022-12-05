import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    label: 'Lorem ipsum...',
    value: 'Lorem ipsum...',
    type: 'text',
    icon: 'MdEmail',
    disabled: false,
  },
  argTypes: {
    type: {
      options: ['text', 'password', 'email'],
      control: { type: 'select' },
    },
    icon: {
      options: ['MdEmail', 'MdLock', 'MdLockOpen', 'MdPerson'],
      control: { type: 'select' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};
