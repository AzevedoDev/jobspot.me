import { GraphQLObjectType } from 'graphql';

import JobMutations from '../modules/job/mutations';

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...JobMutations,
  }),
});

export default MutationType;
