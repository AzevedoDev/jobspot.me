import React, { useCallback } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-relay';

import { useModal } from '../contexts/modalContext';
import commit from '../relay/commit';
import { DeleteJobMutationResponse } from './__generated__/DeleteJobMutation.graphql';

export interface Props {
  id: string;
}

const DELETE_JOB_MUTATION = graphql`
  mutation DeleteJobMutation($data: JobDeleteInput!) {
    JobDeleteMutation(input: $data) {
      success
      error
    }
  }
`;

const DeleteJob: React.FC<Props> = ({ id }) => {
  const { close } = useModal();

  const onError = useCallback((error: Error) => {
    // eslint-disable-next-line no-console
    console.error('An error occurred', error);
  }, []);

  const onCompleted = useCallback(
    ({ JobDeleteMutation }: DeleteJobMutationResponse) => {
      if (JobDeleteMutation.error) {
        // eslint-disable-next-line no-alert
        alert(`Error to delete this job ${JobDeleteMutation.error}`);
      } else {
        // eslint-disable-next-line no-alert
        alert(JobDeleteMutation.success);
        close();
      }
    },
    [close],
  );

  const handleDelete = useCallback(() => {
    const variables = {
      data: { id },
    };
    console.log('handleDelete -> variables', variables);

    commit(DELETE_JOB_MUTATION, variables, onCompleted, onError);
  }, [id, onCompleted, onError]);

  return (
    <Wrapper>
      <h1>Do you really want to delete this job post?</h1>

      <div>
        <DeleteButton type="button" onClick={handleDelete}>
          Yes, I am sure
        </DeleteButton>

        <BackButton type="button" onClick={() => close()}>
          Nope, head back
        </BackButton>
      </div>
    </Wrapper>
  );
};

export default DeleteJob;

const Wrapper = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: center;

  div {
    width: 100%;

    button {
      width: 220px;
      height: 50px;
      border: 1px solid #f0f0f0;
      border-radius: 6px;
      color: #fff;
      outline: 0;
    }
  }
`;
const DeleteButton = styled.button`
  background: red;
`;

const BackButton = styled.button`
  background: #333;
`;
