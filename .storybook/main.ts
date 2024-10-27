import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.tsx',
  ],
};
export default config;
