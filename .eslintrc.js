module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  plugins: [
  ],
  rules: {
    semi: [
      'error',
      'never',
    ],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  },
}
