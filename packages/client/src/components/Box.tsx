import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Flag } from '@styled-icons/entypo/Flag';

interface Props {
  Icon: string;
  description: string;
  count: number;
}

const Box: React.FC = () => (
  <Wrapper>
    <IconWrapper>
      <Flag />
    </IconWrapper>

    <p>Job Offers</p>

    <strong>02</strong>
  </Wrapper>
);

export default Box;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100px;
  width: 290px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 6px;

  padding: 0px 25px;
  margin-right: 25px;

  p {
    font-weight: bold;
    font-size: 18px;
  }

  strong {
    font-size: 22px;
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ff6f37;

  svg {
    fill: #fff;
    width: 24px;
    height: 24px;
  }

  border-radius: 50%;
  background: red;
`;
