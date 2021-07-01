import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import bg from '../../../assets/images/bg-pattern-circle.svg';
import google from '../../../assets/images/companiesHome/google.svg';
import hP from '../../../assets/images/companiesHome/hewlett-packard.svg';
import microsoft from '../../../assets/images/companiesHome/microsoft.svg';
import nvidia from '../../../assets/images/companiesHome/nvidia.svg';
import oracle from '../../../assets/images/companiesHome/oracle.svg';
import tesla from '../../../assets/images/companiesHome/tesla.svg';

const SecondComponentStyle = styled.div`
  height: 650px;
  background-image: url(${bg});
  background-size: 500px;
  background-position: -70px -300px;
  background-repeat: no-repeat;
  background-color: var(--mirage-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 700px) {
    background-size: cover;
    background-position: center -450px;
  }
  @media (min-width: 1300px) {
    height: 472px;
    flex-direction: row-reverse;
    background-size: 700px;
    background-position: -50px -200px;
  }
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
    width: 50%;
  }
`;

const Text = styled.div`
  width: 340px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: #fbfcfe;
    font-size: 3.5rem;
  }
  p {
    color: var(--lightSan-juan-blue);
    line-height: 2.7rem;
    text-align: center;
  }
  @media (min-width: 700px) {
    width: 457px;
    height: 272px;
    h3 {
      font-size: 4.5rem;
    }
  }
  @media (min-width: 1300px) {
    align-items: flex-start;
    p {
      text-align: left;
    }
  }
`;

function SecondComponent() {
  return (
    <SecondComponentStyle>
      <CompaniesStyle>
        <img src={google} alt="google logo" />
        <img src={hP} alt="hewlett-packard logo" />
        <img src={microsoft} alt="microsoft logo" />
        <img src={nvidia} alt="nvidia logo" />
        <img src={oracle} alt="oracle logo" />
        <img src={tesla} alt="tesla logo" />
      </CompaniesStyle>
      <Text>
        <h3>Who we work with</h3>
        <p>
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.{' '}
        </p>
        <Link to="/about" className="aboutUsButton">
          About Us
        </Link>
      </Text>
    </SecondComponentStyle>
  );
}

export default SecondComponent;
