import React, { Component } from 'react';
import { NavigationContainer, NavWide, NavNarrow, NavItemWide, NavItemNarrow } from './NavigationBar.style';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavWide>
          <NavItemWide to="/">Home</NavItemWide>
          <NavItemWide to="/projects">Projects</NavItemWide>
          <NavItemWide to="/about">About</NavItemWide>
        </NavWide>
        <NavNarrow>
        <i class="zmdi zmdi-menu"></i>
          <ul>
            <NavItemNarrow><a href="#">Link 1</a></NavItemNarrow>
            <NavItemNarrow><a href="#">Link 2</a></NavItemNarrow>
            <NavItemNarrow><a href="#">Link 3</a></NavItemNarrow>
          </ul>
        </NavNarrow>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;