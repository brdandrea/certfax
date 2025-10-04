import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
  // keep ignoring React-style uppercase imports and underscore-prefixed vars,
  // also ignore the named import `motion` from framer-motion which is commonly
  // imported alongside `AnimatePresence` but not always used in every file.
  // The regex below matches any identifier starting with an uppercase letter
  // or underscore (e.g. React component imports like `Home`) OR the exact
  // identifier `motion`.
  'no-unused-vars': ['error', { varsIgnorePattern: '^(?:[A-Z_].*|motion)$' }],
    },
  },
])
