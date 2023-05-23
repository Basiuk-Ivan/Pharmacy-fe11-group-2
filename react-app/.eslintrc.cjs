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
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'no-param-reassign': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off'
  }
};
