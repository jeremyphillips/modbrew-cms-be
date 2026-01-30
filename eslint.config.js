import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'

export default [
  {
    ignores: ['node_modules/**', 'dist/**']
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },

    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react
    },

    settings: {
      react: { version: 'detect' }
    },

    rules: {
      // TODO: custom rules
    }
  }
]
