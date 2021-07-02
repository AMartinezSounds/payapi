import React from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';

const BottomFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
  h3 {
    margin-bottom: 2rem;
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
