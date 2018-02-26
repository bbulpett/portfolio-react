import { injectGlobal } from 'styled-components';
import {registration_black, ocean_blue} from '../theme/variables';
import blockTTF from '../assets/fonts/block/block-webfont.woff2';
import blockWOFF from '../assets/fonts/block/block-webfont.woff';
import blockWOFF2 from '../assets/fonts/block/block.ttf';

/* eslint-disable */
injectGlobal`
  // @import url('https://fonts.googleapis.com/css?family=Gravitas+One');
  @font-face {
    font-family: 'Block';
    src:  url(${blockWOFF2}) format('woff2'),
          url(${blockWOFF}) format('woff'),
          url(${blockTTF}) format('truetype');
  }

  // Global reset for wrappers
  html, body, body div {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  body {
    background-color: #FFF;
    font-family: Courier, "Courier New", monospace;
    font-size: 18pt;
    color: ${registration_black};
    overflow-x: hidden;
  }

  h1, h2, h3 {
    font-weight: 400;
    letter-spacing: -0.05rem;
  }
  
  h2, h3 {
    color: ${ocean_blue};
  }

`
