import React from 'react';
import styled from 'styled-components';

const StatementStyle = styled.div`
  margin-inline: auto;
  width: 86%;
  text-align: center;
  margin-block: 6rem;
  h3 {
    color: var(--san-juan-blue);
    font-size: 2.2rem;
  }
  p {
    color: var(--lightSan-juan-blue);
    line-height: 2.3rem;
  }
  @media (min-width: 700px) {
    h3 {
      font-size: 2.6rem;
    }
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    p {
      margin-top: 0;
      width: 60%;
      text-align: left;
    }
  }
  @media (min-width: 1000px) {
    margin-inline: auto;
    width: 70%;
  }
`;

function Statement({ title, description }) {
  return (
    <StatementStyle>
      <h3>{title}</h3>
      <p>{description}</p>
    </StatementStyle>
  );
}

export default Statement;
