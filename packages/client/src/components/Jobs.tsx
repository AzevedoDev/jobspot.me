import React from 'react';
import styled from 'styled-components';
import Job from './Job';

const Jobs: React.FC = () => {
  return (
    <Wrapper>
      <Description>
        <h2>Based on your profile and career interests</h2>
        <small>Progamming / Any Location / Any Seniority</small>
      </Description>

      <List>
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </List>
    </Wrapper>
  );
};

export default Jobs;

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
