import { nodeDefinitions, fromGlobalId } from 'graphql-relay';
import { GraphQLContext } from '../../types';

import Job, * as JobLoader from '../job/JobLoader';
import JobType from '../job/JobType';

const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
  // A method that maps from a global id to an object
  async (globalId, context: GraphQLContext) => {
    const { id, type } = fromGlobalId(globalId);

    if (type === 'Job') {
      return JobLoader.load(context, id);
    }

    return null;
  },
  // A method that maps from an object to a type
  obj => {
    if (obj instanceof Job) {
      return JobType;
    }

    return null;
  },
);

export const NodeInterface = nodeInterface;
export const NodeField = nodeField;
export const NodesField = nodesField;
