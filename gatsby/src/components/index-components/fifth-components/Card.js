import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  width: 87.47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
  @media (min-width: 700px) {
    height: 100%;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 2.5rem;
  }
  p {
    text-align: center;
  }
  @media (min-width: 700px) {
    margin-top: 3rem;
    h3 {
      font-size: 2.2rem;
    }
    p {
      line-height: 2rem;
    }
  }
  @media (min-width: 1000px) {
    p {
      line-height: 2.2rem;
      width: 75%;
    }
  }
`;

function Card({ image, title, description }) {
  return (
    <CardStyle>
      <img src={image} alt="icon" />
      <Text>
        <h3>{title}</h3>
        <p>{description}</p>
      </Text>
    </CardStyle>
  );
}

export default Card;
