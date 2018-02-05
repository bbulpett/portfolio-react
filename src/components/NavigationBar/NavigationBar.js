import React, { Component } from 'react';
import { NavigationContainer, NavWide, NavNarrow, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavWide>
            <div className="wideDiv">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/about">About</NavItem>
            </div>
        </NavWide>
        <NavNarrow>
          <i className="fa fa-bars fa-2x"></i>
          <div className="narrowLinks">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
          </div>
        </NavNarrow>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;