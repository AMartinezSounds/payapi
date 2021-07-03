import React from 'react';
import styled from 'styled-components';

import Card from './Card';

import icon1 from '../../../assets/images/card-images/icon-personal-finances.svg';
import icon2 from '../../../assets/images/card-images/icon-banking-and-coverage.svg';
import icon3 from '../../../assets/images/card-images/icon-consumer-payments.svg';

const FifthComponentStyle = styled.div`
  height: 934px;
  justify-content: space-evenly;
  @media (min-width: 700px) {
    height: 311px;
    margin-block: 8rem;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1000px) {
    width: 77.08%;
    margin-block: 0rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

function FifthComponent() {
  return (
    <FifthComponentStyle className="flexColumn">
      <Card
        image={icon1}
        title="Personal Finances"
        description="Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. "
      />
      <Card
        image={icon2}
        title="Banking & Coverage"
        description="With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts. "
      />
      <Card
        image={icon3}
        title="Consumer Payments"
        description="It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account. "
      />
    </FifthComponentStyle>
  );
}

export default FifthComponent;
