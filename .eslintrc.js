module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  plugins: [
    'jest',
  ],
  rules: {
    semi: [
      'error',
      'never',
    ],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  },
}
