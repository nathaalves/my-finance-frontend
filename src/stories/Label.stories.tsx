import { Meta, StoryObj } from '@storybook/react';
import { Label, LabelProps } from '../components/Label';

export default {
  title: 'Components/Label',
  component: Label,
  args: {
    children: 'Lorem ipsum...',
    fontSize: 'sm',
  },
  argTypes: {
    fontSize: {
      options: ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'select' },
    },
  },
} as Meta<LabelProps>;

export const Default: StoryObj<LabelProps> = {};
