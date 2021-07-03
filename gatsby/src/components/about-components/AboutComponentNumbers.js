import React from 'react';
import styled from 'styled-components';

const AboutComponentNumbersStyle = styled.div`
  height: 398px;
  align-items: center;
  &::before {
    margin-top: 2rem;
    content: '';
    background-color: var(--lightSan-juan-blue);
    height: 1px;
    width: 90%;
  }
  &::after {
    margin-top: 2rem;
    content: '';
    background-color: var(--lightSan-juan-blue);
    height: 1px;
    width: 90%;
  }
  .numbers {
    width: 86%;
    align-items: center;
    justify-content: center;
    p {
      color: var(--lightSan-juan-blue);
    }
    h2 {
      color: var(--dark-pink);
    }
  }
  @media (min-width: 1000px) {
    &::before,
    &::after {
      width: 77%;
    }
  }
  @media (min-width: 1300px) {
    width: 77.08%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12rem;
    margin-bottom: 12rem;
    &::before,
    &::after {
      display: none;
    }
    height: 150px;
    flex-direction: row;
    .numbers {
      &::before {
        margin-top: 2rem;
        content: '';
        background-color: var(--lightSan-juan-blue);
        height: 1px;
        width: 90%;
      }
      &::after {
        margin-top: 2rem;
        content: '';
        background-color: var(--lightSan-juan-blue);
        height: 1px;
        width: 90%;
      }
    }
  }
`;

function AboutComponentNumbers() {
  return (
    <AboutComponentNumbersStyle className="flexColumn">
      <div className="flexColumn numbers">
        <p>Team Members</p>
        <h2>300+</h2>
      </div>
      <div className="flexColumn numbers">
        <p>Offices in the UK</p>
        <h2>3</h2>
      </div>
      <div className="flexColumn numbers">
        <p>Transactions analyzed</p>
        <h2>10M+</h2>
      </div>
    </AboutComponentNumbersStyle>
  );
}

export default AboutComponentNumbers;
