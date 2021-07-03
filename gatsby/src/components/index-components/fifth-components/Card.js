import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  width: 87.47%;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  img {
    margin-bottom: 2rem;
  }
`;

const Text = styled.div`
  align-items: center;
  h3 {
    font-size: 2.5rem;
    color: var(--san-juan-blue);
  }
  p {
    text-align: center;
    line-height: 2rem;
    color: var(--lightSan-juan-blue);
  }
  @media (min-width: 700px) {
    margin-top: 3rem;
    h3 {
      font-size: 2.2rem;
    }
    p {
      width: 80%;
    }
  }
  @media (min-width: 1000px) {
    p {
      width: 75%;
    }
  }
`;

function Card({ image, title, description }) {
  return (
    <CardStyle className="flexColumn">
      <img src={image} alt="icon" />
      <Text className="flexColumn">
        <h3>{title}</h3>
        <p>{description}</p>
      </Text>
    </CardStyle>
  );
}

export default Card;
