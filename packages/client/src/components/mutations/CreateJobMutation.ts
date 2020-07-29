import { commitMutation, GraphQLTaggedNode } from 'react-relay';
import { PayloadError } from 'relay-runtime';
import Environment from '../../relay/Environment';
import { CreateJobPostMutationVariables } from '../__generated__/CreateJobPostMutation.graphql';

let tempID = 0;

function commit(
  mutation: GraphQLTaggedNode,
  variables: CreateJobPostMutationVariables,
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
      const edgeToAdd = store
        .getRootField('JobAddMutation')
        .getLinkedRecord('jobEdge');

      const id = `client:jobs:newJob:${(tempID += 1)}`;

      const rootField = store.getRoot();
      const jobs = rootField.getLinkedRecord('jobs');

      const edge = store.create(`client:newEdge:${(tempID += 1)}`, 'id');
      const node = store.create(id, 'id');

      node.setValue(edgeToAdd.getLinkedRecord('node').getValue('id'), 'id');
      node.setValue(variables.input.title, 'title');
      node.setValue(variables.input.seniority, 'seniority');
      node.setValue(variables.input.salary, 'salary');
      node.setValue(variables.input.location, 'location');
      node.setValue(variables.input.description, 'description');
      node.setValue(variables.input.company, 'company');

      edge.setLinkedRecord(node, 'node');

      const newEdges = [...jobs.getLinkedRecords('edges'), edge];

      jobs.setLinkedRecords(newEdges, 'edges');
    },
  });
}

export { commit };
