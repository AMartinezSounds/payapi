import React from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';

const BottomFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
  margin-block: 10rem;
  h3 {
    margin-bottom: 2rem;
    color: var(--san-juan-blue);
  }
  @media (min-width: 700px) {
    margin-block: 10rem;
  }

  @media (min-width: 1300px) {
    width: 77.08%;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

function BottomForm() {
  return (
    <BottomFormStyle>
      <h3>Ready to Start?</h3>
      <EmailForm />
    </BottomFormStyle>
  );
}

export default BottomForm;
