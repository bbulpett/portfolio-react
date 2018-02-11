import styled from 'styled-components';
import { ocean_blue } from '../../theme/variables';
import media from '../../theme/media';

export const Title = styled.h1`
  position: fixed;
  left: 10vw;
  top: 0;
  margin-top: 0;
  color: ${ocean_blue};
  font-weight: 600;
  background-color: #FFF;
  z-index: 1041;
  
  ${media.phone && media.tablet`
    writing-mode:tb-rl;
    white-space: nowrap;
    position: fixed;
    font-size: 180%;
    background-color: transparent;
    top: 100px;
    left: -30px;
    transform: rotate(-180deg);
    transition: transform 0.35s ease-in, left 0.35s ease-in, top 0.35s linear;
    z-index: 1039;
  `}

`;