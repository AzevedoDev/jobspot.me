import React, { useState, useCallback, FormEvent, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-relay';
import { useModal } from '../contexts/modalContext';

import { CreateJobPostMutationResponse } from './__generated__/CreateJobPostMutation.graphql';
import commit from '../relay/commit';

const CREATE_JOB_MUTATION = graphql`
  mutation CreateJobPostMutation($input: JobAddInput!) {
    JobAddMutation(input: $input) {
      job {
        id
        _id
        title
        description
        seniority
        location
        salary
      }
      success
      error
    }
  }
`;

const CreateJobPost = () => {
  const { close } = useModal();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [seniority, setSeniority] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState(0);

  const onError = useCallback((error: Error) => {
    // eslint-disable-next-line no-console
    console.error('An error occurred', error);
  }, []);

  const onCompleted = useCallback(
    ({ JobAddMutation }: CreateJobPostMutationResponse) => {
      if (JobAddMutation.error) {
        // eslint-disable-next-line no-alert
        alert(`Error to create this job ${JobAddMutation.error}`);
      } else {
        // eslint-disable-next-line no-alert
        alert(JobAddMutation.success);
        close();
      }
    },
    [close],
  );

  const handleSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();

      const variables = {
        input: {
          title,
          description,
          seniority,
          company,
          location,
          salary,
        },
      };

      commit(CREATE_JOB_MUTATION, variables, onCompleted, onError);
    },
    [
      title,
      description,
      seniority,
      company,
      location,
      salary,
      onCompleted,
      onError,
    ],
  );

  return (
    <Wrapper>
      <h1>Provide information about the new job</h1>

      <Form onSubmit={handleSubmit}>
        <FormContent>
          <LeftSide>
            <label htmlFor="title-input">
              Title
              <input
                id="title-input"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                placeholder="Javascript Developer"
              />
            </label>
            <label htmlFor="seniority-input">
              Seniority
              <input
                id="seniority-input"
                type="text"
                value={seniority}
                onChange={e => setSeniority(e.target.value)}
                required
                placeholder="Junior"
              />
            </label>
            <label htmlFor="company-input">
              Company
              <input
                id="company-input"
                type="text"
                placeholder="Google"
                value={company}
                onChange={e => setCompany(e.target.value)}
                required
              />
            </label>
            <label htmlFor="location-input">
              Location
              <input
                id="location-input"
                type="text"
                placeholder="Texas, USA"
                value={location}
                onChange={e => setLocation(e.target.value)}
                required
              />
            </label>
            <label htmlFor="salary-input">
              Salary
              <input
                id="salary-input"
                type="number"
                placeholder="3000"
                value={salary}
                onChange={e => setSalary(e.target.valueAsNumber)}
                required
              />
            </label>

            <ButtonsWrapper>
              <button type="submit" className="button-create">
                Create
              </button>
              <button type="button" onClick={() => close()}>
                Nope, head back
              </button>
            </ButtonsWrapper>
          </LeftSide>

          <label htmlFor="description-textarea">
            Description
            <textarea
              id="description-textarea"
              placeholder="Describe the requirements for this role"
              rows={30}
              cols={130}
              maxLength={2700}
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </label>
        </FormContent>
      </Form>
    </Wrapper>
  );
};

export default CreateJobPost;

const Wrapper = styled.div`
  width: 1000px;

  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
    font-weight: bold;
    font-size: 20px;
  }

  label,
  input,
  textarea {
    display: block;
  }

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    margin-top: 5px;
  }
`;

const Form = styled.form`
  /* background: purple; */
  margin-top: 30px;
  width: 100%;
`;

const FormContent = styled.div`
  display: flex;
  /* background: cyan; */

  textarea {
    width: 100%;
    outline: none;
    resize: none;
  }
`;

const LeftSide = styled.div`
  /* background: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 40px;

  input {
    width: 220px;
    height: 30px;
    padding: 5px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  height: 110px;
  justify-content: space-between;

  button {
    width: 220px;
    height: 50px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    color: #333;
    outline: 0;
    font-weight: bold;
  }

  button.button-create {
    background: #96ceb4;
    color: #f0f0f0;
  }
`;
