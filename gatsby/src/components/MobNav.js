import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MobNavStyle = styled.nav`
  position: absolute;
  width: 100vw;
  height: 90vh;
  overflow-y: hidden;
  top: ${(props) => (props.show === 'false' ? '-100vh' : '10vh')};
  transition: top 0.4s ease;
  background-color: var(--mirage-blue);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  z-index: 4;

  ul {
    margin-top: 0;
    height: 50vh;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;
    position: relative;
  }
  li {
    a {
      color: var(--water-white);
    }
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

function MobNav({ crossButton, setCrossButton }) {
  return (
    <MobNavStyle show={crossButton}>
      <ul className="flexColumn">
        <li>
          <Link to="/pricing" onClick={() => setCrossButton('false')}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setCrossButton('false')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setCrossButton('false')}>
            Contact
          </Link>
        </li>
        <Link
          className="linkButton button"
          onClick={() => setCrossButton('false')}
          to="/contact"
        >
          Schedule a Demo
        </Link>
      </ul>
    </MobNavStyle>
  );
}

export default MobNav;
