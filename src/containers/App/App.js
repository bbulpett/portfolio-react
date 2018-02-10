import React, { Component } from 'react';
import { Background } from './App.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { CurrentLocation } from '../../components/PageTitle/PageTitle';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router';
import '../../assets/material-design-iconic-font/css/material-design-iconic-font.min.css';

hashHistory.listen(() => {
  window.scrollTo(0, 0);
});

ReallySmoothScroll.shim();

class App extends Component {
  componentDidMount() {
    window.scrollTop = 0;
  }
  render() {
    return (
      <div className="App">
        <CurrentLocation/>
        <Background/>
        <NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
