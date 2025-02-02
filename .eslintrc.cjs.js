module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-typescript', // Utilise la config Airbnb pour TypeScript
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json', // Nécessaire pour eslint-config-airbnb-typescript
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
