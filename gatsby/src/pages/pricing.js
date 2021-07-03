import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import PricingComponent from '../components/pricing-components/PricingComponent';
import BottomForm from '../utils/BottomForm';

const PricingStyle = styled.div``;

function pricing() {
  return (
    <Fade>
      <PricingStyle className="pageBackground">
        <PricingComponent />
        <BottomForm />
      </PricingStyle>
    </Fade>
  );
}

export default pricing;
