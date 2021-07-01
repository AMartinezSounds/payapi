import React, { useState } from 'react';
import Nav from './Nav';
import MobNav from './MobNav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

function Layout({ children }) {
  const [crossButton, setCrossButton] = useState('false');
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Nav setCrossButton={setCrossButton} crossButton={crossButton} />
      <MobNav crossButton={crossButton} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
