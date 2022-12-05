import { Meta, StoryObj } from '@storybook/react';
import { DynamicIcon, DynamicIconProps } from '../components/DynamicIcon';

export default {
  title: 'Components/DynamicIcon',
  component: DynamicIcon,
  args: {
    name: 'MdAdd',
  },
  argTypes: {
    name: {
      options: [
        'MdAdd',
        'MdRemove',
        'MdEdit',
        'MdDelete',
        'MdSearch',
        'MdClose',
        'MdArrowBack',
        'MdArrowForward',
      ],
      control: { type: 'select' },
    },
  },
} as Meta<DynamicIconProps>;

export const Default: StoryObj<DynamicIconProps> = {};
