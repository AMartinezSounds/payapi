import React from 'react';
import styled from 'styled-components';
import PricingComponent from '../components/pricing-components/PricingComponent';
import BottomForm from '../utils/BottomForm';

const PricingStyle = styled.div``;

function pricing() {
  return (
    <PricingStyle className="pageBackground">
      <PricingComponent />
      <BottomForm />
    </PricingStyle>
  );
}

export default pricing;
