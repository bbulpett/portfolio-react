import styled from 'styled-components';
import { lemon_chiffon } from '../../theme/variables';
export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 80vh;
  background-image: url(${require('../../assets/background-transparency.png')});
  background-color: ${lemon_chiffon};
  opacity: 0.15;
  background-size: 55%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
`;