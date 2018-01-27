import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { maximum_blue_purple, ocean_blue, misty_moss } from '../../theme/variables';
import { Link } from 'react-router';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 7.5%;
  top: 1em;
  background-color: #FFF;
`;

export const NavItem = styled(Link)`
  margin-right: 30px;
  font-size: 1em;
  cursor: pointer;
  color: ${maximum_blue_purple};
  position: relative;
  text-decoration: none;

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

