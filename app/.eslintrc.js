module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: { React: true },
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // 'react/react-in-jsx-scope': 'off',
  },
};
