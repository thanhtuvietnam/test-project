import pluginJs from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import pluginQuery from '@tanstack/eslint-plugin-query';
// import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHook from 'eslint-plugin-react-hooks';
import pluginTailwind from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: 'eslintConfig',
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      '.git',
      '.husky',
      '.jest',
      '.next',
      '.plop',
      '.vscode',
      'node_modules',
      'public',
      '**/.yaml',
      // '**/.config.ts',
      // '**/.config.mjs',
      // '**/.setup.js',
    ],
  },

  {
    plugins: {
      '@next/next': pluginNext,
      'react-hooks': pluginReactHook,
      'prettier/prettier': pluginPrettier,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      ...pluginReactHook.configs.recommended.rules,
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...pluginTailwind.configs['flat/recommended'],
  // pluginJsxA11y.flatConfigs.recommended,
  ...pluginQuery.configs['flat/recommended'],

  {
    rules: {
      '@typescript-eslint/no-unused-vars': 1,
      '@typescript-eslint/no-explicit-any': 1,
      'no-console': 1,

      'react/react-in-jsx-scope': 0,
      'react/prop-types': 0,
      // 'no-undef': 1,
    },
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        // These are the default values but feel free to customize
        callees: ['classnames', 'clsx', 'ctl'],
        config: 'tailwind.config.js', // returned from `loadConfig()` utility if not provided
        cssFiles: [
          '**/*.css',
          '!**/node_modules',
          '!**/.*',
          '!**/dist',
          '!**/build',
        ],
        cssFilesRefreshRate: 5_000,
        removeDuplicates: true,
        skipClassAttribute: false,
        whitelist: [],
        tags: [], // can be set to e.g. ['tw'] for use in tw`bg-blue`
        classRegex: '^class(Name)?$', // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
      },
    },
  },
  // perfectionist.configs['recommended-line-length'],
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
    },
  },
];
