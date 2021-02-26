module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['eslint-plugin-html', 'prettier'],
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': 'error',
  },
}
