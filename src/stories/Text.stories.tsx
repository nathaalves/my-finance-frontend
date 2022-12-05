import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '../components/Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum...',
    fontSize: 'base',
  },
  argTypes: {
    fontSize: {
      options: ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
