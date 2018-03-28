module.exports = {
  'env': {
    browser: true,
    es6: true,
    node: true,
  },
  'parserOptions': {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  'plugins': [
    'react',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': [2, {
      before: false,
      after: true,
    }],
    'comma-style': [2, 'last'],
    'quote-props': [2, 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    /**
     * Variables
     */
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-unused-vars': [2, {
      'vars': 'local',
      'args': 'after-used'
    }],
    'no-use-before-define': 2,

    /**
     * React
     */
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-handler-names': [2, {
      'eventHandlerPrefix': 'handle',
      'eventHandlerPropPrefix': 'on'
    }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-tag-spacing': [2, {
      'beforeSelfClosing': 'always',
    }],
    'react/jsx-uses-vars': 2,
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-wrap-multilines': [2, {
      'declaration': true,
      'assignment': true,
      'return': true
    }],

    /**
     * Style
     */
    'semi': [2, 'always'],
  },
};
