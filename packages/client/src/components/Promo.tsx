import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Star } from '@styled-icons/boxicons-regular/Star';

const Promo: React.FC = () => (
  <Wrapper>
    <Informations>
      <IconWrapper>
        <Star />
      </IconWrapper>

      <Texts>
        <h3>See jobs where you&aposd be a top applicant</h3>
        <small>Try free for 6 months</small>
      </Texts>
    </Informations>

    <button type="button">GO PRO</button>
  </Wrapper>
);

export default Promo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  height: 110px;
  background: rgb(241, 137, 44);
  background: linear-gradient(
    98deg,
    rgba(241, 137, 44, 1) 0%,
    rgba(255, 65, 140, 1) 100%
  );

  border-radius: 6px;
  padding: 0px 20px;

  button {
    width: 220px;
    height: 50px;
    background: #ffffff;
    border-radius: 6px;
    border: 0;
    color: #333333;
    font-weight: bold;
    font-size: 18px;
    outline: 0;
    transition: background 0.3s ease;

    &:hover {
      background: #eee8e8;
    }
  }
`;

const IconWrapper = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background: rgb(255, 221, 38);
  background: linear-gradient(
    98deg,
    rgba(255, 221, 38, 1) 0%,
    rgba(255, 187, 49, 1) 100%
  );

  svg {
    fill: #fff;
    height: 24px;
    width: 24px;
    align-self: center;
  }
`;

const Informations = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Texts = styled.div`
  margin-left: 16px;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45px;

  h3 {
    font-weight: bold;
    font-size: 20px;
    margin: 0;
  }

  small {
    font-weight: 400px;
    font-size: 16px;
  }
`;
