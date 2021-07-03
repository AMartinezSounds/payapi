import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import code from '../../../assets/images/illustration-easy-to-implement.svg';

const ThirdComponentStyles = styled.div`
  width: 87.47%;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  img {
    display: block;
    object-fit: cover;
    width: 450px;
    margin-left: 4rem;
  }
  @media (min-width: 500px) {
    img {
      width: 600px;
      margin-left: 5rem;
    }
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    width: 77.08%;
    img {
      margin-left: 0;
    }
  }
`;

const Text = styled.div`
  h3 {
    color: var(--san-juan-blue);
  }
  h3,
  p {
    text-align: center;
  }
  p {
    line-height: 2rem;
    color: var(--lightSan-juan-blue);
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

function ThirdComponent() {
  return (
    <Fade left duration={1700} fraction="0.3">
      <ThirdComponentStyles className="flexColumn">
        <img src={code} alt="code demonstration" />
        <Text>
          <h3>Easy to implement</h3>
          <p>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </Text>
      </ThirdComponentStyles>
    </Fade>
  );
}

export default ThirdComponent;
