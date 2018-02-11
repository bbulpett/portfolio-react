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
        <i className="zmdi zmdi-menu" onClick={this.menuToggle}></i>
        <div className="navList">
          <NavItemNarrow to="/" onClick={this.menuToggle}>Home</NavItemNarrow>
          <NavItemNarrow to="/projects" onClick={this.menuToggle}>Projects</NavItemNarrow>
          <NavItemNarrow to="/about" onClick={this.menuToggle}>About</NavItemNarrow>
        </div>
        </NavNarrow>
      </NavigationContainer>
    );
  }

  menuToggle() {
    let menu = document.querySelector('.navList');
    if (menu.style.visibility === 'visible') {
      menu.style.visibility = 'hidden';
      menu.style.opacity = '0';
    } else {
      menu.style.visibility = 'visible';
      menu.style.opacity = '1';
    }
  }

}

export default NavigationBar;