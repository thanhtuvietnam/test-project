import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';

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
    'plugin:storybook/recommended',
  ),
  ...pluginQuery.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2021,
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
        project: './tsconfig.json',
      },
      sourceType: 'module',
    },

    plugins: {
      '@typescript-eslint': typescriptEslint,
      perfectionist,
      react,
      'testing-library': testingLibrary,
      '@tanstack/query': pluginQuery,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': [
        1,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 1,
      'newline-before-return': 2,
      'no-console': [
        1,
        {
          allow: ['warn', 'error'],
        },
      ],
      'perfectionist/sort-exports': [
        2,
        {
          groupKind: 'mixed',
          ignoreCase: true,
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: 'keep',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-imports': [
        2,
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          newlinesBetween: 'always',
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      // 'perfectionist/sort-jsx-props': [
      //   2,
      //   {
      //     customGroups: { callback: 'on*' },
      //     groups: ['unknown', 'shorthand', 'multiline', 'callback'],
      //     ignoreCase: true,
      //     ignorePattern: [],
      //     order: 'asc',
      //     specialCharacters: 'keep',
      //     type: 'line-length',
      //   },
      // ],
      // 'perfectionist/sort-objects': [
      //   2,
      //   {
      //     customGroups: {
      //       bottom: '^.*_metadata$',
      //       top: ['id', 'name'],
      //     },
      //     groups: ['top', 'unknown', 'bottom'],
      //     ignoreCase: true,
      //     ignorePattern: [],
      //     order: 'asc',
      //     partitionByComment: false,
      //     partitionByNewLine: false,
      //     specialCharacters: 'keep',
      //     styledComponents: true,
      //     type: 'alphabetical',
      //   },
      // ],
      'react/jsx-uses-react': 0,
      'react/jsx-uses-vars': 2,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'testing-library/no-debugging-utils': 1,
      'testing-library/no-dom-import': [2, 'react'],
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
