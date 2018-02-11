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
    console.log(menu.style.display);
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }

}

export default NavigationBar;