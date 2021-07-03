import React from 'react';
import styled from 'styled-components';
import BottomForm from '../../utils/BottomForm';
import Companies from './Companies';
import ContactForm from './ContactForm';

const ContactComponentStyle = styled.div`
  .title-page {
    color: var(--san-juan-blue);
    width: 327px;
    line-height: 3.5rem;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding-top: 3rem;
  }
  @media (min-width: 1300px) {
    width: 77.08%;
    margin-left: auto;
    margin-right: auto;
    .title-page {
      padding-top: 8rem;
      font-size: 5rem;
      text-align: left;
      width: 60%;
      margin-left: 0;
      margin-right: auto;
      line-height: 5rem;
    }
    .form-companies {
      display: flex;
      align-items: center;
    }
  }
`;

function ContactComponent() {
  return (
    <ContactComponentStyle>
      <h3 className="title-page">
        Submit a help request and we’ll get in touch shortly.
      </h3>
      <div className="form-companies">
        <ContactForm />
        <Companies />
      </div>
      <BottomForm />
    </ContactComponentStyle>
  );
}

export default ContactComponent;
