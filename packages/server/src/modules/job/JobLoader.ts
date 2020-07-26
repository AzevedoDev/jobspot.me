import {
  connectionFromMongoCursor,
  mongooseLoader,
  // eslint-disable-next-line
} from '@entria/graphql-mongoose-loader';
import DataLoader from 'dataloader';

import { ConnectionArguments } from 'graphql-relay';
import { DataLoaderKey, GraphQLContext } from '../../types';
import JobModel, { IJob } from './JobModel';

export default class Job {
  id: string;

  _id: string;

  title: string;

  description: string;

  location: string;

  company: string;

  seniority: string;

  salary: number;

  constructor(data: IJob) {
    this.id = data.id || data._id;
    this._id = data._id;
    this.title = data.title;
    this.description = data.description;
    this.location = data.location;
    this.company = data.company;
    this.salary = data.salary;
    this.seniority = data.seniority;
  }
}

export const getLoader = () =>
  new DataLoader<DataLoaderKey, IJob>(ids =>
    mongooseLoader(JobModel, ids as any),
  );

export const load = async (context: GraphQLContext, id: DataLoaderKey) => {
  if (!id) {
    return null;
  }

  try {
    const data = await context.dataloaders.JobLoader.load(id);

    if (!data) {
      return null;
    }

    return new Job(data);
  } catch (err) {
    return null;
  }
};

interface LoadJobArgs extends ConnectionArguments {
  seniority?: string;
}

export const loadJobs = async (context: GraphQLContext, args: LoadJobArgs) => {
  const conditions: any = {};

  if (args.seniority) {
    conditions.$or = [{ seniority: args.seniority }];
  }

  return connectionFromMongoCursor({
    cursor: JobModel.find(conditions),
    context,
    args,
    loader: load,
  });
};
