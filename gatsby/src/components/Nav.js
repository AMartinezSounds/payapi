import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import logo from '../assets/images/logo.svg';

const NavStyle = styled.nav`
  top: 20px;
  display: flex;
  width: 82.9%;
  min-width: 311px;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
  .logo-and-navbar {
    display: flex;
  }
  .button {
    display: none;
  }
  ul {
    display: none;
  }
  @media (min-width: 700px) {
    .button {
      display: inline-block;
    }
    min-width: 689px;
    width: 77.08%;
    max-width: 2500px;
    .logo-and-navbar {
      width: 65%;
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-inline: auto;
      width: 50%;
      li {
        a:hover {
          color: var(--san-juan-blue);
        }
      }
    }
  }
`;

const Icon = styled.div`
  display: block;
  @media (min-width: 700px) {
    display: none;
  }
`;

function Nav({ crossButton, setCrossButton }) {
  return (
    <NavStyle>
      <div className="logo-and-navbar">
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
      </div>
      <Link className="button" to="/about">
        Schedule a Demo
      </Link>
      <Icon
        className="icon"
        onClick={() =>
          crossButton === 'false'
            ? setCrossButton('true')
            : setCrossButton('false')
        }
      >
        {crossButton === 'false' ? (
          <GiHamburgerMenu style={{ fontSize: '2.5rem' }} />
        ) : (
          <ImCross style={{ fontSize: '2rem' }} />
        )}
      </Icon>
    </NavStyle>
  );
}

export default Nav;
