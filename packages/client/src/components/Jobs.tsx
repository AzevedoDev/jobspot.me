import React from 'react';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';
import Job from './Job';
import { createQueryRenderer } from '../relay';

import { Jobs_data } from './__generated__/Jobs_data.graphql';

interface Props {
  data: Jobs_data;
}

const Jobs: React.FC<Props> = ({ data }) => {
  const jobs = data.jobs.edges;

  return (
    <Wrapper>
      <Description>
        <h2>Based on your profile and career interests</h2>
        <small>Programming / Any Location / Any Seniority</small>
      </Description>

      <List>
        {jobs.map(({ node }) => (
          <Job key={node.id} job={node} />
        ))}
      </List>
    </Wrapper>
  );
};

const JobsFragment = createFragmentContainer(Jobs, {
  data: graphql`
    fragment Jobs_data on Query {
      jobs {
        edges {
          node {
            id
            ...Job_job
          }
        }
      }
    }
  `,
});

const JobsQueryRenderer = createQueryRenderer(JobsFragment, {
  query: graphql`
    query JobsQuery {
      ...Jobs_data
    }
  `,
  getFragmentProps: props => {
    return {
      data: props,
    };
  },
});

export default JobsQueryRenderer;

const Wrapper = styled.section``;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  color: #333333;

  h2 {
    font-weight: bold;
    font-size: 20px;
  }

  small {
    margin-top: 10px;
    font-size: 13px;
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
