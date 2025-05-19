import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  // Next + TypeScript presets
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // ──────────────────────────
  // custom rules
  // ──────────────────────────
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: ['@typescript-eslint'],
    rules: {
      // disallow `any` everywhere
      '@typescript-eslint/no-explicit-any': 'error',
      // optional: also disallow `{} | object`
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            '{}': false, // keep `{}` if you still need it
            object: false,
          },
        },
      ],
    },
  },
];

export default eslintConfig;
