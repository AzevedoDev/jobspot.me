import React, { useCallback } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Location } from '@styled-icons/entypo/Location';
import Image from '../assets/JobImage.svg';
import { useModal } from '../contexts/modalContext';

const JobDetails: React.FC = () => {
  const { close } = useModal();

  const apply = useCallback(() => {
    // eslint-disable-next-line no-alert
    alert('Position applied');
  }, []);

  return (
    <Wrapper>
      <Logo>
        <img src={Image} alt="Company Logo" />
        <h1>Globex Corporation Pvt. Ltd</h1>
      </Logo>

      <CompanyDetails>
        <p>Senior Javascript Developer</p>
        <small>
          <Location />
          Los Angeles, California, USA
        </small>
      </CompanyDetails>

      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        laborum numquam, quaerat tempore distinctio error? Autem, delectus
        beatae expedita placeat voluptas corrupti perferendis id laborum
        distinctio amet? Perferendis, animi? Libero? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptates laborum numquam, quaerat
        tempore distinctio error? Autem, delectus beatae expedita placeat
        voluptas corrupti perferendis id laborum distinctio amet? Perferendis,
        animi? Libero? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates laborum numquam, quaerat tempore distinctio error? Autem,
        delectus beatae expedita placeat voluptas corrupti perferendis id
        laborum distinctio amet? Perferendis, animi? Libero?
      </Description>

      <strong>Salary: R$ 5000,00 per month</strong>

      <ButtonsWrapper>
        <ApplyButton type="button" onClick={() => apply()}>
          Apply Now
        </ApplyButton>
        <BackButton type="button" onClick={() => close()}>
          Back
        </BackButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default JobDetails;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 16px;
    color: #000;
  }
`;

const Logo = styled.div`
  align-self: center;
  text-align: center;

  img {
    background: #fff;
    border: 1px solid #e4e4e4;
    padding: 20px;
    border-radius: 6px;
  }

  h1 {
    margin-top: 12px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const CompanyDetails = styled.div`
  margin-top: 15px;

  p {
    font-weight: bold;
  }

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

const Description = styled.div`
  padding: 25px 0px;
  text-align: justify;
  line-height: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-around;
  align-self: center;

  button {
    width: 220px;
    height: 50px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    color: #fff;
    outline: 0;
  }
`;

const ApplyButton = styled.button`
  background: rgb(241, 137, 44);
  background: linear-gradient(
    98deg,
    rgba(241, 137, 44, 1) 0%,
    rgba(255, 65, 140, 1) 100%
  );

  margin-top: 50px;
`;

const BackButton = styled.button`
  background: rgb(109, 44, 241);
  background: linear-gradient(
    98deg,
    rgb(109, 44, 241) 0%,
    rgba(255, 65, 140, 1) 100%
  );

  margin-top: 50px;
`;
