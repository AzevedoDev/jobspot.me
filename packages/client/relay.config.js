const packages = ['client'];

module.exports = {
  watchman: false,
  src: '../.',
  schema: '../graphql/schema.graphql',
  language: 'typescript',
  include: [...packages.map(pkg => `./${pkg}/src/**`)],
};
