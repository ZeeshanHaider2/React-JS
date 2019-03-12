import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class Appccccc extends Component {
  state = {
    persons: [
      { name: "Zeeeshan", age: 39 },
      { name: "Martin", age: 32 },
      { name: "Junghans", age: 85 }
    ],
    otherState: "Persons other state",
    showPersons: false
  };

  clickHandler = () => {
    //console.log("Was clciked!");
    this.setState({
      persons: [
        { name: "Zeeeshan Haider", age: 39 },
        { name: "Martin", age: 35 },
        { name: "Jens Junghans", age: 85 }
      ]
    });
  };
  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Zeeeshan Haider", age: 39 },
        { name: event.target.value, age: 35 },
        { name: "Jens Junghans", age: 85 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          >
            My Hobbies : Cricket,Photpgraphy
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.clickHandler}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!!!</p>
        <button onClick={this.togglePersonsHandler}>Switch</button>
        {persons}
      </div>
    );
  }
}

//export default App;
