module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:jest/recommended",
    'standard',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    "jest"
  ],
  rules: {}
}
