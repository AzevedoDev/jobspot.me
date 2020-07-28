import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay';
import { isValidObjectId } from 'mongoose';
import { GraphQLNonNull, GraphQLString } from 'graphql';

import { errorField, successField } from '../../../common/outputFields';
import Job from '../JobModel';

interface JobDeleteArgs {
  id: string;
}

export default mutationWithClientMutationId({
  name: 'JobDelete',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (args: JobDeleteArgs) => {
    const { id } = args;

    if (!isValidObjectId(id)) {
      return {
        error: 'Invalid id',
      };
    }

    const job = await Job.findById(id);

    if (!job) {
      return {
        error: 'Job not found',
      };
    }

    await job.remove();

    return {
      jobId: toGlobalId('Job', id),
      success: 'Job deleted!',
    };
  },
  outputFields: {
    ...errorField,
    ...successField,
    jobId: {
      type: GraphQLString,
      resolve: ({ jobId }) => jobId,
    },
  },
});
