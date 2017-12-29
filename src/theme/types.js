import styled from 'styled-components';
import {ocean_blue, maximum_blue_purple} from '../theme/variables'

export const A = styled.a`
  color: ${ocean_blue};
  text-decoration: none;
  position: relative;

  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 8.5%;
    width: 100%;
    background-color: ${ocean_blue};
    z-index: -1;
    transition: height 0.125s ease, background-color 0.125s ease;
  }

  &:hover:after {
    height: 45%;
    background: linear-gradient(transparent, ${maximum_blue_purple});
  }
`;