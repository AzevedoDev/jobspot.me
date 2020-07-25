import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Home } from '@styled-icons/boxicons-solid/Home';

const Sidebar: React.FC = () => (
  <Wrapper>
    <IconWrapper>
      <Home />
    </IconWrapper>
  </Wrapper>
);

export default Sidebar;

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background: #ffffff;

  padding: 2rem;
  height: 100vh;
  width: 6rem;
  text-align: center;
`;

const IconWrapper = styled.div`
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
