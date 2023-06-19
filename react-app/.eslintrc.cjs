module.exports = {
  env: { browser: true, es2020: true, 'jest/globals': true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'prettier', 'jest'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'arrow-body-style': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-wrap-multilines': 'off',
    'function-paren-newline': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'operator-linebreak': 'off',
    'react/jsx-no-bind': 'off',
    'consistent-return': 'off',
    'max-len': ['error', { code: 710 }],
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
        unnamedComponents: ['function-expression', 'arrow-function']
      }
    ],
    'no-param-reassign': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off'
  }
};
