import React from 'react';
import styled from 'styled-components';

import EmailForm from '../../../utils/EmailForm';

import phone from '../../../assets/images/illustration-phone-mockup.inline.svg';

const TopPhoneTabletStyle = styled.div`
  height: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  img {
    margin-left: 4rem;
    object-fit: contain;
    display: block;
  }
  p {
    color: var(--lightSan-juan-blue);
  }
  span {
    color: var(--san-juan-blue);
  }
  @media (min-width: 500px) {
    img {
      margin-left: 5rem;
    }
  }
  @media (min-width: 700px) {
    align-items: center;
    img {
      width: 50%;
    }
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

const Formulary = styled.div`
  margin-inline: auto;
  width: 82.9%;
  min-width: 327px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h3 {
    text-align: center;
    width: 75%;
  }
  @media (min-width: 700px) {
    width: 74.61%;
    height: 225px;
    h3 {
      width: 100%;
    }
  }
`;

function TopPhoneTablet() {
  return (
    <TopPhoneTabletStyle>
      <img src={phone} alt="phone" />
      <Formulary>
        <h3>Start building with our APIs for absolutely free.</h3>
        <EmailForm />
        <p>
          Have any questions? <span>Contact Us</span>
        </p>
      </Formulary>
    </TopPhoneTabletStyle>
  );
}

export default TopPhoneTablet;
