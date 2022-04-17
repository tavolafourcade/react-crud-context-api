module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
      blockBindings: true,
      defaultParams: true,
      destructuring: true,
      forOf: true,
      generators: true,
      objectLiteralComputedProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      experimentalObjectRestSpread: true,
      restParams: true,
      spread: true,
      templateStrings: true,
      modules: true,
      classes: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
  },
}
