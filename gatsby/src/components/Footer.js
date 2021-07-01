import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import bg from '../assets/images/bg-pattern-circle.svg';
import logo from '../assets/images/logo-footer.svg';
import facebook from '../assets/images/social/facebook.svg';
import twitter from '../assets/images/social/twitter.svg';
import linkedin from '../assets/images/social/linkedin.svg';

const FooterStyle = styled.footer`
  height: 353px;
  background-image: url(${bg});
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: center 150px;
  background-color: var(--mirage-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  ul {
    height: 115px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    li {
      a {
        color: var(--water-white);
      }
    }
  }
  .social-media {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
  }
  @media (min-width: 700px) {
    height: 100px;
    flex-direction: row;
    justify-content: space-around;
    background-position: 350px 0px;
    ul {
      height: auto;
      width: 30%;
      flex-direction: row;
    }
  }
  @media (min-width: 700px) {
    background-position: 1000px 0px;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="social-media">
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
          <img src={facebook} alt="facebook" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.twitter.com">
          <img src={twitter} alt="twitter" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </FooterStyle>
  );
}

export default Footer;
