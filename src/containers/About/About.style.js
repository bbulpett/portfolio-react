import styled from 'styled-components';
import { misty_moss } from '../../theme/variables';
import media from '../../theme/media';

export const TimelineWrapper = styled.div`
  margin: 30px auto;
  width: 70vw;
  max-width: 640px;
  height: 400px;
  padding: 3px;
  background: transparent;
  border: 3px dotted ${misty_moss};
`;

export const Blurb = styled.div`
  font-size: 16pt;
  margin: 2.5%;
  max-width: 92.5%;

  ${media.phone && media.tablet`
    font-size: 12pt;
  `}
`;

export const H2 = styled.h2`
  margin-bottom: 10px;

  ${media.phone && media.tablet`
    font-size: 20pt;
    line-spacing: 10px;
  `}
`;