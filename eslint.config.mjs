import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    plugins: {
      react,
      'react-hooks': reactHooks,
      'unused-imports': unusedImports,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // React
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'react/react-in-jsx-scope': 'off',

      // Imports
      '@typescript-eslint/no-unused-vars': 'off',

      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Less noise
      'no-empty': 'warn',
      'no-case-declarations': 'off',
    },
  },

  // Node configs
  {
    files: [
      '**/*.config.js',
      '**/*.config.cjs',
      '**/*.config.mjs',
      '**/metro.config.js',
      '**/babel.config.js',
    ],

    languageOptions: {
      globals: {
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
      },
    },

    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },
  {
    files: ['apps/mobile/**/*.{js,jsx,ts,tsx}', 'apps/**/*.config.*'],

    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },

    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
  // Ignore generated files
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/.turbo/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/android/**',
      '**/ios/**',
    ],
  },
];
