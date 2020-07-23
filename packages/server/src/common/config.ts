import path from 'path';

import dotenvSafe from 'dotenv-safe';
import envVar from 'env-var';

const cwd = process.cwd();
const root = path.join.bind(cwd);

dotenvSafe.config({
  allowEmptyValues: false,
  path: root('.env'),
  sample: root('.env.example'),
});

export const MONGO_URL = envVar.get('MONGO_URL').required().asString();
