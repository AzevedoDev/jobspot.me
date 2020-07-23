import DataLoader from 'dataloader';
import { Types } from 'mongoose';
import { Context } from 'koa';

import { IJob } from './modules/job/JobModel';

export type DataLoaderKey = Types.ObjectId | string | undefined | null;

export interface GraphQLDataloaders {
  JobLoader: DataLoader<DataLoaderKey, IJob>;
}

export interface GraphQLContext {
  dataloaders: GraphQLDataloaders;
  koaContext: Context;
}
