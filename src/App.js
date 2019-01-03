import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Alex', age: 30 },
      { id: 2, name: 'Jo', age: 28 },
      { id: 3, name: 'Lily', age : 12 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  render() {
    const buttonStyle = {
        backgroundColor: 'white',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
            <Person 
              name={person.name} 
              age={person.age} 
              click={() => this.deletePersonHandler(index)} 
              changed={(event) => this.nameChangedHandler(event, person.id)} 
              key={person.id}
              >
            </Person>
            )
          })}
            
          </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1> 

        <button 
          onClick={this.togglePersonsHandler} 
          style={buttonStyle}>Toggle Persons</button>

        {persons}
          

      </div>
    );

    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hello!!!'));
  }
}

export default App;
