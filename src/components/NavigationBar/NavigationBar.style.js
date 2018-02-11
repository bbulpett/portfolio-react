import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { maximum_blue_purple, ocean_blue, misty_moss, flax } from '../../theme/variables';
import { Link } from 'react-router';
import media from '../../theme/media';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  top: 0;
  right: 4.25vw;
  width: 100%;
  height: 60px;
  background-color: #FFF;
  z-index: 1040;
  ${media.phone && media.tablet`width: 100%;right: 0;`}
`;

export const NavNarrow = styled.div`
  width: 100%;
  background-color: ${flax};
  display: none;
  ${media.phone && media.tablet`display: block;`}

  i {
    color: #FFF;
    font-size: 4rem;
    z-index: 1041;
    line-height: 3.5rem;
    margin-left: 20px;
    cursor: pointer;
  }

  .navList {
    margin: 0;
    padding: 0;
    z-index: 1041;
    visibility: hidden;
    opacity: 0;

    -webkit-transition: opacity 600ms, visibility 600ms;
    transition: opacity 600ms, visibility 600ms;
  }
`;

export const NavItemNarrow = styled(Link)`
  width: 100%;
  height: 4rem;
  background-color: ${flax};
  border-top: 2px solid #FFF;
  position: relative;
  top: 0;
  padding: 0 20px;
  line-height: 4rem;
  color: #FFF;
  display: block;
  text-decoration: none;

  &:hover {
    background-color: ${misty_moss};
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
