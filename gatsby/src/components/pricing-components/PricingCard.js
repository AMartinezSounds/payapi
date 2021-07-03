import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import formatMoney from '../../utils/formatMoney';

import check from '../../assets/images/icon-check.svg';

const PricingCardStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: var(--dark-pink) !important;
    font-size: 2rem;
  }
  h2 {
    color: var(--san-juan-blue);
  }
  .description {
    display: none;
    text-align: center;
    color: var(--lightSan-juan-blue);
    width: 40%;
    line-height: 2.3rem;
  }
  .plan {
    height: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    width: 100%;
    &::after {
      content: '';
      background-color: var(--lightSan-juan-blue);
      height: 1px;
      width: 85%;
    }
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 244px;
    &::after {
      content: '';
      margin-top: 2rem;
      background-color: var(--lightSan-juan-blue);
      height: 1px;
      width: 85%;
    }
  }

  @media (min-width: 700px) {
    .plan {
      height: 180px;
      &::after {
        width: 50%;
      }
    }
    .description {
      display: block;
    }
    ul {
      &::after {
        width: 50%;
      }
    }
  }
  @media (min-width: 1000px) {
    .description {
      width: 65%;
    }
  }
  @media (min-width: 1300px) {
    width: 30%;
    justify-content: flex-start;
    .description {
      text-align: left;
      width: 100%;
    }
    .plan {
      h3 {
        font-size: 3rem;
      }
      align-items: flex-start;
      &::after {
        width: 100%;
      }
    }
    ul {
      align-items: flex-start;
      &::after {
        width: 100%;
      }
    }
  }
`;

const IncludedFeatures = styled.li`
  color: var(--san-juan-blue);
  background-color: red;
  img {
    margin-right: 2rem;
  }
`;
const ExcludedFeatures = styled.li`
  color: var(--lightSan-juan-blue);
  background-color: blue;
`;
function PricingCard({
  plan,
  description,
  price,
  includedFeatures,
  excludedFeatures,
}) {
  return (
    <PricingCardStyle>
      <div className="plan">
        <h3>{plan}</h3>
        <p className="description">{description}</p>
        <h2>{formatMoney(price)}</h2>
      </div>
      <ul>
        {includedFeatures.map((feature) => (
          <IncludedFeatures>
            <img src={check} alt="" />
            {feature}
          </IncludedFeatures>
        ))}
        {excludedFeatures.map((feature) => (
          <ExcludedFeatures>{feature}</ExcludedFeatures>
        ))}
      </ul>
      <Link className="pricingButton" to="/contact">
        Request Access
      </Link>
    </PricingCardStyle>
  );
}

export default PricingCard;
