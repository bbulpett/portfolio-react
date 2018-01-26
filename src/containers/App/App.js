import React, { Component } from 'react';
import { Background } from './App.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hashHistory, withRouter } from 'react-router';

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
        <Background/>
        <NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
