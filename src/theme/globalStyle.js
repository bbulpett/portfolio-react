import { injectGlobal } from 'styled-components';
import {registration_black, ocean_blue} from '../theme/variables';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Gravitas+One');

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
    font-family: "Courier New", Courier, monospace;
    font-size: 18pt;
    color: ${registration_black};
  }

  h1, h2, h3 {
    font-weight: 400;
    letter-spacing: -0.05rem;
  }
  
  h2, h3 {
    color: ${ocean_blue};
  }

`
