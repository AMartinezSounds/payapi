import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import imgMobile from '../../assets/images/image-team-members-mobile.jpg';
import imgTablet from '../../assets/images/image-team-members-tablet.jpg';
import imgDesktop from '../../assets/images/image-team-members-desktop.jpg';

const ImageContainer = styled.div``;

const ImgStyle = styled.div`
  background-image: url(${imgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  width: 375px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 700px) {
    background-image: url(${imgTablet});
    width: 769px;
  }
  @media (min-width: 1300px) {
    width: 1440px;
    height: 500px;
    background-image: url(${imgDesktop});
  }
`;

function Img() {
  return (
    <Fade bottom delay={1000}>
      <ImageContainer>
        <ImgStyle />
      </ImageContainer>
    </Fade>
  );
}

export default Img;
