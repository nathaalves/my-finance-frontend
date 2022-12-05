import { Meta, StoryObj } from '@storybook/react';
import { FormFrame, FormFrameProps } from '../components/FormFrame';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default {
  title: 'Components/FormFrame',
  component: FormFrame,
  args: {
    children: [
      <Input label="e-mail" icon="MdEmail" value="teste@teste.com" />,
      <Input label="senha" icon="MdLock" value="123456" />,
      <Button>Entrar</Button>,
    ],
  },
} as Meta<FormFrameProps>;

export const Default: StoryObj<FormFrameProps> = {};
