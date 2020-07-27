import React from 'react';
import styled from 'styled-components';

import { useModal } from '../contexts/modalContext';
import JobDetails from './JobDetails';
import DeleteJob from './DeleteJob';

const ModalRenderer: React.FC = ({ children }) => {
  const { show } = useModal();

  return (
    <Wrapper show={show}>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const JobModal: React.FC = () => {
  const { modalData } = useModal();

  if (modalData.type === 'job-details') {
    return (
      <ModalRenderer>
        <JobDetails data={modalData.data} />
      </ModalRenderer>
    );
  }

  if (modalData.type === 'job-delete') {
    return (
      <ModalRenderer>
        <DeleteJob id={modalData.id} />
      </ModalRenderer>
    );
  }

  return <></>;
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
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 25px 50px;
`;
