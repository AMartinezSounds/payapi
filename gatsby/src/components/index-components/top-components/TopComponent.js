import React from 'react';
import Fade from 'react-reveal/Fade';
import TopPhoneTablet from './TopPhoneTablet';
import TopDesktop from './TopDesktop';

function TopComponent() {
  return (
    <Fade>
      <TopPhoneTablet />
      <TopDesktop />
    </Fade>
  );
}

export default TopComponent;
