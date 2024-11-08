import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  {
    ignores: [
      '**/.git/*',
      '**/.husky/*',
      '**/.next/*',
      '**/.plop/*',
      '**/node_modules/*',
      '**/public/*',
      '**/out/*',
      '**/coverage',
    ],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ),
  {
    languageOptions: {
      ecmaVersion: 17,

      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      sourceType: 'module',
    },

    plugins: {
      '@typescript-eslint': typescriptEslint,
      perfectionist,
      react,
      'testing-library': testingLibrary,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/no-unused-vars': [
        0,
        {
          argsIgnorePattern: '^_',
        },
      ],
      'newline-before-return': 2,
      'no-console': [
        2,
        {
          allow: ['warn', 'error'],
        },
      ],
      'perfectionist/sort-exports': [
        2,
        {
          groupKind: 'mixed',
          ignoreCase: true,
          matcher: 'minimatch',
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-imports': [2, { type: 'alphabetical' }],
      'perfectionist/sort-jsx-props': [
        2,
        {
          customGroups: { callback: 'on*' },
          groups: ['unknown', 'shorthand', 'multiline', 'callback'],
          ignoreCase: true,
          ignorePattern: [],
          matcher: 'minimatch',
          order: 'asc',
          specialCharacters: 'keep',
          type: 'line-length',
        },
      ],
      'perfectionist/sort-objects': [
        2,
        {
          customGroups: { bottom: '*_metadata', top: ['id', 'name'] },
          groups: ['top', 'unknown', 'bottom'],
          ignoreCase: true,
          ignorePattern: [],
          matcher: 'minimatch',
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: 'keep',
          styledComponents: true,
          type: 'alphabetical',
        },
      ],

      'react/prop-types': 0,

      'react/react-in-jsx-scope': 0,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  ...compat.extends('plugin:testing-library/react').map((config) => ({
    ...config,
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  })),
];

export default eslintConfig;
