import styled from 'styled-components';
import {misty_moss} from '../../theme/variables';
import media from '../../theme/media';

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;

  & > img {
    transition: transform .3s;
  }
  &:hover {
    & > img {
      transform: scale(1.3);
    }
  }
`;

export const Index = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;  
  font-size: 3em;  
  h1 {
    margin: 0;
    font-family: 'Gravitas One', times, serif;
    font-weight: bold;
    color: ${misty_moss};
    opacity: 0.5;
    transform: translateY(10%);
  }
`;

export const ParallaxImageWrapper = styled.div`
  margin: auto;
  ${media.tablet`
    width: 
    min-width: 316px;
  `}
  ${media.phone`
    width: 90%;
    min-width: 316px;
  `}
  ${media.desktop`
    width: 55%;
  `}
  ${media.giant`
    width: 55%;
  `}
`;
