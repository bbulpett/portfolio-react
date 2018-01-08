import styled from 'styled-components';
import { Flex, Div } from '../../theme/grid';
import { maximum_blue_purple, ocean_blue, misty_moss } from '../../theme/variables';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 7.5%;
  top: 1.8em;
`;

export const NavItem = styled(Div)`
  margin-right: 30px;
  font-size: 1.5em;
  cursor: pointer;
  color: ${maximum_blue_purple};
  position: relative;

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
    }
  }
`;

