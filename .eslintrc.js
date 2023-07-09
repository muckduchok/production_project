module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:i18next/recommended'
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next'
  ],
  rules: {
    'import/no-unresolved': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/extenstions': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'i18next/no-literal-string': ['error', {markupOnly: true, ignoreAttribute: ['to']}]
  },
  globals: {
    __IS_DEV__: true
  }
}