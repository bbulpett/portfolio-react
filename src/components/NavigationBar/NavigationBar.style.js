import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { maximum_blue_purple, ocean_blue, misty_moss, flax } from '../../theme/variables';
import { Link } from 'react-router';
import media from '../../theme/media';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  top: 0;
  right: 4.25vw;
  width: 50%;
  height: 60px;
  background-color: #FFF;
  z-index: 1038;
  ${media.phone`width: 100%;right: 0;`}
  ${media.tablet`width: 100%;right: 0;`}
`;

export const NavNarrow = styled.div`
  width: 100%;
  background-color: ${flax};
  display: none;
  ${media.phone`display: block;`}
  ${media.tablet`display: block;`}

  i {
    color: #FFF;
    font-size: 50px;
    z-index: 1039;
    line-height: 60px;
    margin-left: 20px;
    cursor: pointer;
  }
`;

export const NavItemNarrow = styled.li`
  width: 100%;
  background-color: ${flax};
  border-top: #777;
  color: ${maximum_blue_purple};
  position: relative;
  display: none;  

  &:hover {
    color: ${ocean_blue};
    &:after {
      // width: 100%;
      // height: 100%;
      background-color: ${misty_moss};
      // z-index: -1;
      // transform: scale(1.15, 1.25);
    }
  }
    list-style-type: none;

    a {
      color: #FFF;
      text-decoration: none;
      display: block;
      float: left;
      clear: left;
    }
  }
`;

export const NavWide = styled.div`
  position: absolute;
  right: 10%;
  top: 0.5em;
  display: block;
  ${media.phone`display: none;`}
  ${media.tablet`display: none;`}
`;

export const NavItemWide = styled(Link)`
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
