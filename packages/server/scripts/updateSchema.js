import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

import { graphql } from 'graphql';
import { printSchema, getIntrospectionQuery } from 'graphql/utilities';

import schemaGraphql from '../src/graphql/schema';

const writeFileAsync = promisify(fs.writeFile);
const introspectionQuery = getIntrospectionQuery({ descriptions: true });

const generateSchema = async (schema, relativePath) => {
  const result = await graphql(schema, introspectionQuery);

  if (result.errors) {
    // eslint-disable-next-line
    console.error('ERROR introspecting schema: ', JSON.stringify(result.errors, null, 2));
  } else {
    console.log('Schema was successfully instrospected');
    await writeFileAsync(
      path.join(__dirname, `${relativePath}/schema.json`),
      JSON.stringify(result, null, 2),
    );
  }
};

(async () => {
  const configs = [
    {
      schema: schemaGraphql,
      path: '../schemas/graphql',
    },
  ];

  await Promise.all([
    ...configs.map(async config => {
      await generateSchema(config.schema, config.path);
    }),
    ...configs.map(async config => {
      await writeFileAsync(
        path.join(__dirname, `${config.path}/schema.graphql`),
        printSchema(config.schema),
      );
    }),
  ]);

  process.exit(0);
})();
