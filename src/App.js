import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1> 
        <Person />
        <Person />
        <Person />
      </div>
    );

    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hello!!!'));
  }
}

export default App;
