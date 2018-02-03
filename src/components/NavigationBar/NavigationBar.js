import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';
import DynamicHeader from 'react-sticky-dynamic-header';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/about">About</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;