import Koa from 'koa';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import cors from '@koa/cors';

import schema from './graphql/schema';

const serverSettings = async (req: Koa.Request) => {
  // const token = req.headers.authorization;
  // const user = await getUserFromToken(token);

  return {
    graphiql: process.env.NODE_ENV !== 'production',
    schema,
  };
};

const graphqlServer = graphqlHTTP(serverSettings);

const createServer = () => {
  const server = new Koa();

  server.use(cors());

  server.on('error', err => {
    console.log('Server error', err);
  });

  server.use(mount('/graphql', graphqlServer));

  return server;
};

export default createServer;
