import {
  GraphQLObjectTypeConfig,
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';
import { globalIdField, connectionDefinitions } from 'graphql-relay';
import Job from './JobLoader';
import { GraphQLContext } from '../../types';

import { mongooseIDResolver, timestamps } from '../../common/mongooseResolvers';
import { NodeInterface } from '../node/NodeInterface';

type ConfigType = GraphQLObjectTypeConfig<Job, GraphQLContext>;

const JobTypeConfig: ConfigType = {
  name: 'Job',
  description: 'Represents Job',
  fields: () => ({
    id: globalIdField('Job'),
    ...mongooseIDResolver,
    title: {
      type: GraphQLString,
      resolve: job => job.title,
    },
    description: {
      type: GraphQLString,
      resolve: job => job.description,
    },
    location: {
      type: GraphQLString,
      resolve: job => job.location,
    },
    company: {
      type: GraphQLString,
      resolve: job => job.company,
    },
    seniority: {
      type: GraphQLString,
      resolve: job => job.seniority,
    },
    salary: {
      type: GraphQLInt,
      resolve: job => job.salary,
    },
    ...timestamps,
  }),
  interfaces: () => [NodeInterface],
};

const JobType = new GraphQLObjectType(JobTypeConfig);

export const JobConnection = connectionDefinitions({
  name: 'Job',
  nodeType: GraphQLNonNull(JobType), // ?
});

export default JobType;
