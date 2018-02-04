import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { maximum_blue_purple, ocean_blue, misty_moss } from '../../theme/variables';
import { Link } from 'react-router';
import media from '../../theme/media';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #FFF;
  z-index: 1038;
`;

export const NavWide = styled.div`
  position: absolute;
  right: 10%;
  top: 0.5em;
  border: 2px solid #AAF;
  ${media.phone`display: none;`}
  ${media.tablet`display: none;`}
  ${media.desktop`display: block;`}
  ${media.giant`display: block;`}
`;

export const NavNarrow = styled.div`
  border: 2px solid #FAA;
  ${media.phone`display: block;`}
  ${media.tablet`display: block;`}
  ${media.desktop`display: none;`}
  ${media.giant`display: none;`}
`;

export const NavItem = styled(Link)`
  margin-right: 30px;
  font-size: 1em;
  cursor: pointer;
  color: ${maximum_blue_purple};
  position: relative;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${ocean_blue};
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${misty_moss};
      z-index: -1;
      transform: scale(1.15, 1.25);
    }
  }
`;
