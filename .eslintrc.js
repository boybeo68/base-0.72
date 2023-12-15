module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'warn',
        'react/no-unstable-nested-components': 'off',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
      },
    },
  ],
}
