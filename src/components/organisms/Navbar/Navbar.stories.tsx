import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '.';

const meta: Meta<typeof Navbar> = {
  title: 'Organisms/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
