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

export const PORT = envVar.get('PORT').required().asPortNumber();
export const MONGO_URL = envVar.get('MONGO_URL').required().asString();
export const SECRET = envVar.get('SECRET').required().asString();
