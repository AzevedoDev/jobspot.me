import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-extraneous-dependencies
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

const Topbar: React.FC = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <IconWrapper>
          <SearchAlt />
        </IconWrapper>
        <input type="text" placeholder="Search a job" />

        <button type="button">Search</button>
      </InputWrapper>
    </Wrapper>
  );
};

export default Topbar;

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  background: #ffffff;
  height: 100px;

  display: flex;
  align-items: center;
  padding-left: 35px;
  padding-right: 35px;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;

  svg {
    fill: #a7a7a8;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  input {
    background: transparent;
    outline: 0;
    border: 0;
    margin-left: 5px;
    height: 24px;

    &::placeholder {
      color: #a7a7a8;
    }
  }

  button {
    width: 110px;
    height: 54px;
    background: #f8f8fb;
    border: 0;
    color: #333333;
    font-weight: 500;
  }
`;
