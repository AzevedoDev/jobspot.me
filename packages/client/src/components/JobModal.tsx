import React from 'react';
import styled from 'styled-components';

import { useModal } from '../contexts/modalContext';
import JobDetails from './JobDetails';

interface Props {
  type: 'job-details' | 'job-delete';
}

const JobModal: React.FC<Props> = ({ type }) => {
  const { show, close } = useModal();

  const DynamicComponent = type === 'job-details' ? JobDetails : JobDetails;

  return (
    <Wrapper show={show}>
      <Content>
        <DynamicComponent />
      </Content>
    </Wrapper>
  );
};

export default JobModal;

interface WrapperProps {
  show: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  display: ${props => (props.show ? 'block' : 'none')};
`;

const Content = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 25px 50px;
`;
