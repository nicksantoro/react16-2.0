import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Nick', age: 36 },
      { name: 'Alexis', age: 34 },
      { name: 'Lisa', age: 39 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('was clicked!')
    // DONT DO THIS this.state.persons[0].name = "Sam";
    this.setState( {
      persons: [
        { name: newName, age: 36 },
        { name: 'Alexis', age: 34 },
        { name: 'Lisa', age: 40 }
      ]
    } )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Nick', age: 36 },
        { name: event.target.value, age: 34 },
        { name: 'Lisa', age: 39 }
      ]
    } )

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'red',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '16px'
    }

    return (
      <div className="App">

        <h1>This is a test!</h1>
        <p>this is really working</p>
        {/* <button onClick={this.switchNameHandler.bind(this, "Sam")}>Switch Name</button> */}
        
        <button 
          style={style}
          onClick={() => this.switchNameHandler("Mark")}>Switch Name
        </button>

        <button
          style={style}
          onClick={() => this.togglePersonsHandler()}>Toggle Name
        </button>

       {/* >>>>>>> PERSONS <<<<<<< */}

        {/* cant use if statement below */}

        {this.state.showPersons ? 
          <div>

            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}>My hobby is art
            </Person>
            
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              change={this.nameChangeHandler}>My hobby is art
            </Person>
            
            <Person
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, "Samuel!")}>My hobby is art
            </Person>

          </div> : null
        }

      </div>
    );
  }
}

export default App;
