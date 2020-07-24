import {
  GraphQLObjectTypeConfig,
  GraphQLString,
  GraphQLObjectType,
} from 'graphql';
import { globalIdField } from 'graphql-relay';
import User from './UserLoader';
import { GraphQLContext } from '../../types';
import { mongooseIDResolver, timestamps } from '../../common/mongooseResolvers';
import { NodeInterface } from '../node/NodeInterface';

type ConfigType = GraphQLObjectTypeConfig<User, GraphQLContext>;

const UserTypeConfig: ConfigType = {
  name: 'User',
  description: 'Represents User',
  fields: () => ({
    id: globalIdField('User'),
    ...mongooseIDResolver,
    name: {
      type: GraphQLString,
      resolve: user => user.name,
    },
    email: {
      type: GraphQLString,
      resolve: user => user.name,
    },
    ...timestamps,
  }),
  interfaces: () => [NodeInterface],
};

const UserType = new GraphQLObjectType(UserTypeConfig);

export default UserType;
