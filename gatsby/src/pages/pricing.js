import React from 'react';
import styled from 'styled-components';
import PricingComponent from '../components/pricing-components/PricingComponent';
import bg from '../assets/images/bg-pattern-circle.svg';
import BottomForm from '../utils/BottomForm';

const PricingStyle = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: 200px -600px;
  @media (min-width: 500px) {
    background-position: 300px -600px;
  }
  @media (min-width: 700px) {
    background-position: 400px -500px;
  }
  @media (min-width: 1300px) {
    background-position: 800px -600px;
  }
`;

function pricing() {
  return (
    <PricingStyle>
      <PricingComponent />
      <BottomForm />
    </PricingStyle>
  );
}

export default pricing;
