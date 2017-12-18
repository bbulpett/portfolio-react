import React, { Component } from 'react';
import { Background } from './App.style';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
