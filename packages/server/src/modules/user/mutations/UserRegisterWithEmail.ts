import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { errorField, successField } from '../../../common/outputFields';

import { createToken } from '../../../common/auth';

import User from '../UserModel';

import UserType from '../UserType';
import * as UserLoader from '../UserLoader';

export default mutationWithClientMutationId({
  name: 'UserRegisterWithEmail',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, email, password }) => {
    const hasUser =
      (await User.countDocuments({ email: email.trim().toLowerCase() })) > 0;

    if (hasUser) {
      return {
        error: 'Email already in use',
      };
    }

    const user = await new User({
      name,
      email,
      password,
    }).save();

    return {
      token: createToken({ _id: user._id, email: user.email }),
      id: user._id,
      success: 'User registered with success',
    };
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    me: {
      type: UserType,
      resolve: async ({ id }, _, context) => UserLoader.load(context, id),
    },
    ...errorField,
    ...successField,
  },
});
