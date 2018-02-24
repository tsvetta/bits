module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': [2, {
      before: false,
      after: true,
    }],
    'comma-style': [2, 'last'],
    'quote-props': [ 2, 'as-needed', { keywords: false, unnecessary: true, numbers: false } ],
  },
};
