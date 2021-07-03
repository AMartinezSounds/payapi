import React from 'react';
import styled from 'styled-components';

import google from '../../assets/images/companies/google.svg';
import hP from '../../assets/images/companies/hewlett-packard.svg';
import microsoft from '../../assets/images/companies/microsoft.svg';
import nvidia from '../../assets/images/companies/nvidia.svg';
import oracle from '../../assets/images/companies/oracle.svg';
import tesla from '../../assets/images/companies/tesla.svg';

const CompaniesComponentStyle = styled.div`
  height: 320px;
  margin-block: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CompaniesStyle = styled.div`
  width: 100%;
  height: 180px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 33.33%, 33.33%, 33.33%;
  justify-items: center;
  align-items: center;
  @media (min-width: 700px) {
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-template-rows: 50% 50%;
  }
  @media (min-width: 1300px) {
    width: 100%;
  }
`;

const Text = styled.div`
  h3 {
    color: var(--san-juan-blue);
    font-size: 2.8rem;
    line-height: 3.5rem;
    text-align: center;
    width: 340px;
    margin-inline: auto;
  }
  @media (min-width: 700px) {
    h3 {
      width: 80%;
    }
  }
  @media (min-width: 1300px) {
    h3 {
      text-align: left;
    }
  }
`;

function Companies() {
  return (
    <CompaniesComponentStyle>
      <Text>
        <h3>Join the thousands of innovators already building with us</h3>
      </Text>
      <CompaniesStyle>
        <img src={google} alt="google logo" />
        <img src={hP} alt="hewlett-packard logo" />
        <img src={microsoft} alt="microsoft logo" />
        <img src={nvidia} alt="nvidia logo" />
        <img src={oracle} alt="oracle logo" />
        <img src={tesla} alt="tesla logo" />
      </CompaniesStyle>
    </CompaniesComponentStyle>
  );
}

export default Companies;
