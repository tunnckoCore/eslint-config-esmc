'use strict';

/**
 * @copyright 2018-present, Charlike Mike Reagent (https://tunnckocore.com)
 * @license Apache-2.0
 */

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'prettier/flowtype'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': ['error'],

    strict: 'off',

    // Enforce using named functions when regular function is used,
    // otherwise use arrow functions
    'func-names': ['error', 'always'],

    // Always use parens (for consistency).
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always', { requireForBlockBody: true }],

    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true, allowUnboundThis: true },
    ],

    // http://eslint.org/docs/rules/max-params
    'max-params': ['error', { max: 5 }],

    // http://eslint.org/docs/rules/max-statements
    'max-statements': ['error', { max: 25 }],

    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': ['error', { max: 1 }],

    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': ['error', { max: 5 }],

    // http://eslint.org/docs/rules/max-depth
    'max-depth': ['error', { max: 5 }],

    // enforces no braces where they can be omitted
    // https://eslint.org/docs/rules/arrow-body-style
    // Never enable for object literal.
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // Allow functions to be use before define because:
    // 1) they are hoisted,
    // 2) because ensure read flow is from top to bottom
    // 3) logically order of the code.
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],

    // Same as AirBnB, but adds `opts`, `options` and `err` to exclusions
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'err', // for adding to the Error instance
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'opts', // useful to ensure the params is always obect
          'options', // and when using Object.assign for shallow copy
          'x', // allow violating the rule in specific cases, instead of disabling it
        ],
      },
    ],
  },
};
