module.exports = {
  extends: ["airbnb"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  globals: {
    "document": true,
  },
  rules: {
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [2, {
      extensions: [".jsx", ".tsx"],
    }],
    'semi': [2, 'never'],
    'import/no-extraneous-dependencies': [2, {
      packageDir: './',
    }],
  },
}
