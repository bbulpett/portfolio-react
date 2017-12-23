import styled from 'styled-components';
import {blueberry, maximum_blue_purple} from '../theme/variables'

export const A = styled.a`
  color: ${blueberry};
  text-decoration: none;
  position: relative;

  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 8.5%;
    width: 100%;
    background-color: ${blueberry};
    z-index: -1;
    transition: height 0.125s ease, background-color 0.125s ease;
  }

  &:hover:after {
    height: 45%;
    background: linear-gradient(transparent, ${maximum_blue_purple});
  }
`;