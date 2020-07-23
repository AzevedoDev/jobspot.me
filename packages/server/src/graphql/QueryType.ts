import { GraphQLObjectType } from 'graphql';
import { nodeField } from '../modules/node/definitions';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'the root of all queries',
  fields: () => ({
    node: nodeField,
  }),
});

export default QueryType;
