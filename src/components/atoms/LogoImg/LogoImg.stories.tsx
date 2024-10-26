import type { Meta, StoryObj } from '@storybook/react';

import { LogoImg } from '.';

const meta: Meta<typeof LogoImg> = {
  title: 'Atoms/LogoImg',
  component: LogoImg,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof LogoImg>;

export const Default: Story = {};
