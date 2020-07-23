import Koa, { Context } from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import cors from '@koa/cors';

import schema from './graphql/schema';
import { getDataloaders } from './loader/helper';
import loaders from './loader';

const serverSettings = async (req: Koa.Request) => {
  // const token = req.headers.authorization;
  // const user = await getUserFromToken(token);

  return {
    graphiql: process.env.NODE_ENV !== 'production',
    schema,
    context: {
      dataloaders: getDataloaders(loaders),
    },
  };
};

const graphqlServer = graphqlHTTP(serverSettings);

const server = new Koa<any, Context>();

server.use(cors());

server.on('error', err => {
  // eslint-disable-next-line no-console
  console.log('Server error', err);
});

server.use(mount('/graphql', graphqlServer));

export default server;
