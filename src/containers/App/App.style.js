import styled from 'styled-components';
import { flax, ocean_blue } from '../../theme/variables';

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 2.5em;
  height: 80vh;
  background-image: url(${require('../../assets/background-transparency.png')});
  background-color: ${flax};
  opacity: 0.115;
  background-size: 55%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
`;

export const Title = styled.h1`
margin-top: 0;
color: ${ocean_blue};
font-weight: 600;
`;