import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/dm-serif-display-v5-latin-regular.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'DM Serif Display';
    src: url(${font});
  }
  html {
    font-family: 'DM Serif Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--mirage-blue);
  }
  p, li {
    letter-spacing: 0.5px;
    font-size: 1.5em;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  h1 {
	font-size: 7.2em;
  }
  h2 {
	font-size: 4.8em;
  }
  h3 {
	font-size: 3.2em;
  }
  a {
	color: var(--lightSan-juan-blue);
        text-decoration: none;
        /* Chrome renders this weird with this font, so we turn it off */
        text-decoration-skip-ink: none;
  }
  .center {
    text-align: center;
  }
`;

export default Typography;
