import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import SEO from '../components/SEO';
import ContactComponent from '../components/contact-components/ContactComponent';

const ContactPageStyle = styled.div``;

function contact() {
  return (
    <>
      <SEO title="Contact" />
      <Fade>
        <ContactPageStyle className="pageBackground">
          <ContactComponent />
        </ContactPageStyle>
      </Fade>
    </>
  );
}

export default contact;
