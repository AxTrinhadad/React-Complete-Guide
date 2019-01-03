import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Alex', age: 30 },
      { name: 'Jo', age: 28 },
      { name: 'Lily', age : 12 }
    ]
  }

  switchNameHandler = () => {
    this.setState({persons: [
      { name: 'Alexander', age: 30 },
      { name: 'Jo', age: 28 },
      { name: 'Lily', age : 10 }
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1> 

        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >
          <p>I like food!</p>
        </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          <p>My Hobbies:</p> 
          <ol>
            <li>Tennis</li>  
            <li>Racing</li>
            <li>Swimming</li>
          </ol>
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hello!!!'));
  }
}

export default App;
