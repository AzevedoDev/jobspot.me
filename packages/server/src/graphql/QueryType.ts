import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { NodeField } from '../modules/node/NodeInterface';

import JobType, { JobConnection } from '../modules/job/JobType';
import * as JobLoader from '../modules/job/JobLoader';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'the root of all queries',
  fields: () => ({
    node: NodeField,
    jobs: {
      type: GraphQLNonNull(JobConnection.connectionType),
      resolve: async (_, args, context) => JobLoader.loadJobs(context, args),
    },
    job: {
      type: GraphQLNonNull(JobType),
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (_, { id }, context) => JobLoader.load(context, id),
    },
  }),
});

export default QueryType;
