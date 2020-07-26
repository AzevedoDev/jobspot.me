import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

import { errorField, successField } from '../../../common/outputFields';

import Job from '../JobModel';
import JobType from '../JobType';
import * as JobLoader from '../JobLoader';

interface JobAddArgs {
  title: string;
  seniority: string;
  description: string;
  company: string;
  location: string;
  salary: number;
}

export default mutationWithClientMutationId({
  name: 'JobAdd',
  inputFields: {
    title: {
      type: GraphQLNonNull(GraphQLString),
    },
    seniority: {
      type: GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLNonNull(GraphQLString),
    },
    company: {
      type: GraphQLNonNull(GraphQLString),
    },
    location: {
      type: GraphQLNonNull(GraphQLString),
    },
    salary: {
      type: GraphQLNonNull(GraphQLInt),
    },
  },
  mutateAndGetPayload: async (args: JobAddArgs) => {
    const { title, seniority, description, salary, location, company } = args;

    const newJob = await new Job({
      title,
      seniority,
      description,
      location,
      company,
      salary,
    }).save();

    return {
      id: newJob._id,
      error: null,
      success: 'Job created!',
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
