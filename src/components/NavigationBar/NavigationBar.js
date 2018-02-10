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
        <NavNarrow className="navNarrow">
        <i className="zmdi zmdi-menu" onClick={this.menuToggle}></i>
          <ul>
            <NavItemNarrow><a href="/" onClick={this.menuToggle}>Link 1</a></NavItemNarrow>
            <NavItemNarrow><a href="/projects" onClick={this.menuToggle}>Link 2</a></NavItemNarrow>
            <NavItemNarrow><a href="/about" onClick={this.menuToggle}>Link 3</a></NavItemNarrow>
          </ul>
        </NavNarrow>
      </NavigationContainer>
    );
  }

  menuToggle() {
    let menu = document.querySelector('.navNarrow');
    console.log(menu.style.display);
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }

}

export default NavigationBar;