import { mutationWithClientMutationId } from 'graphql-relay';
import { isValidObjectId } from 'mongoose';
import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
} from 'graphql';

import { errorField, successField } from '../../../common/outputFields';

import Job from '../JobModel';
import JobType from '../JobType';
import * as JobLoader from '../JobLoader';

interface JobEditArgs {
  id: string;
  job: {
    title?: string;
    seniority?: string;
    description?: string;
    location?: string;
    company?: string;
    salary?: number;
  };
}

const EditJobInput = new GraphQLInputObjectType({
  name: 'JobWithNullableInput',
  fields: {
    title: {
      type: GraphQLString,
    },
    seniority: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    location: {
      type: GraphQLString,
    },
    company: {
      type: GraphQLString,
    },
    salary: {
      type: GraphQLInt,
    },
  },
});

export default mutationWithClientMutationId({
  name: 'JobEdit',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    job: {
      type: new GraphQLNonNull(EditJobInput),
    },
  },
  mutateAndGetPayload: async (args: JobEditArgs) => {
    const { id, job } = args;

    if (!isValidObjectId(id)) {
      return {
        error: 'Invalid id',
      };
    }

    const jobInDb = await Job.findById(id);

    if (!jobInDb) {
      return {
        error: 'Job not found',
      };
    }

    if (job.title) {
      jobInDb.title = job.title;
    }

    if (job.seniority) {
      jobInDb.seniority = job.seniority;
    }

    if (job.description) {
      jobInDb.description = job.description;
    }

    if (job.company) {
      jobInDb.company = job.company;
    }

    if (job.location) {
      jobInDb.location = job.location;
    }

    if (job.salary) {
      jobInDb.salary = job.salary;
    }

    await jobInDb.save();

    return {
      id: jobInDb._id,
      success: 'Job updated!',
    };
  },
  outputFields: {
    job: {
      type: JobType,
      resolve: async ({ id }, _, context) => JobLoader.load(context, id),
    },
    ...errorField,
    ...successField,
  },
});
