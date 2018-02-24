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
  height: calc(10vw);
  svg {
    font: bold 125% 'Gravitas One', times, serif;
    opacity: 0.5;
    fill: ${misty_moss};
  }
`;

export const Subtitle = styled.h2`
  font-size: 100%;
  margin: 10px 5px;
  text-indent: 5px;
  line-height: 1em;
`;

export const ParallaxImageWrapper = styled.div`
  padding: 3px;
  background: transparent;
  border: 3px dotted ${misty_moss};
  margin: auto;
  ${media.tablet`
    width: 80%
    min-width: 328px;
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

  & > p {
    margin-top: 0.25em;
    line-height: 0.75em;
  }
`

export const ScreenshotThumb = styled.img`
  position: relative;
  padding: 3px;
  background: transparent;
  border: 3px dotted ${misty_moss};
  max-width: 640px;
  max-height: 40vh;
  ${media.giant`
    width: 55%;
    min-width: 480px;
    
  `}
  ${media.desktop`
    width: 55%;
    min-width: 480px;
    max-height: 45vh;
  `}
  ${media.tablet`
    width: 75vw;
    min-width: 316px;
  `}
  ${media.phone`
    width: 100%;
    min-width: 316px;
    margin: 0 auto;
  `}
`