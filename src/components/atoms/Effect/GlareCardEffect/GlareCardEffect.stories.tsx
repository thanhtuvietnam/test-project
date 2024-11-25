import type { Meta, StoryObj } from '@storybook/react';

import { GlareCardEffect } from '.';

const meta: Meta<typeof GlareCardEffect> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: GlareCardEffect,
  tags: ['autodocs'],
  title: 'Atoms/GlareCardEffect',
};

export default meta;

type Story = StoryObj<typeof GlareCardEffect>;

export const Default: Story = {};
