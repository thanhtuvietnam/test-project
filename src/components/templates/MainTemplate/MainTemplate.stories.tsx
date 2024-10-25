import type { Meta, StoryObj } from '@storybook/react';

import { MainTemplate } from '.';

const meta: Meta<typeof MainTemplate> = {
  title: 'Templates/MainTemplate',
  component: MainTemplate,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof MainTemplate>;

export const Default: Story = {};
