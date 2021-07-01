import React from 'react';
import styled from 'styled-components';

import EmailForm from '../../../utils/EmailForm';

const BottomComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
  h3 {
    margin-bottom: 2rem;
  }
`;

function BottomComponent() {
  return (
    <BottomComponentStyle>
      <h3>Ready to Start?</h3>
      <EmailForm />
    </BottomComponentStyle>
  );
}

export default BottomComponent;
