module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 9,
    sourceType: 'module',
  },
};
