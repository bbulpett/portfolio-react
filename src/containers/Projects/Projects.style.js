import styled from 'styled-components';
import {misty_moss} from '../../theme/variables';
import media from '../../theme/media';

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  padding: 3px;
  background: transparent;
  margin-left: 5px;
  border: 3px dotted ${misty_moss};
  max-width: 75vw;

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
  position: relative;
  left: 0;
  bottom: 0;
  z-index: -1;  
  font-size: 2.5em;  
  h1 {
    font: bold 100% 'Gravitas One', times, serif;
    color: ${misty_moss};    
    opacity: 0.5;
    margin: 0;
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  text-indent: 5px;
`;

export const ParallaxImageWrapper = styled.div`
  padding: 3px;
  background: transparent;
  border: 3px dotted ${misty_moss};
  margin: auto;
  ${media.tablet`
    width: 80%
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

export const ImgContainer = styled.div`
  width: 100%;
  margin: 0 0 100px;
`

export const ScreenshotThumb = styled.img`
  position: relative;
  padding: 3px;
  background: transparent;
  border: 3px dotted ${misty_moss};
  max-width: 640px;
  ${media.tablet`
    width: 100%
    min-width: 316px;
  `}
  ${media.phone`
    width: 100%;
    min-width: 316px;
    margin: 0 auto;
  `}
  ${media.desktop`
    width: 55%;
    min-width: 480px;
  `}
  ${media.giant`
    width: 55%;
    min-width: 316px;
  `}
`