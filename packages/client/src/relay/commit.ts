import { commitMutation, GraphQLTaggedNode } from 'react-relay';
import { PayloadError, DeclarativeMutationConfig } from 'relay-runtime';
import Environment from './Environment';

function commit(
  mutation: GraphQLTaggedNode,
  data: Record<string, unknown>,
  onCompleted: (
    response: Record<string, unknown>,
    errors: readonly PayloadError[],
  ) => void,
  onError: (error: Error) => void,
  configs?: DeclarativeMutationConfig[],
) {
  const variables = {
    ...data,
  };

  return commitMutation(Environment, {
    mutation,
    variables,
    onCompleted,
    onError,
    configs,
  });
}

export default commit;
