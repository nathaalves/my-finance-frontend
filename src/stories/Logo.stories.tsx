import { Meta, StoryObj } from '@storybook/react';
import { Logo, LogoProps } from '../components/Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  args: {
    children: 'Lorem ipsum...',
    fontSize: '6xl',
  },
  argTypes: {
    fontSize: {
      options: ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: { type: 'select' },
    },
  },
} as Meta<LogoProps>;

export const Default: StoryObj<LogoProps> = {};
