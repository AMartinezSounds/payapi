import React from 'react';
import styled from 'styled-components';
import ContactComponent from '../components/contact-components/ContactComponent';

const ContactPageStyle = styled.div``;

function contact() {
  return (
    <ContactPageStyle className="pageBackground">
      <ContactComponent />
    </ContactPageStyle>
  );
}

export default contact;
