import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import SEO from '../components/SEO';
import PricingComponent from '../components/pricing-components/PricingComponent';
import BottomForm from '../utils/BottomForm';

const PricingStyle = styled.div``;

function pricing() {
  return (
    <>
      <SEO title="Pricing" />
      <Fade>
        <PricingStyle className="pageBackground">
          <PricingComponent />
          <BottomForm />
        </PricingStyle>
      </Fade>
    </>
  );
}

export default pricing;
