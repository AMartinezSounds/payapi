import React from 'react';
import styled from 'styled-components';
import PricingCard from './PricingCard';

const PricingComponentStyle = styled.div`
  min-width: 327px;
  width: 87.2%;
  margin-left: auto;
  margin-right: auto;
  .title-section {
    color: var(--san-juan-blue);
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  @media (min-width: 1000px) {
    .title-section {
      padding-top: 8rem;
      padding-bottom: 8rem;
      font-size: 5rem;
      text-align: left;
    }
  }
`;

const PricingCardsStyle = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
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
