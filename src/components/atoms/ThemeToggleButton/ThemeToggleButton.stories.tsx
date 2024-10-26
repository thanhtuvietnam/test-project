import type { Meta, StoryObj } from '@storybook/react';

import { ThemeToggleButton } from '.';

const meta: Meta<typeof ThemeToggleButton> = {
  title: 'Atoms/ThemeToggleButton',
  component: ThemeToggleButton,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default',
  },
  parameters: {
    handles: ['click'],
  },
};

export default meta;

type Story = StoryObj<typeof ThemeToggleButton>;

export const Default: Story = {};
