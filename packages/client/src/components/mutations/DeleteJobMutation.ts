import { commitMutation, GraphQLTaggedNode } from 'react-relay';
import { PayloadError } from 'relay-runtime';
import Environment from '../../relay/Environment';
import { DeleteJobMutationVariables } from '../__generated__/DeleteJobMutation.graphql';

function commit(
  mutation: GraphQLTaggedNode,
  variables: DeleteJobMutationVariables,
  onCompleted: (
    response: Record<string, unknown>,
    errors: readonly PayloadError[],
  ) => void,
  onError: (error: Error) => void,
) {
  return commitMutation(Environment, {
    mutation,
    variables,
    onCompleted,
    onError,
    updater: store => {
      const rootField = store.getRoot();
      const jobs = rootField.getLinkedRecord('jobs');
      const edges = jobs.getLinkedRecords('edges');

      const deletedJobId = store
        .getRootField('JobDeleteMutation')
        .getValue('jobId');

      const newEdges = edges.filter(
        edge => edge.getLinkedRecord('node').getDataID() !== deletedJobId,
      );

      jobs.setLinkedRecords(newEdges, 'edges');
    },
  });
}

export { commit };
