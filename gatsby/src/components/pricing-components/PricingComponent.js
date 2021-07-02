import React from 'react';
import styled from 'styled-components';
import PricingCard from './PricingCard';

import check from '../../assets/images/icon-check.svg';
import BottomForm from '../../utils/BottomForm';

const PricingComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12rem;
  .title-section {
    color: var(--san-juan-blue);
    margin-top: 4rem;
    margin-bottom: 6rem;
  }
`;

const PricingCardsStyle = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

function PricingComponent() {
  const features = [
    'Transactions',
    'Auth',
    'Identity',
    'Investments',
    'Assets',
    'Liabilities',
    'Income',
  ];
  return (
    <PricingComponentStyle>
      <h3 className="title-section">Pricing</h3>
      <PricingCardsStyle>
        <PricingCard
          features={features}
          plan="Free Plan"
          description="Build and test using our core set of products with up to 100 API requests "
          price={0}
          id={1}
        />
        <PricingCard
          features={features}
          plan="Basic Plan"
          description="Launch your project with unlimited requests and no contractual minimums"
          price={24900}
          id={2}
        />
        <PricingCard
          features={features}
          plan="Premium Plan"
          description="Get tailored solutions, volume pricing, and dedicated support for your team"
          price={49900}
          id={3}
        />
      </PricingCardsStyle>
      <BottomForm />
    </PricingComponentStyle>
  );
}

export default PricingComponent;
