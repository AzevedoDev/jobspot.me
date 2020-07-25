/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
// import { Home } from '@styled-icons/boxicons-solid/Home';
import { UpArrow } from '@styled-icons/boxicons-solid/UpArrow';
import Image from '../assets/JobImage.svg';

const Sidebar: React.FC = () => (
  <Wrapper>
    <Topside>
      <img src={Image} alt="Logo" />
      <p>JobSpot</p>
    </Topside>

    <Bottomside>
      <UpArrow />
    </Bottomside>
  </Wrapper>
);

export default Sidebar;

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  border: 1px solid #e4e4e4;

  padding-top: 10px;
  padding-bottom: 20px;

  width: 6rem;
  text-align: center;
`;

const Topside = styled.div`
  img {
    width: 50px;
  }

  p {
    font-size: 18px;
    font-color: #3333;
    margin-top: 5px;
  }
`;

const Bottomside = styled.div`
  /* align-self: flex-end; */

  /* background: purple; */
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: space-around;

  svg {
    transition: fill 0.4s ease;
    fill: #d1d2d6;
    width: 24px;
    height: 24px;
  }

  svg:hover {
    fill: #433490;
  }
`;
