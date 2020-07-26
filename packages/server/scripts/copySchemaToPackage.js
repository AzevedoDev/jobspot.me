import fs from 'fs';

const GRAPHQL_SCHEMA_FILE = './schemas/graphql/schema.graphql';
const DESTINATION = '../graphql';

const copySchemaToPackage = (schemaFolderSrc, schemaFileDest) => {
  try {
    fs.copyFileSync(schemaFolderSrc, schemaFileDest);
    // eslint-disable-next-line
    console.info(`Schema successfully copied to: ${schemaFileDest}`);
  } catch (error) {
    // eslint-disable-next-line
    console.error(`Error while trying to copy schema to: ${schemaFileDest}`, error);
  }
};

const runScript = () => {
  // web, app
  copySchemaToPackage(GRAPHQL_SCHEMA_FILE, `${DESTINATION}/schema.graphql`);
};

(() => {
  runScript();
})();
