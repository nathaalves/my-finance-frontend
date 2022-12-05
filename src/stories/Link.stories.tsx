import { Meta, StoryObj } from '@storybook/react';
import { Link, LinkProps } from '../components/Link';

export default {
  title: 'Components/Link',
  component: Link,
  args: {
    children: 'Lorem ipsum...',
    fontSize: 'base',
  },
  argTypes: {
    fontSize: {
      options: ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'select' },
    },
  },
} as Meta<LinkProps>;

export const Default: StoryObj<LinkProps> = {};
