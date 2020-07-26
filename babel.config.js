const { workspaces = [] } = require('./package.json');

module.exports = {
  babelrcRoots: ['.', ...(workspaces.packages || workspaces)],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [],
};
