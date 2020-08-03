module.exports = {
  extends: [
    'plugin:@shopify/typescript',
    'plugin:@shopify/react',
    'plugin:@shopify/prettier',
    'plugin:@shopify/webpack',
    'plugin:@shopify/graphql',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/external-module-folders': ['node_modules', 'packages'],
  },
  rules: {
    'react/jsx-pascal-case': 0,
    '@shopify/jsx-prefer-fragment-wrappers': 0,
    'eslint-comments/no-unlimited-disable': 0,
  },
};
