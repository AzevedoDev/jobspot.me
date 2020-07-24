import DataLoader from 'dataloader';
import { Types } from 'mongoose';
import { Context } from 'koa';

import { IJob } from './modules/job/JobModel';
import { IUser } from './modules/user/UserModel';

export type DataLoaderKey = Types.ObjectId | string | undefined | null;

export interface GraphQLDataloaders {
  JobLoader: DataLoader<DataLoaderKey, IJob>;
  UserLoader: DataLoader<DataLoaderKey, IUser>;
}

export interface GraphQLContext {
  dataloaders: GraphQLDataloaders;
  koaContext: Context;
}
