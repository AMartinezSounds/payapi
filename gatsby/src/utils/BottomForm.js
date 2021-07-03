import React from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';

const BottomFormStyle = styled.div`
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  margin-bottom: 10rem;
  h3 {
    font-size: 5rem;
    margin-bottom: 2rem;
    color: var(--san-juan-blue);
  }
  @media (min-width: 700px) {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }

  @media (min-width: 1300px) {
    width: 90.08%;
    max-width: 1110px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

function BottomForm() {
  return (
    <BottomFormStyle className="flexColumn">
      <h3>Ready to Start?</h3>
      <EmailForm />
    </BottomFormStyle>
  );
}

export default BottomForm;
