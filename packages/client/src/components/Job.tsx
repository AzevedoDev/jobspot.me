import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Location } from '@styled-icons/entypo/Location';

import Image from '../assets/JobImage.svg';

interface Props {
  jobId: string;
  title: string;
  company: string;
  location: string;
}

const Job: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <img src={Image} alt="job" />
          <h3>UX Lead and Researcher</h3>
        </Title>

        <CompanyDetails>
          <p>Globex Corporation Pvt. Ltd</p>
          <small>
            <Location />
            Los Angeles, California, USA
          </small>
        </CompanyDetails>
      </Content>

      {/* This button should lead to the other page with the button id */}
      <Button>See More</Button>
    </Wrapper>
  );
};

export default Job;

const Wrapper = styled.section`
  width: 290px;
  height: 316px;

  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 4px;

  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  img {
    width: 74px;
  }

  h3 {
    margin-top: 25px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 133px;
  height: 40px;
  border: 1px solid #ff418c;
  background: #fce6dd;
  border-radius: 4px;
  color: #ff418c;
  outline: 0;
`;

const CompanyDetails = styled.div`
  margin-top: 15px;

  small {
    margin-top: 5px;
    display: flex;
    color: #333333;
    font-size: 12px;
    margin-top: 10px;

    svg {
      width: 13px;
      fill: #707070;
      margin-right: 10px;
    }
  }
`;
