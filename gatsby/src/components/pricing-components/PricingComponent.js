import React from 'react';
import styled from 'styled-components';
import PricingCard from './PricingCard';

const PricingComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12rem;
  .title-section {
    color: var(--san-juan-blue);
    margin-top: 4rem;
    margin-bottom: 12rem;
  }
  @media (min-width: 1300px) {
    width: 77.08%;
    margin-inline: auto;
    .title-section {
      width: 100%;
      font-size: 5rem;
    }
  }
`;

const PricingCardsStyle = styled.div`
  width: 100%;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1300px) {
    justify-content: space-between;
    height: 500px;
  }
`;

const features = [
  'Transactions',
  'Auth',
  'Identity',
  'Investments',
  'Assets',
  'Liabilities',
  'Income',
];

const maxFeatures = (allFeatures, index) => {
  const planFeatures = [];
  for (let i = 0; i < index; i++) {
    planFeatures.push(allFeatures[i]);
  }
  return planFeatures;
};

const includedFeatures = (plan) => {
  if (plan === 'Free Plan') {
    return maxFeatures(features, 3);
  }
  if (plan === 'Basic Plan') {
    return maxFeatures(features, 5);
  }
  if (plan === 'Premium Plan') {
    return maxFeatures(features, 7);
  }
};

const excludedFeatures = (all, included) => {
  const filtered = all.filter((el) => included.indexOf(el) === -1);
  return filtered;
};

function PricingComponent() {
  return (
    <PricingComponentStyle>
      <h3 className="title-section">Pricing</h3>
      <PricingCardsStyle>
        <PricingCard
          plan="Free Plan"
          description="Build and test using our core set of products with up to 100 API requests "
          price={0}
          includedFeatures={includedFeatures('Free Plan')}
          excludedFeatures={excludedFeatures(
            features,
            includedFeatures('Free Plan')
          )}
        />
        <PricingCard
          plan="Basic Plan"
          description="Launch your project with unlimited requests and no contractual minimums"
          price={24900}
          includedFeatures={includedFeatures('Basic Plan')}
          excludedFeatures={excludedFeatures(
            features,
            includedFeatures('Basic Plan')
          )}
        />
        <PricingCard
          plan="Premium Plan"
          description="Get tailored solutions, volume pricing, and dedicated support for your team"
          price={49900}
          includedFeatures={includedFeatures('Premium Plan')}
          excludedFeatures={excludedFeatures(
            features,
            includedFeatures('Premium Plan')
          )}
        />
      </PricingCardsStyle>
    </PricingComponentStyle>
  );
}

export default PricingComponent;
