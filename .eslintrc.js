module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  globals: {
    document: true,
  },
  rules: {
    'prettier/prettier': 2,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    semi: [2, 'never'],
    'import/no-extraneous-dependencies': [
      2,
      {
        packageDir: './',
      },
    ],
  },
}
