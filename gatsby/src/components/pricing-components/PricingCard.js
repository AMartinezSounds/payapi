import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import formatMoney from '../../utils/formatMoney';

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
  .pricingButton {
    padding: 10px 25px;
    border: 1px solid var(--mirage-blue);
    border-radius: 50px;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    color: var(--mirage-blue);
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
`;

function PricingCard({ plan, description, features, price, id }) {
  return (
    <PricingCardStyle>
      <div className="plan">
        <h3>{plan}</h3>
        <p className="description">{description}</p>
        <h2>{formatMoney(price)}</h2>
      </div>
      <ul className="test">
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <Link className="pricingButton" to="/contact">
        Request Access
      </Link>
    </PricingCardStyle>
  );
}

export default PricingCard;
