import {
  connectionFromMongoCursor,
  mongooseLoader,
  // eslint-disable-next-line
} from '@entria/graphql-mongoose-loader';
import DataLoader from 'dataloader';

import { ConnectionArguments } from 'graphql-relay';
import { DataLoaderKey, GraphQLContext } from '../../types';
import UserModel, { IUser } from './UserModel';

export default class User {
  id: string;

  _id: string;

  email: string;

  name: string;

  constructor(data: IUser) {
    this.id = data.id || data._id;
    this._id = data._id;
    this.email = data.email;
    this.name = data.name;
  }
}

export const getLoader = () =>
  new DataLoader<DataLoaderKey, IUser>(ids =>
    mongooseLoader(UserModel, ids as any),
  );

export const load = async (context: GraphQLContext, id: DataLoaderKey) => {
  if (!id) {
    return null;
  }

  try {
    const data = await context.dataloaders.UserLoader.load(id);

    if (!data) {
      return null;
    }

    return new User(data);
  } catch (err) {
    return null;
  }
};
