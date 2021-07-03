import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import formatMoney from '../../utils/formatMoney';
import check from '../../assets/images/icon-check.svg';

const line = `
  content: '';
  background-color: var(--lightSan-juan-blue);
  height: 1px;
  width: 100%;
  max-width: 500px;
  margin-block: 2rem;
`;

const PricingCardStyle = styled.div`
  .plan {
    height: 185px;
    justify-content: space-around;
    align-items: center;
    h3 {
      color: var(--dark-pink);
      font-size: 2.5rem;
    }
    .description {
      color: var(--lightSan-juan-blue);
      width: 50%;
      text-align: center;
      line-height: 2rem;
      display: none;
    }
    h2 {
      color: var(--san-juan-blue);
    }
  }
  .list-of-features-container {
    justify-content: center;
    align-items: center;
    &::after,
    &::before {
      ${line}
    }
  }
  .list-of-features {
    width: 50%;
    max-width: 200px;
    height: 244px;
    font-size: 1.3rem;
    justify-content: space-between;
    img {
      width: 2rem;
    }
  }
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  @media (min-width: 700px) {
    .plan {
      .description {
        display: block;
      }
    }
  }
  @media (min-width: 1000px) {
    width: 30%;
    .plan {
      align-items: flex-start;
      .description {
        width: 90%;
        text-align: left;
      }
    }
    .list-of-features-container {
      align-items: flex-start;
    }
  }
`;

const IncludedFeatures = styled.li`
  color: var(--san-juan-blue);
  display: grid;
  grid-template-columns: repeat(2, 40%);
  .check {
    justify-self: center;
  }
`;

const ExcludedFeatures = styled(IncludedFeatures)`
  color: var(--lightSan-juan-blue);
  .invisibility {
    visibility: hidden;
  }
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
      <div className="flexColumn plan">
        <h3>{plan}</h3>
        <p className="description">{description}</p>
        <h2>{formatMoney(price)}</h2>
      </div>
      <div className="flexColumn list-of-features-container">
        <ul className="flexColumn list-of-features">
          {includedFeatures.map((feature) => (
            <IncludedFeatures>
              <img className="check" src={check} alt="check icon" />
              {feature}
            </IncludedFeatures>
          ))}
          {excludedFeatures.map((feature) => (
            <ExcludedFeatures>
              <img className="invisibility" src={check} alt="check icon" />
              {feature}
            </ExcludedFeatures>
          ))}
        </ul>
      </div>
      <div className="button-container">
        <Link className="linkButton pricingButton" to="/contact">
          Request Access
        </Link>
      </div>
    </PricingCardStyle>
  );
}

export default PricingCard;
