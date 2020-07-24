import { GraphQLObjectType } from 'graphql';

import JobMutations from '../modules/job/mutations';
import UserMutations from '../modules/user/mutations';

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...JobMutations,
    ...UserMutations,
  }),
});

export default MutationType;
