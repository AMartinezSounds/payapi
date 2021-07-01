import React from 'react';
import styled from 'styled-components';
import phone from '../../../assets/images/illustration-phone-mockup.inline.svg';

import EmailForm from '../../../utils/EmailForm';

const TopDesktopStyle = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
    h1 {
      margin-bottom: 2.5rem;
    }
    p {
      margin-left: 2.6rem;
      color: var(--lightSan-juan-blue);
    }
    span {
      color: var(--san-juan-blue);
    }
  }
`;

const Formulary = styled.div`
  width: 546px;
  align-items: space-between;
`;

function TopDesktop() {
  return (
    <TopDesktopStyle>
      <img src={phone} alt="phone" />
      <Formulary>
        <h1>Start building with our APIs for absolutely free.</h1>
        <EmailForm />
        <p>
          Have any questions? <span>Contact Us</span>
        </p>
      </Formulary>
    </TopDesktopStyle>
  );
}

export default TopDesktop;
