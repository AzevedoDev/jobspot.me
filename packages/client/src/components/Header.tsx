import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import Promo from './Promo';

const Header: React.FC = () => (
  <Wrapper>
    <Boxes>
      <Box />
      <Box />
      <Box />
    </Boxes>

    <Promo />
  </Wrapper>
);

export default Header;

const Wrapper = styled.div`
  /* margin-left: 25px; */
  padding-right: 25px;
  padding-left: 25px;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 0px;
  width: 50%;
`;
