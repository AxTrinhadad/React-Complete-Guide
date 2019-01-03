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

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: newName, age: 30 },
      { name: 'Jo', age: 28 },
      { name: 'Lily', age : 10 }
    ]});
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Alex', age: 30 },
      { name: event.target.value, age: 28 },
      { name: 'Lily', age : 12 }
    ]});
  }

  render() {
    const buttonStyle = {
        backgroundColor: 'white',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1> 

        <button 
          onClick={() => this.switchNameHandler('Alexander !!')} 
          style={buttonStyle}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} >
          <p>I like food!</p>
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Alex!')} 
          changed={this.nameChangedHandler}
          >
          <p>My Hobbies:</p> 
          <ol>
            <li>Tennis</li>  
            <li>Racing</li>
            <li>Swimming</li>
          </ol>
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );

    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hello!!!'));
  }
}

export default App;
