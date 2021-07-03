import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import bg from '../assets/images/bg-pattern-circle.svg';
import TopComponent from '../components/index-components/top-components/TopComponent';
import SecondComponent from '../components/index-components/second-components/SecondComponent';
import ThirdComponent from '../components/index-components/third-components/ThirdComponent';
import FourthComponent from '../components/index-components/fourth-components/FourthComponent';
import FifthComponent from '../components/index-components/fifth-components/FifthComponent';
import BottomForm from '../utils/BottomForm';

const IndexStyle = styled.div`
  background-position: center -500px;
  overflow-x: hidden;
  @media (min-width: 700px) {
    background-size: contain;
    background-position: center -350px;
  }
  @media (min-width: 1000px) {
    background-image: url(${bg}), url(${bg});
    background-size: 50%;
    background-position: 800px -200px, 1000px 1500px;
  }
`;

function index() {
  return (
    <>
      <SEO title="Home" />
      <IndexStyle className="pageBackground">
        <TopComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
        <BottomForm />
      </IndexStyle>
    </>
  );
}

export default index;
