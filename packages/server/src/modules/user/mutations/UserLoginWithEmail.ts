import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLString, GraphQLNonNull } from 'graphql';

import { errorField, successField } from '../../../common/outputFields';
import { createToken } from '../../../common/auth';

import UserModel from '../UserModel';
import * as UserLoader from '../UserLoader';
import UserType from '../UserType';

export default mutationWithClientMutationId({
  name: 'UserLoginWithEmail',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },

  mutateAndGetPayload: async ({ email, password }) => {
    const user = await UserModel.findOne({ email: email.trim().toLowerCase() });

    const errorMessage = 'Invalid credentials';

    if (!user) {
      return {
        error: errorMessage,
      };
    }

    const isPasswordCorrect = user.authenticate(password);

    if (!isPasswordCorrect) {
      return {
        error: errorMessage,
      };
    }

    return {
      token: createToken({ _id: user._id, email: user.email }),
      id: user._id,
    };
  },

  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    me: {
      type: UserType,
      resolve: async ({ id }, _args, context) => UserLoader.load(context, id),
    },
    ...errorField,
  },
});
