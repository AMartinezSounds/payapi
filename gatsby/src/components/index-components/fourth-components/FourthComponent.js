import React from 'react';
import styled from 'styled-components';

import twoPhones from '../../../assets/images/illustration-simple-ui.svg';
import bg from '../../../assets/images/bg-pattern-circle.svg';

const FourthComponentStyle = styled.div`
  width: 87.47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
  img {
    display: block;
    object-fit: cover;
    width: 450px;
    margin-left: 2.5rem;
  }
  @media (min-width: 500px) {
    img {
      width: 600px;
      margin-left: 5rem;
    }
  }
  @media (min-width: 1000px) {
    height: 700px;
    flex-direction: row-reverse;
    width: 77.08%;
    /* background-image: url(${bg});
    background-size: 700px;
    background-repeat: no-repeat;
    background-position: 1000px center; */
    img {
      margin-left: 0;
    }
  }
`;

const Text = styled.div`
  h3,
  p {
    text-align: center;
  }
  p {
    line-height: 2.5rem;
  }
  @media (min-width: 500px) {
    margin-top: -3rem;
    h3 {
      font-size: 4rem;
    }
  }
  @media (min-width: 1000px) {
    h3,
    p {
      text-align: left;
    }
  }
`;

function FourthComponent() {
  return (
    <FourthComponentStyle>
      <img src={twoPhones} alt="two phones" />
      <Text>
        <h3>Simple UI & UX</h3>
        <p>
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </Text>
    </FourthComponentStyle>
  );
}

export default FourthComponent;
