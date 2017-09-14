module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  globals: {
    moment: true,
    google: true
  },
  rules: {
    //References
    'no-var': ['error'],
    'prefer-const': ['error'],

    // Objects
    'object-shorthand': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],

    // Arrays
    'array-callback-return': ['error'],

    // Strings
    'no-eval': ['error'],
    'no-useless-escape': ['error'],
    'prefer-template': ['error'],
    quotes: ['error', 'single'],
    'template-curly-spacing': ['error', 'never'],

    // Functions
    'no-loop-func': ['error'],
    'no-param-reassign': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],

    // Arrow functions
    'no-confusing-arrow': ['error', { allowParens: true }],

    // Whitespace
    'array-bracket-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    indent: ['error', 2],
    'keyword-spacing': ['error', { before: true, after: true }],
    'max-len': ['warn', 100, { ignoreUrls: true }],
    'newline-per-chained-call': ['error'],
    'no-whitespace-before-property': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],

    // Semicolons
    semi: ['error', 'always']
  }
};
